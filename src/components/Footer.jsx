export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span className="nav__logo" style={{ fontSize: 16 }}>Ken<span style={{ color: 'var(--violet)' }}>.</span></span>
        <nav className="footer__nav">
          <a href="#home">Home</a>
          <a href="#tools">Tools I Used</a>
          <a href="#travel">Travel Tales</a>
          <a href="#book">Book a Call</a>
        </nav>
        <span className="footer__copy">© 2026 Ken Curtina</span>
      </div>
    </footer>
  )
}
