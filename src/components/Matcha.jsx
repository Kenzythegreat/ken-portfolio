import Reveal from './Reveal.jsx'

export default function Matcha() {
  return (
    <section className="matcha">
      <div className="glow-orb" style={{ width: 360, height: 360, top: -80, left: '50%', transform: 'translateX(-50%)', background: 'var(--magenta)', opacity: 0.3 }} />
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
