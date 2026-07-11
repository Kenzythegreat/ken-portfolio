import { useState } from 'react'
import Reveal from './Reveal.jsx'
import BorderGlow from './BorderGlow.jsx'
import { GLOW_COLOR, GLOW_COLORS } from '../lib/borderGlowTheme.js'

const COLUMNS = [
  {
    role: 'Private Client',
    period: '2019 – 2022',
    type: 'list',
    intro: 'I help them with:',
    items: [
      'Making persuasive comments for an Article',
      'Copy/Paste details for his Blog',
      'Clicking Tasks',
      'Facebook Farming',
      'WordPress Posting Blogs/Podcasts',
    ],
  },
  {
    role: 'Lead Generation',
    period: '2022',
    type: 'text',
    text: (
      <>
        In <strong>Leadsology</strong>, I message specific leads like Business
        Executives/Coaches and I have to ping them a message regarding an
        invite through our Webinars using LinkedIn.
      </>
    ),
  },
  {
    role: 'Repetitive Tasks',
    period: '2023',
    type: 'text',
    text: 'Our core service is to help people delete their information from data brokers and other companies or services. This role goes through each member and cleans up their search results (deleting their data from any sites that expose their contact info), plus proactively works through a list of People Search Sites and submits deletion/opt-out forms to erase the member’s info.',
  },
  {
    role: 'Inbox Manager',
    period: 'Companies I worked with',
    type: 'companies',
    companies: [
      { name: 'Vendisys', meta: 'USA — 1 year' },
      { name: 'C17', meta: 'USA — 1 year, 5 months' },
      { name: 'Systemized Revenue', meta: 'USA — 2 years, 4 months' },
      { name: 'Visible Hand Company', meta: 'USA — 1 year — with SMM tasks' },
      { name: 'Cymate', meta: 'USA — 9 months — now as Brand & Marketing Manager', current: true },
    ],
  },
]

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i))

  return (
    <section id="experience" className="section-pad">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="section-head__num">04</span>
          <h2 className="section-head__title">Work Experience</h2>
        </Reveal>

        <div className="exp-grid">
          {COLUMNS.map((c, i) => {
            const isOpen = openIndex === i
            return (
              <BorderGlow
                key={c.role}
                className="glow-wrap"
                borderRadius={14}
                glowRadius={24}
                glowColor={GLOW_COLOR}
                colors={GLOW_COLORS}
                backgroundColor="#0B0B0D"
                edgeSensitivity={40}
              >
                <Reveal
                  as="div"
                  className={`exp-card ${isOpen ? 'is-expanded' : ''}`}
                  delay={i * 90}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      toggle(i)
                    }
                  }}
                >
                  <h3 className="exp-card__role">{c.role}</h3>
                  <div className="exp-card__head">
                    <span className="exp-card__period">{c.period}</span>
                    <span className="exp-card__chevron" aria-hidden="true">⌄</span>
                  </div>

                  <div className="exp-card__collapsible">
                    <div className="exp-card__collapsible-inner">
                      {c.type === 'list' && (
                        <div className="exp-card__body">
                          <p>{c.intro}</p>
                          <ul className="exp-card__list">
                            {c.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {c.type === 'text' && (
                        <div className="exp-card__body">
                          <p>{c.text}</p>
                        </div>
                      )}

                      {c.type === 'companies' && (
                        <div className="exp-card__companies">
                          {c.companies.map((co) => (
                            <div className={`exp-company ${co.current ? 'exp-company--current' : ''}`} key={co.name}>
                              <span className="exp-company__name">{co.name}</span>
                              <span className="exp-company__meta">{co.meta}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
              </BorderGlow>
            )
          })}
        </div>
      </div>
    </section>
  )
}
