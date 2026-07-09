import { useEffect, useRef } from 'react'

const SHRINK_DISTANCE = 300
const MIN_SCALE = 0.82
const MAX_STRETCH = 100
const RESISTANCE = 0.4
const SNAP_TRANSITION = 'transform 0.35s cubic-bezier(.22,1,.36,1), height 0.35s cubic-bezier(.22,1,.36,1), border-radius 0.35s cubic-bezier(.22,1,.36,1)'

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v))
}

export default function TravelHero() {
  const imageRef = useRef(null)

  useEffect(() => {
    const img = imageRef.current
    if (!img) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let pulling = false
    let startY = 0

    const applyShrink = () => {
      const y = window.scrollY
      const progress = clamp(y / SHRINK_DISTANCE, 0, 1)
      const scale = 1 - progress * (1 - MIN_SCALE)
      img.style.transform = `scale(${scale})`
      img.style.borderRadius = `${progress * 24}px`
    }

    const onScroll = () => {
      if (pulling) return
      if (window.scrollY >= 0) applyShrink()
    }

    const onTouchStart = (e) => {
      if (window.scrollY <= 0) {
        startY = e.touches[0].clientY
        pulling = true
        img.style.transition = 'none'
      }
    }

    const onTouchMove = (e) => {
      if (!pulling) return
      const delta = e.touches[0].clientY - startY
      if (delta > 0 && window.scrollY <= 0) {
        const stretch = Math.min(delta * RESISTANCE, MAX_STRETCH)
        img.style.transform = `scale(${1 + stretch / 300})`
        img.style.height = `calc(100% + ${stretch}px)`
      }
    }

    const onTouchEnd = () => {
      if (pulling) {
        img.style.transition = SNAP_TRANSITION
        img.style.height = '100%'
        applyShrink()
      }
      pulling = false
    }

    let wheelStretch = 0
    let decayFrame
    const decayWheelStretch = () => {
      cancelAnimationFrame(decayFrame)
      const step = () => {
        wheelStretch *= 0.85
        img.style.transform = `scale(${1 + wheelStretch / 300})`
        if (wheelStretch > 0.5) {
          decayFrame = requestAnimationFrame(step)
        } else {
          applyShrink()
        }
      }
      decayFrame = requestAnimationFrame(step)
    }

    const onWheel = (e) => {
      if (window.scrollY <= 0 && e.deltaY < 0) {
        img.style.transition = 'none'
        wheelStretch = Math.min(wheelStretch + Math.abs(e.deltaY) * 0.15, MAX_STRETCH)
        img.style.transform = `scale(${1 + wheelStretch / 300})`
        decayWheelStretch()
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('wheel', onWheel, { passive: true })
    document.addEventListener('touchstart', onTouchStart, { passive: true })
    document.addEventListener('touchmove', onTouchMove, { passive: true })
    document.addEventListener('touchend', onTouchEnd, { passive: true })
    applyShrink()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('wheel', onWheel)
      document.removeEventListener('touchstart', onTouchStart)
      document.removeEventListener('touchmove', onTouchMove)
      document.removeEventListener('touchend', onTouchEnd)
      cancelAnimationFrame(decayFrame)
    }
  }, [])

  return (
    <div className="travel-hero-wrap">
      <div
        className="travel-hero-image"
        ref={imageRef}
        style={{ backgroundImage: "url('/photos/travel/bali-1.jpg')" }}
      >
        <div className="travel-hero-overlay">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Ken Curtina</p>
          <h1 className="page-header__title">Travel Tales</h1>
          <p className="hero__lede" style={{ margin: '18px auto 0' }}>
            A few stamps in the passport along the way, click any photo for a closer look.
          </p>
        </div>
      </div>
    </div>
  )
}
