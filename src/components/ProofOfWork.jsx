import { useEffect, useState } from 'react'

const FILES = [
  '2nd Post IG',
  '4th of July New',
  'Bad Domain',
  'Dayo Feedback from Raylu',
  'First Slide',
  'GTM Strat',
  'July 10, 2026 - IG Post',
  'July 10, 26 - LinkedIn Post',
  'July 6, 2026',
  'July 9, 2026 - IG Post',
  'Kelly at Arbor',
]

const IMAGES = FILES.map((name) => ({
  thumb: `/photos/thumbs/${encodeURIComponent(name)}.jpg`,
  full: `/photos/${encodeURIComponent(name)}.png`,
}))

export default function ProofOfWork() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e) => { if (e.key === 'Escape') setActive(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <section className="pow">
      <p className="eyebrow" style={{ justifyContent: 'center', display: 'flex', marginBottom: 24 }}>Proof of Work</p>

      <div className="pow-track">
        <div className="pow-row">
          {[...IMAGES, ...IMAGES].map((img, i) => (
            <button
              type="button"
              className="pow-item"
              key={i}
              onClick={() => setActive(img.full)}
              aria-label="Open preview"
            >
              <img src={img.thumb} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="pow-lightbox" onClick={() => setActive(null)}>
          <button type="button" className="pow-lightbox__close" onClick={() => setActive(null)} aria-label="Close preview">&times;</button>
          <img src={active} alt="" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}
