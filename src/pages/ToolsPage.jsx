import { useEffect } from 'react'
import Tools from '../components/Tools.jsx'

export default function ToolsPage() {
  useEffect(() => {
    document.title = 'Tools I Use — Ken Curtina'
  }, [])

  return (
    <>
      <section className="page-header">
        <div className="glow-orb" style={{ width: 420, height: 420, top: -140, left: '50%', transform: 'translateX(-50%)', background: 'var(--violet)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <p className="eyebrow fade-up" style={{ display: 'flex', justifyContent: 'center' }}>Ken Curtina</p>
          <h1 className="page-header__title fade-up" style={{ animationDelay: '0.1s' }}>Tools I Use</h1>
          <p className="hero__lede fade-up" style={{ margin: '18px auto 0', animationDelay: '0.2s' }}>
            Everything I run outbound campaigns, manage inboxes, and keep operations
            tidy with — organized by category.
          </p>
        </div>
      </section>
      <Tools />
    </>
  )
}
