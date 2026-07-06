import { useEffect } from 'react'
import TravelTales from '../components/TravelTales.jsx'

export default function TravelTalesPage() {
  useEffect(() => {
    document.title = 'Travel Tales · Ken Curtina'
  }, [])

  return (
    <>
      <section className="page-header">
        <div className="glow-orb" style={{ width: 420, height: 420, top: -140, left: '50%', transform: 'translateX(-50%)', background: 'var(--violet)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <p className="eyebrow fade-up" style={{ display: 'flex', justifyContent: 'center' }}>Ken Curtina</p>
          <h1 className="page-header__title fade-up" style={{ animationDelay: '0.1s' }}>Travel Tales</h1>
          <p className="hero__lede fade-up" style={{ margin: '18px auto 0', animationDelay: '0.2s' }}>
            A few stamps in the passport along the way, click any photo for a closer look.
          </p>
        </div>
      </section>
      <TravelTales />
    </>
  )
}
