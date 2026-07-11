import CircularGallery from './CircularGallery.jsx'

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

const GALLERY_ITEMS = DESTINATIONS.map((d) => ({
  image: `/photos/travel/${d.slug}.jpg`,
  text: `${d.flag}  ${d.title}`,
}))

const isNarrowViewport = typeof window !== 'undefined' && window.innerWidth < 700

export default function TravelTales() {
  return (
    <section className="pow">
      <div className="travel-gallery-wrap">
        <CircularGallery
          items={GALLERY_ITEMS}
          bend={isNarrowViewport ? 1.2 : 3}
          textColor="#F5F4F0"
          borderRadius={0.05}
          font="bold 24px Space Grotesk"
          scrollSpeed={2}
          scrollEase={0.08}
        />
      </div>
    </section>
  )
}
