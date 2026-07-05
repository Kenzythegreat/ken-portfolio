const OUTCOMES = [
  {
    num: '01',
    title: 'Automated Booking Pipeline',
    desc: 'Built automated discovery-call booking flows connecting Smartlead replies into Slack via Integromat.',
  },
  {
    num: '02',
    title: 'Inbox Management at Scale',
    desc: 'Managed live inboxes across multiple client accounts, tracking replies and tagging booked discovery calls.',
  },
  {
    num: '03',
    title: 'Multi-Domain Deliverability Oversight',
    desc: 'Monitored sending infrastructure across dozens of domains simultaneously.',
  },
  {
    num: '04',
    title: 'Campaign Performance Tracking',
    desc: 'Tracked reply rates and volume across campaigns reaching thousands of contacts.',
  },
]

export default function Outcomes() {
  return (
    <section id="outcomes" className="section-pad">
      <div className="wrap">
        <div className="section-head">
          <span className="section-head__num">03</span>
          <h2 className="section-head__title">Delivered Outcomes</h2>
        </div>

        <div className="outcomes-grid">
          {OUTCOMES.map((o) => (
            <div className="outcome-item" key={o.num}>
              <span className="outcome-item__num">{o.num}</span>
              <h3 className="outcome-item__title">{o.title}</h3>
              <p className="outcome-item__desc">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
