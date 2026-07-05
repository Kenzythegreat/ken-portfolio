import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__logo">Ken<span>.</span></Link>
        <nav className="nav__links nav__links--left">
          <Link to="/">Home</Link>
          <Link to="/tools">Tools I Used</Link>
          <Link to="/proof-of-work">Proof of Work</Link>
        </nav>
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
