const SKILLS = [
  {
    num: '01',
    title: 'Inbox Management',
    desc: 'Three years+ as an Inbox Manager, mastering natural, engaging email responses that turn cold leads into real conversations.',
    tags: ['Smartlead', 'Instantly', 'Front', 'Fastmail'],
  },
  {
    num: '02',
    title: 'Lead Generation',
    desc: 'Scraping and qualifying leads for cold outbound campaigns.',
    tags: ['Apollo', 'LinkedIn Sales Nav', 'Listkit'],
  },
  {
    num: '03',
    title: 'Campaign Management',
    desc: 'Building and launching campaigns on Smartlead from the ground up.',
    tags: ['Smartlead'],
  },
  {
    num: '04',
    title: 'Email Infrastructure Setup',
    desc: 'Setting up email infrastructure from scratch — domains, mailboxes, warmup, deliverability basics.',
    tags: ['Domains', 'Warmup', 'Deliverability'],
  },
  {
    num: '05',
    title: 'General Virtual Assistant',
    desc: 'Day-to-day operational support that keeps founders focused on the bigger picture.',
    tags: ['Ops Support'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="wrap">
        <div className="section-head">
          <span className="section-head__num">02</span>
          <h2 className="section-head__title">Personal Skills</h2>
        </div>

        <div className="skills-grid">
          {SKILLS.map((s) => (
            <div className="skill-card" key={s.num}>
              <div className="skill-card__top">
                <span className="skill-card__num">{s.num}</span>
                <span className="skill-card__plus">+</span>
              </div>
              <h3 className="skill-card__title">{s.title}</h3>
              <p className="skill-card__desc">{s.desc}</p>
              <div className="skill-card__tags">
                {s.tags.map((t) => (
                  <span className="pill" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
