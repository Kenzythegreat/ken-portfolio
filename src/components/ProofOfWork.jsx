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

const LABELED_FILES = [
  { name: 'proof', label: 'Inbox Management' },
  { name: 'proof 1', label: 'Lead Generation' },
  { name: 'proof 2', label: 'Email Infrastructure' },
  { name: 'proof 3', label: 'Email Infrastructure' },
  { name: 'proof 4', label: 'Campaign Management' },
  { name: 'proof 5', label: 'General VA Support' },
]

const LABELED_IMAGES = LABELED_FILES.map(({ name, label }) => ({
  thumb: `/photos/thumbs/${encodeURIComponent(name)}.jpg`,
  full: `/photos/${encodeURIComponent(name)}.png`,
  label,
}))

const TESTIMONIAL_FILES = ['testimonial 1', 'testimonial 2', 'testimonial 3', 'Testimonial']

const TESTIMONIAL_IMAGES = TESTIMONIAL_FILES.map((name) => ({
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

      <p className="eyebrow" style={{ justifyContent: 'center', display: 'flex', margin: '40px 0 24px' }}>By the Numbers</p>

      <div className="pow-track">
        <div className="pow-row pow-row--reverse">
          {[...LABELED_IMAGES, ...LABELED_IMAGES].map((img, i) => (
            <button
              type="button"
              className="pow-item pow-item--labeled"
              key={i}
              onClick={() => setActive(img.full)}
              aria-label="Open preview"
            >
              <img src={img.thumb} alt="" loading="lazy" />
              <span className="pow-item__label">{img.label}</span>
            </button>
          ))}
        </div>
      </div>

      <p className="eyebrow" style={{ justifyContent: 'center', display: 'flex', margin: '40px 0 24px' }}>Feedback From Clients</p>

      <div className="pow-track">
        <div className="pow-row">
          {[...TESTIMONIAL_IMAGES, ...TESTIMONIAL_IMAGES].map((img, i) => (
            <button
              type="button"
              className="pow-item"
              key={i}
              onClick={() => setActive(img.full)}
              aria-label="Open testimonial"
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
