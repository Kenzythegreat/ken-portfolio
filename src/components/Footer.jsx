import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span className="nav__logo" style={{ fontSize: 16 }}>Ken<span style={{ color: 'var(--violet)' }}>.</span></span>
        <nav className="footer__nav">
          <Link to="/">Home</Link>
          <Link to="/tools">Tools I Used</Link>
          <Link to="/proof-of-work">Proof of Work</Link>
          <Link to="/travel-tales">Travel Tales</Link>
          <Link to="/#book">Book a Call</Link>
        </nav>
        <span className="footer__copy">© 2026 Ken Curtina</span>
      </div>
    </footer>
  )
}
