import { useEffect } from 'react'
import ProofOfWork from '../components/ProofOfWork.jsx'
import SoftAurora from '../components/SoftAurora.jsx'

export default function ProofOfWorkPage() {
  useEffect(() => {
    document.title = 'Proof of Work · Ken Curtina'
  }, [])

  return (
    <>
      <section className="page-header">
        <div className="page-header-aurora">
          <SoftAurora
            speed={0.6}
            scale={1.6}
            brightness={0.9}
            color1="#B33FA1"
            color2="#6B4FBB"
            noiseFrequency={2.5}
            noiseAmplitude={2.5}
            bandHeight={0.45}
            bandSpread={0.6}
            octaveDecay={0.08}
            colorSpeed={0.8}
            enableMouseInteraction={true}
            mouseInfluence={0.2}
          />
        </div>
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <p className="eyebrow fade-up" style={{ display: 'flex', justifyContent: 'center' }}>Ken Curtina</p>
          <h1 className="page-header__title fade-up" style={{ animationDelay: '0.1s' }}>Proof of Work</h1>
          <p className="hero__lede fade-up" style={{ margin: '18px auto 0', animationDelay: '0.2s' }}>
            Real campaign graphics, client testimonials, and social content
            I've shipped, click any tile for a closer look.
          </p>
        </div>
      </section>
      <ProofOfWork />
    </>
  )
}
