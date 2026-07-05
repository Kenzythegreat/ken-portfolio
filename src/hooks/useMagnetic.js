import { useEffect, useRef } from 'react'

export default function useMagnetic(strength = 0.3, max = 12) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const relX = e.clientX - (rect.left + rect.width / 2)
      const relY = e.clientY - (rect.top + rect.height / 2)
      const dx = Math.max(Math.min(relX * strength, max), -max)
      const dy = Math.max(Math.min(relY * strength, max), -max)
      el.style.transform = `translate(${dx}px, ${dy}px) translateY(-2px)`
    }

    const onLeave = () => {
      el.style.transform = ''
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)

    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength, max])

  return ref
}
