import { Link } from 'react-router-dom'
import useMagnetic from '../hooks/useMagnetic.js'
import GooeyNav from './GooeyNav.jsx'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Tools I Used', href: '/tools' },
  { label: 'Proof of Work', href: '/proof-of-work' },
  { label: 'Travel Tales', href: '/travel-tales' },
]

export default function Nav() {
  const magneticRef = useMagnetic(0.25, 8)

  return (
    <header className="nav">
      <div className="nav__inner">
        <Link ref={magneticRef} to="/" className="nav__logo">Ken<span>.</span></Link>
        <div className="nav__links--left">
          <GooeyNav items={NAV_ITEMS} particleCount={12} particleDistances={[26, 6]} particleR={40} animationTime={500} timeVariance={250} />
        </div>
        <div className="nav__right">
          <a
            href="https://www.linkedin.com/in/mcquinly-curtina-70787319b/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav__linkedin"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <rect x="1" y="1" width="22" height="22" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <text x="12" y="16.5" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="11" fill="currentColor">in</text>
            </svg>
            <span className="nav__linkedin-name">Mcquinly Curtina</span>
          </a>

          <a href="https://calendly.com/mcquinlyc/one-on-one" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            Book a Call
            <span className="btn__arrow">&#8599;</span>
          </a>
        </div>
      </div>
    </header>
  )
}
