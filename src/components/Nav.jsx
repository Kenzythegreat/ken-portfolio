export default function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#home" className="nav__logo">Ken<span>.</span></a>
        <nav className="nav__links nav__links--left">
          <a href="#home">Home</a>
          <a href="#tools">Tools I Used</a>
          <a href="#travel">Travel Tales</a>
        </nav>
        <a href="https://calendly.com/mcquinlyc/one-on-one" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
          Book a Call
          <span className="btn__arrow">&#8599;</span>
        </a>
      </div>
    </header>
  )
}
