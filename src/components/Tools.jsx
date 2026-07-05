const CATEGORIES = [
  {
    label: 'Cold Email & Deliverability',
    items: ['Smartlead.ai', 'Instantly', 'Fastmail', 'Front', 'GoDaddy', 'Dynadot', 'Cloudflare', 'Million Verifier', 'Mailreach'],
  },
  {
    label: 'Lead Gen & Data',
    items: ['Apollo', 'LinkedIn', 'HeyReach', 'Listkit', 'Instant Data Scraper', 'Crunchbase'],
  },
  {
    label: 'Project & Comms',
    items: ['Slack', 'Monday.com', 'Notion', 'Airtable', 'Smartsheet', 'Trello', 'Microsoft Teams'],
  },
  {
    label: 'Design & Content',
    items: ['Canva', 'WordPress'],
  },
  {
    label: 'AI & Automation',
    items: ['Claude', 'ChatGPT', 'Make.com'],
  },
  {
    label: 'Core Office',
    items: ['Word', 'Excel', 'Google', 'Microsoft 365', 'Calendly'],
  },
  {
    label: 'Other',
    items: ['Multilogin', 'Zoho', 'eBay', 'WhatsApp'],
  },
]

export default function Tools() {
  return (
    <section id="tools" className="section-pad">
      <div className="wrap">
        <div className="section-head">
          <span className="section-head__num">05</span>
          <h2 className="section-head__title">Tools I'm Proficient In</h2>
        </div>

        <div className="tools-cats">
          {CATEGORIES.map((c) => (
            <div key={c.label}>
              <span className="tools-cat__label">{c.label}</span>
              <div className="tools-cat__items">
                {c.items.map((i) => (
                  <span className="pill" key={i}>{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
