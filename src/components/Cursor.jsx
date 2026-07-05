import { useEffect, useRef } from 'react'

const INTERACTIVE_SELECTOR = 'a, button, input, [role="button"], .btn, .pill, .tool-chip, .pow-item, .hub-node, .hub-core, .skill-card'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    document.documentElement.classList.add('has-custom-cursor')

    const dot = dotRef.current
    const ring = ringRef.current
    let mouseX = -100
    let mouseY = -100
    let ringX = -100
    let ringY = -100
    let raf

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`
      ring.style.opacity = '1'
      dot.style.opacity = '1'
    }

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`
      raf = requestAnimationFrame(tick)
    }

    const onOver = (e) => {
      if (e.target.closest(INTERACTIVE_SELECTOR)) ring.classList.add('cursor-ring--active')
    }
    const onOut = (e) => {
      if (e.target.closest(INTERACTIVE_SELECTOR)) ring.classList.remove('cursor-ring--active')
    }
    const onDown = () => ring.classList.add('cursor-ring--down')
    const onUp = () => ring.classList.remove('cursor-ring--down')
    const onLeaveWindow = () => {
      ring.style.opacity = '0'
      dot.style.opacity = '0'
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseleave', onLeaveWindow)
    raf = requestAnimationFrame(tick)

    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseleave', onLeaveWindow)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
