import { useRef, useState, useEffect } from 'react'
import Matter from 'matter-js'
import './FallingText.css'

// Adapted from the React Bits FallingText component. The stock version only
// triggers once (IntersectionObserver, no way back). This version instead
// tracks scroll position continuously: scrolling the box into view lets the
// words fall apart via matter-js physics, scrolling back up above it tears
// the simulation down and restores the plain, readable paragraph.
export default function FallingText({
  className = '',
  text = '',
  highlightWords = [],
  highlightClass = 'highlighted',
  backgroundColor = 'transparent',
  wireframes = false,
  gravity = 0.9,
  mouseConstraintStiffness = 0.6,
  fontSize = '1rem',
}) {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const canvasContainerRef = useRef(null)
  const engineRef = useRef(null)
  const runnerRef = useRef(null)
  const renderRef = useRef(null)
  const wordBodiesRef = useRef([])
  const rafRef = useRef(null)
  const [fallen, setFallen] = useState(false)

  useEffect(() => {
    if (!textRef.current) return
    const words = text.split(' ')
    textRef.current.innerHTML = words
      .map((word) => {
        const isHighlighted = highlightWords.some((hw) => word.startsWith(hw))
        return `<span class="word ${isHighlighted ? highlightClass : ''}">${word}</span>`
      })
      .join(' ')
  }, [text, highlightWords, highlightClass])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const check = () => {
      const rect = el.getBoundingClientRect()
      setFallen(rect.top < window.innerHeight * 0.4)
    }

    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    check()

    return () => {
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [])

  useEffect(() => {
    const teardown = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
      if (renderRef.current) {
        Matter.Render.stop(renderRef.current)
        renderRef.current = null
      }
      if (canvasContainerRef.current) canvasContainerRef.current.innerHTML = ''
      if (runnerRef.current) {
        Matter.Runner.stop(runnerRef.current)
        runnerRef.current = null
      }
      if (engineRef.current) {
        Matter.World.clear(engineRef.current.world)
        Matter.Engine.clear(engineRef.current)
        engineRef.current = null
      }
      wordBodiesRef.current.forEach(({ elem }) => {
        elem.style.position = ''
        elem.style.left = ''
        elem.style.top = ''
        elem.style.transform = ''
      })
      wordBodiesRef.current = []
      if (containerRef.current) containerRef.current.style.height = ''
    }

    if (!fallen) {
      teardown()
      return
    }
    if (!textRef.current || !containerRef.current) return

    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint, Body } = Matter

    const containerRect = containerRef.current.getBoundingClientRect()
    const width = containerRect.width
    const height = containerRect.height
    if (width <= 0 || height <= 0) return

    // Once the words switch to position:absolute they leave normal flow, so
    // the container (sized purely by its content until now) would otherwise
    // collapse to zero height and clip the whole simulation out of view.
    containerRef.current.style.height = `${height}px`

    const engine = Engine.create()
    engine.world.gravity.y = gravity
    engineRef.current = engine

    const render = Render.create({
      element: canvasContainerRef.current,
      engine,
      options: { width, height, background: backgroundColor, wireframes }
    })
    renderRef.current = render

    const boundaryOptions = { isStatic: true, render: { fillStyle: 'transparent' } }
    const floor = Bodies.rectangle(width / 2, height + 25, width, 50, boundaryOptions)
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height, boundaryOptions)
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, boundaryOptions)
    const ceiling = Bodies.rectangle(width / 2, -25, width, 50, boundaryOptions)

    const wordSpans = textRef.current.querySelectorAll('.word')
    const wordBodies = [...wordSpans].map((elem) => {
      const rect = elem.getBoundingClientRect()
      const x = rect.left - containerRect.left + rect.width / 2
      const y = rect.top - containerRect.top + rect.height / 2
      const body = Bodies.rectangle(x, y, rect.width, rect.height, {
        render: { fillStyle: 'transparent' },
        restitution: 0.8,
        frictionAir: 0.01,
        friction: 0.2
      })
      Body.setVelocity(body, { x: (Math.random() - 0.5) * 5, y: 0 })
      Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05)
      return { elem, body }
    })
    wordBodiesRef.current = wordBodies

    wordBodies.forEach(({ elem, body }) => {
      elem.style.position = 'absolute'
      elem.style.left = `${body.position.x}px`
      elem.style.top = `${body.position.y}px`
      elem.style.transform = 'translate(-50%, -50%)'
    })

    const mouse = Mouse.create(containerRef.current)
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: mouseConstraintStiffness, render: { visible: false } }
    })
    render.mouse = mouse

    World.add(engine.world, [floor, leftWall, rightWall, ceiling, mouseConstraint, ...wordBodies.map((wb) => wb.body)])

    const runner = Runner.create()
    runnerRef.current = runner
    Runner.run(runner, engine)
    Render.run(render)

    const updateLoop = () => {
      wordBodies.forEach(({ body, elem }) => {
        const { x, y } = body.position
        elem.style.left = `${x}px`
        elem.style.top = `${y}px`
        elem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`
      })
      rafRef.current = requestAnimationFrame(updateLoop)
    }
    updateLoop()

    return teardown
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fallen, gravity, wireframes, backgroundColor, mouseConstraintStiffness])

  return (
    <div ref={containerRef} className={`falling-text-container ${className}`}>
      <div ref={textRef} className="falling-text-target" style={{ fontSize, lineHeight: 1.4 }} />
      <div ref={canvasContainerRef} className="falling-text-canvas" />
    </div>
  )
}
