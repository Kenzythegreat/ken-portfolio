import Reveal from './Reveal.jsx'
import DotGrid from './DotGrid.jsx'

export default function Matcha() {
  return (
    <section className="matcha">
      <div className="matcha-dotgrid">
        <DotGrid
          dotSize={2}
          gap={20}
          baseColor="#3A2E52"
          activeColor="#6B4FBB"
          proximity={110}
          shockRadius={180}
          shockStrength={2.5}
          resistance={500}
          returnDuration={1.4}
        />
      </div>
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal as="div" className="matcha__card">
          <p className="matcha__quote">
            "Matcha teaches us that life, like its rich and calming brew, is best
            lived with patience, balance, and authenticity — even if it tastes a
            little bitter at times."
          </p>
          <p className="eyebrow matcha__label">About Me — Matcha</p>
        </Reveal>
      </div>
    </section>
  )
}
