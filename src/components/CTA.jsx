import Reveal from './Reveal.jsx'

export default function CTA() {
  return (
    <section id="book" className="cta">
      <div className="glow-orb" style={{ width: 480, height: 480, top: '0%', left: '30%', background: 'var(--violet)' }} />
      <div className="glow-orb" style={{ width: 420, height: 420, top: '10%', right: '5%', background: 'var(--magenta)', opacity: 0.35 }} />

      <div className="wrap cta__grid" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal as="div" className="cta__content">
          <p className="eyebrow" style={{ marginBottom: 16 }}>Let's Work Together</p>
          <h2 className="cta__title">
            If you're looking for someone who treats your business like it's
            actually theirs to protect
          </h2>
          <p className="cta__sub">let's talk. Book a discovery call and I'll show you what I'd fix first.</p>
        </Reveal>

        <Reveal as="div" className="cta__visual" delay={120}>
          <a href="https://calendly.com/mcquinlyc/one-on-one" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            Book a Discovery Call Now
            <span className="btn__arrow">&#8599;</span>
          </a>
          <div className="cta__mockup-wrap">
            <img src="/photos/cta-laptop.png" alt="Ken Curtina on a laptop screen" className="cta__mockup" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
