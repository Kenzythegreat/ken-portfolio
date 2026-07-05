import { useEffect, useRef, useState } from 'react'

export default function AnimatedNumber({ value, suffix = '', duration = 900 }) {
  const ref = useRef(null)
  const played = useRef(false)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value)
      return
    }

    const start = () => {
      if (played.current) return
      const rect = el.getBoundingClientRect()
      if (!(rect.top < window.innerHeight - 80 && rect.bottom > 0)) return
      played.current = true

      const steps = 24
      const stepDuration = duration / steps
      let i = 0
      const timer = setInterval(() => {
        i += 1
        const progress = Math.min(i / steps, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setDisplay(Math.round(value * eased))
        if (i >= steps) clearInterval(timer)
      }, stepDuration)
    }

    window.addEventListener('scroll', start, { passive: true })
    window.addEventListener('resize', start)
    start()

    return () => {
      window.removeEventListener('scroll', start)
      window.removeEventListener('resize', start)
    }
  }, [value, duration])

  return (
    <>
      <span ref={ref}>{display}</span>
      {suffix && <span>{suffix}</span>}
    </>
  )
}
