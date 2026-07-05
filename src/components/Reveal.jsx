import { useEffect, useRef, useState } from 'react'

export default function Reveal({ as: Tag = 'div', className = '', delay = 0, style, children, ...rest }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Toggles both ways (not one-time): elements re-animate every time they
    // enter the viewport, whether scrolling down into them or back up into
    // them, and reset to hidden once they leave either edge. Driven off
    // scroll/resize + getBoundingClientRect directly rather than
    // IntersectionObserver, which some throttled/backgrounded tabs delay.
    const check = () => {
      const rect = el.getBoundingClientRect()
      setInView(rect.top < window.innerHeight - 80 && rect.bottom > 0)
    }

    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    check()

    return () => {
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-in' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
