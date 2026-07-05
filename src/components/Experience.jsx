const ROLES = [
  {
    role: 'Private Client (VA)',
    period: '2019–2022',
    details: 'Persuasive article comments, blog copy/paste, clicking tasks, Facebook farming, WordPress posting for blogs/podcasts.',
  },
  {
    role: 'Lead Generation',
    period: '2022 · Leadsology',
    details: 'Messaged business executives/coaches, inviting them to webinars via LinkedIn.',
  },
  {
    role: 'Repetitive Tasks / Data Removal',
    period: '2023',
    details: 'Removed member info from data broker sites; submitted opt-out/deletion forms across people-search platforms.',
  },
]

const COMPANIES = [
  { name: 'Vendisys', meta: 'USA — 1 year' },
  { name: 'C17', meta: 'USA — 1 year, 5 months' },
  { name: 'Systemized Revenue', meta: 'USA — 2 years, 4 months' },
  { name: 'Visible Hand Company', meta: 'USA — 1 year, with SMM tasks' },
  { name: 'Cymate', meta: 'USA — 9 months — Brand & Marketing Manager', current: true },
]

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="wrap">
        <div className="section-head">
          <span className="section-head__num">04</span>
          <h2 className="section-head__title">Work Experience</h2>
        </div>

        <table className="exp-table">
          <thead>
            <tr>
              <th>Role</th>
              <th>Period</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {ROLES.map((r) => (
              <tr key={r.role}>
                <td>{r.role}</td>
                <td>{r.period}</td>
                <td>{r.details}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="eyebrow" style={{ marginBottom: 8 }}>Companies I've Worked With</p>
        <div className="companies-list">
          {COMPANIES.map((c) => (
            <div className={`company-row ${c.current ? 'company-row--current' : ''}`} key={c.name}>
              <div>
                <div className="company-row__name">{c.name}</div>
                <div className="company-row__meta">{c.meta}</div>
              </div>
              {c.current && <span className="pill company-row__badge">Current</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
