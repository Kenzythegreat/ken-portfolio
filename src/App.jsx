import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Cursor from './components/Cursor.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Home from './pages/Home.jsx'
import ToolsPage from './pages/ToolsPage.jsx'
import ProofOfWorkPage from './pages/ProofOfWorkPage.jsx'
import TravelTalesPage from './pages/TravelTalesPage.jsx'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const el = document.getElementById(id)
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }))
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <ScrollProgress />
      <Cursor />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/proof-of-work" element={<ProofOfWorkPage />} />
        <Route path="/travel-tales" element={<TravelTalesPage />} />
      </Routes>
      <Footer />
      <Analytics />
    </BrowserRouter>
  )
}
