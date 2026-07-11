import { useState } from 'react'
import { Link } from 'react-router-dom'
import FluidGlass from './FluidGlass.jsx'
import FallingText from './FallingText.jsx'
import BorderGlow from './BorderGlow.jsx'
import useMagnetic from '../hooks/useMagnetic.js'
import { GLOW_COLOR, GLOW_COLORS } from '../lib/borderGlowTheme.js'

const HERO_BODY_TEXT = `For the past several years, I've worked behind the scenes of growing businesses. I write and manage outbound campaigns that get actual replies, not just opens. I run inboxes so founders never miss a real conversation buried under noise. I build social content that keeps a brand visible and consistent instead of going quiet for three weeks at a time. And I handle the operational details that let business owners stay focused on the bigger picture instead of drowning in their own to-do list. I didn't start with a network or a big break. I started with a laptop, a willingness to learn fast, and enough consistency to turn "figuring it out" into an actual skill set. That's still how I work today: I get into the system, figure out what's actually broken, and leave it running better than I found it. Scroll down and you'll find the tools I actually use, the results I've helped produce, and a bit of my life outside of work too, because the person managing your inbox is also the person planning their next trip through Asia with a matcha in hand. If you're looking for someone who treats your business like it's actually theirs to protect, let's talk.`

const HERO_BODY_HIGHLIGHTS = ['founders', 'consistency', 'protect', "let's"]

export default function Hero() {
  const magneticRef = useMagnetic()
  const [frameEl, setFrameEl] = useState(null)

  return (
    <section id="home" className="hero">
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <BorderGlow
          className="glow-wrap"
          borderRadius={28}
          glowRadius={50}
          glowColor={GLOW_COLOR}
          colors={GLOW_COLORS}
          backgroundColor="#0B0B0D"
          edgeSensitivity={35}
        >
          <div className="hero__frame" ref={setFrameEl}>
            <div className="hero-fluid-glass">
              {frameEl && (
                <FluidGlass
                  mode="lens"
                  eventSource={frameEl}
                  lensProps={{ scale: 0.25, ior: 1.15, thickness: 5, chromaticAberration: 0.1, anisotropy: 0.01 }}
                />
              )}
            </div>

            <span className="hero__tag hero__tag--1 pill pill--accent" style={{ animationDelay: '0.5s, 1.3s', animationDuration: '0.8s, 5.4s' }}>Inbox Manager</span>
            <span className="hero__tag hero__tag--2 pill pill--accent" style={{ animationDelay: '0.6s, 1.4s', animationDuration: '0.8s, 4.6s' }}>Cold Email Strategist</span>
            <span className="hero__tag hero__tag--3 pill pill--accent" style={{ animationDelay: '0.7s, 1.5s', animationDuration: '0.8s, 5.2s' }}>Social Media Management</span>
            <span className="hero__tag hero__tag--4 pill pill--accent" style={{ animationDelay: '0.8s, 1.6s', animationDuration: '0.8s, 5s' }}>7 Years Experience</span>

            <h1 className="hero__headline fade-up" style={{ animationDelay: '0.12s' }}>
              A Glimpse Into My Work
              <span className="script-accent">&amp; My Personal Life</span>
            </h1>

            <p className="hero__lede fade-up" style={{ animationDelay: '0.28s' }}>
              Cold Email Strategist, Inbox Manager, Social Media Manager, and
              Executive Support specialist, behind the scenes of growing businesses.
            </p>

            <div className="hero__ctas fade-up" style={{ animationDelay: '0.4s' }}>
              <a ref={magneticRef} href="https://calendly.com/mcquinlyc/one-on-one" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                Book a Discovery Call Now
                <span className="btn__arrow">&#8599;</span>
              </a>
              <Link to="/tools" className="btn btn--ghost">See My Tools</Link>
            </div>
          </div>
        </BorderGlow>

        <div className="hero__body">
          <FallingText
            text={HERO_BODY_TEXT}
            highlightWords={HERO_BODY_HIGHLIGHTS}
            fontSize="17px"
            gravity={0.9}
            mouseConstraintStiffness={0.6}
          />
        </div>
      </div>
    </section>
  )
}
