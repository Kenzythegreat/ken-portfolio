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
        <a href="https://calendly.com/mcquinlyc/one-on-one" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
          Book a Call
          <span className="btn__arrow">&#8599;</span>
        </a>
      </div>
    </header>
  )
}
