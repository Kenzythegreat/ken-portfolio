import { useEffect, useState } from 'react'

const DESTINATIONS = [
  { slug: 'bali-1', title: 'Bali Part 1', flag: '🇮🇩', date: 'Aug 2024' },
  { slug: 'hongkong-1', title: 'Hong Kong Part 1', flag: '🇭🇰', date: 'Dec 2023' },
  { slug: 'macau-1', title: 'Macau Part 1', flag: '🇲🇴', date: 'Dec 2023' },
  { slug: 'malaysia', title: 'Malaysia', flag: '🇲🇾', date: 'Feb 2024' },
  { slug: 'singapore', title: 'Singapore', flag: '🇸🇬', date: 'Mar 2024' },
  { slug: 'thailand', title: 'Thailand', flag: '🇹🇭', date: 'Mar 2024' },
  { slug: 'hongkong-2', title: 'Hong Kong Part 2', flag: '🇭🇰', date: 'Sep 2024' },
  { slug: 'bali-2', title: 'Bali Part 2', flag: '🇮🇩', date: 'Mar 2025' },
  { slug: 'taiwan', title: 'Taiwan', flag: '🇹🇼', date: 'Jun 2025' },
  { slug: 'vietnam', title: 'Vietnam', flag: '🇻🇳', date: 'Sep 2025' },
]

export default function TravelTales() {
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
          {[...DESTINATIONS, ...DESTINATIONS].map((d, i) => (
            <button
              type="button"
              className="travel-card"
              key={`${d.slug}-${i}`}
              onClick={() => setActive(`/photos/travel/${d.slug}.jpg`)}
              aria-label={`Open ${d.title} photo`}
            >
              <img src={`/photos/travel/${d.slug}.jpg`} alt={d.title} loading="lazy" />
              <span className="travel-card__caption">
                <span className="travel-card__flag" aria-hidden="true">{d.flag}</span>
                <span>
                  <span className="travel-card__title">{d.title}</span>
                  <span className="travel-card__date">{d.date}</span>
                </span>
              </span>
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
