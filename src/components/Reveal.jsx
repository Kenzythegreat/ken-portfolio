import { useEffect, useRef, useState } from 'react'

export default function Reveal({ as: Tag = 'div', className = '', delay = 0, style, children, ...rest }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let done = false

    const reveal = () => {
      if (done) return
      done = true
      setInView(true)
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }

    // Fallback for fast/instant scroll jumps (e.g. anchor navigation, "End"
    // key, scrollbar drag) that can skip over the intersecting frame
    // entirely, which IntersectionObserver alone would never report.
    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.9 || rect.bottom < 0) reveal()
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal()
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    )
    observer.observe(el)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
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
