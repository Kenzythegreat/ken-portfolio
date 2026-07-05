import SkillsHub from './SkillsHub.jsx'

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="wrap">
        <div className="section-head">
          <span className="section-head__num">02</span>
          <h2 className="section-head__title">Personal Skills</h2>
        </div>

        <p className="hero__lede" style={{ margin: '0 0 56px', textAlign: 'left', maxWidth: 560 }}>
          Everything routes back to one operator — here's how the moving parts connect.
        </p>

        <SkillsHub />
      </div>
    </section>
  )
}
