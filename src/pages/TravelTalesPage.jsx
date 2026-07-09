import { useEffect } from 'react'
import TravelHero from '../components/TravelHero.jsx'
import TravelTales from '../components/TravelTales.jsx'

export default function TravelTalesPage() {
  useEffect(() => {
    document.title = 'Travel Tales · Ken Curtina'
  }, [])

  return (
    <>
      <TravelHero />
      <div className="travel-content">
        <TravelTales />
      </div>
    </>
  )
}
