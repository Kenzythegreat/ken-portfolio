import Reveal from './Reveal.jsx'

export default function CTA() {
  return (
    <section id="book" className="cta">
      <div className="glow-orb" style={{ width: 500, height: 500, top: '10%', left: '50%', transform: 'translateX(-50%)', background: 'var(--violet)' }} />
      <Reveal as="div" className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <p className="eyebrow" style={{ justifyContent: 'center', display: 'flex', marginBottom: 20 }}>Let's Work Together</p>
        <h2 className="cta__title">
          If you're looking for someone who treats your business like it's
          actually theirs to protect
        </h2>
        <p className="cta__sub">let's talk. Book a discovery call and I'll show you what I'd fix first.</p>
        <a href="https://calendly.com/mcquinlyc/one-on-one" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
          Book a Discovery Call Now
          <span className="btn__arrow">&#8599;</span>
        </a>
      </Reveal>
    </section>
  )
}
