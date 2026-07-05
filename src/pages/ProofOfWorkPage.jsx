import { useEffect } from 'react'
import ProofOfWork from '../components/ProofOfWork.jsx'

export default function ProofOfWorkPage() {
  useEffect(() => {
    document.title = 'Proof of Work — Ken Curtina'
  }, [])

  return (
    <>
      <section className="page-header">
        <div className="glow-orb" style={{ width: 420, height: 420, top: -140, left: '50%', transform: 'translateX(-50%)', background: 'var(--magenta)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <p className="eyebrow fade-up" style={{ display: 'flex', justifyContent: 'center' }}>Ken Curtina</p>
          <h1 className="page-header__title fade-up" style={{ animationDelay: '0.1s' }}>Proof of Work</h1>
          <p className="hero__lede fade-up" style={{ margin: '18px auto 0', animationDelay: '0.2s' }}>
            Real campaign graphics, client testimonials, and social content
            I've shipped — click any tile for a closer look.
          </p>
        </div>
      </section>
      <ProofOfWork />
    </>
  )
}
