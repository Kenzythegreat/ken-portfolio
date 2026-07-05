import notion from '../assets/logos/notion.svg'
import airtable from '../assets/logos/airtable.svg'
import trello from '../assets/logos/trello.svg'
import wordpress from '../assets/logos/wordpress.svg'
import make from '../assets/logos/make.svg'
import google from '../assets/logos/google.svg'
import calendly from '../assets/logos/calendly.svg'
import zoho from '../assets/logos/zoho.svg'
import ebay from '../assets/logos/ebay.svg'
import whatsapp from '../assets/logos/whatsapp.svg'
import godaddy from '../assets/logos/godaddy.svg'
import cloudflare from '../assets/logos/cloudflare.svg'
import crunchbase from '../assets/logos/crunchbase.svg'
import claude from '../assets/logos/claude.svg'

const ROW_1 = [
  { name: 'Notion', logo: notion },
  { name: 'Smartlead.ai' },
  { name: 'Google', logo: google },
  { name: 'Instantly' },
  { name: 'Cloudflare', logo: cloudflare },
  { name: 'Slack' },
  { name: 'Airtable', logo: airtable },
  { name: 'Front' },
  { name: 'Claude', logo: claude },
  { name: 'HeyReach' },
  { name: 'Zoho', logo: zoho },
  { name: 'Microsoft Teams' },
]

const ROW_2 = [
  { name: 'Calendly', logo: calendly },
  { name: 'Apollo' },
  { name: 'WordPress', logo: wordpress },
  { name: 'Fastmail' },
  { name: 'Trello', logo: trello },
  { name: 'Listkit' },
  { name: 'eBay', logo: ebay },
  { name: 'Monday.com' },
  { name: 'Crunchbase', logo: crunchbase },
  { name: 'Word' },
  { name: 'GoDaddy', logo: godaddy },
  { name: 'Excel' },
]

const ROW_3 = [
  { name: 'Make.com', logo: make },
  { name: 'LinkedIn' },
  { name: 'WhatsApp', logo: whatsapp },
  { name: 'Dynadot' },
  { name: 'ChatGPT' },
  { name: 'Mailreach' },
  { name: 'Microsoft 365' },
  { name: 'Multilogin' },
  { name: 'Million Verifier' },
  { name: 'Smartsheet' },
  { name: 'Instant Data Scraper' },
]

function Row({ items, reverse, duration }) {
  const doubled = [...items, ...items]
  return (
    <div className="tool-track">
      <div
        className={`tool-row ${reverse ? 'tool-row--reverse' : ''}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((t, i) => (
          <span className="tool-chip" key={i}>
            {t.logo && <img src={t.logo} alt="" />}
            {t.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Tools() {
  return (
    <section id="tools" className="section-pad" style={{ paddingTop: 0 }}>
      <div className="tool-wall">
        <Row items={ROW_1} duration={32} />
        <Row items={ROW_2} reverse duration={36} />
        <Row items={ROW_3} duration={28} />
      </div>
    </section>
  )
}
