import { useEffect } from 'react'
import Hero from '../components/Hero.jsx'
import Intro from '../components/Intro.jsx'
import Matcha from '../components/Matcha.jsx'
import Skills from '../components/Skills.jsx'
import Outcomes from '../components/Outcomes.jsx'
import ProofOfWork from '../components/ProofOfWork.jsx'
import Experience from '../components/Experience.jsx'
import CTA from '../components/CTA.jsx'

export default function Home() {
  useEffect(() => {
    document.title = 'Ken Curtina — Portfolio'
  }, [])

  return (
    <>
      <Hero />
      <Intro />
      <Matcha />
      <Skills />
      <Outcomes />
      <ProofOfWork />
      <Experience />
      <CTA />
    </>
  )
}
