import Reveal from './Reveal.jsx'
import SkillsHub from './SkillsHub.jsx'

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="section-head__num">02</span>
          <h2 className="section-head__title">Personal Skills</h2>
        </Reveal>

        <Reveal as="p" className="hero__lede" delay={80} style={{ margin: '0 0 56px', textAlign: 'left', maxWidth: 560 }}>
          Everything routes back to one operator — here's how the moving parts connect.
        </Reveal>

        <Reveal as="div" delay={160}>
          <SkillsHub />
        </Reveal>
      </div>
    </section>
  )
}
