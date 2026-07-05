import { useEffect, useRef } from 'react'

const PARTICLES = [
  { top: '14%', left: '9%', size: 10, depth: 0.035, color: 'var(--violet)' },
  { top: '68%', left: '6%', size: 6, depth: 0.055, color: 'var(--magenta)' },
  { top: '22%', left: '91%', size: 8, depth: 0.045, color: 'var(--magenta)' },
  { top: '78%', left: '88%', size: 12, depth: 0.025, color: 'var(--violet)' },
  { top: '48%', left: '50%', size: 5, depth: 0.06, color: 'var(--silver)' },
  { top: '85%', left: '30%', size: 7, depth: 0.04, color: 'var(--violet)' },
]

export default function FloatingParticles() {
  const dotsRef = useRef([])
  const mouse = useRef({ x: 0, y: 0 })
  const scrollY = useRef(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const fine = window.matchMedia('(pointer: fine)').matches

    const apply = () => {
      dotsRef.current.forEach((el, i) => {
        if (!el) return
        const depth = PARTICLES[i].depth
        const mx = mouse.current.x * depth * 120
        const my = mouse.current.y * depth * 120
        const sy = scrollY.current * depth * -1.4
        el.style.transform = `translate(${mx}px, ${my + sy}px)`
      })
    }

    const onMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2
      apply()
    }

    const onScroll = () => {
      scrollY.current = window.scrollY
      apply()
    }

    if (fine) window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      if (fine) window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="floating-particles" aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className="floating-dot"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.color,
            color: p.color,
            animationDelay: `${i * 0.6}s`,
          }}
        />
      ))}
    </div>
  )
}
