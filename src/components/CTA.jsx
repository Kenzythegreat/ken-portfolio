import { useState } from 'react'
import Reveal from './Reveal.jsx'
import useMagnetic from '../hooks/useMagnetic.js'

export default function CTA() {
  const magneticRef = useMagnetic()
  const [flipped, setFlipped] = useState(false)
  const toggleFlip = () => setFlipped((f) => !f)

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
          <a ref={magneticRef} href="https://calendly.com/mcquinlyc/one-on-one" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            Book a Discovery Call Now
            <span className="btn__arrow">&#8599;</span>
          </a>
          <div className="cta__mockup-wrap">
            <div
              className={`cta__mockup-flip ${flipped ? 'is-flipped' : ''}`}
              role="button"
              tabIndex={0}
              aria-pressed={flipped}
              aria-label="Flip to see quick specs"
              onClick={toggleFlip}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggleFlip()
                }
              }}
            >
              <div className="cta__mockup-flip-inner">
                <div className="cta__mockup-face cta__mockup-face--front">
                  <img src="/photos/cta-laptop.png" alt="Ken Curtina on a laptop screen" className="cta__mockup" />
                </div>
                <div className="cta__mockup-face cta__mockup-face--back">
                  <div className="cta__specs">
                    <span className="cta__specs-eyebrow">Ken.OS &middot; Quick Specs</span>
                    <dl className="cta__specs-list">
                      <div>
                        <dt>Role</dt>
                        <dd>Cold Email Strategist &amp; Inbox Manager</dd>
                      </div>
                      <div>
                        <dt>Experience</dt>
                        <dd>7+ yrs VA &middot; 4+ yrs Inbox Mgmt</dd>
                      </div>
                      <div>
                        <dt>Core Stack</dt>
                        <dd>Smartlead &middot; Apollo &middot; Notion</dd>
                      </div>
                      <div>
                        <dt>Status</dt>
                        <dd className="cta__specs-status">Open to new clients</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="cta__mockup-hint">{flipped ? 'Tap to flip back' : 'Hover or tap the laptop to flip'}</span>
        </Reveal>
      </div>
    </section>
  )
}
