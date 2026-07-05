const SKILLS = [
  { num: '01', title: 'Inbox Management', tag: 'Smartlead · Front' },
  { num: '02', title: 'Lead Generation', tag: 'Apollo · Listkit' },
  { num: '03', title: 'Campaign Management', tag: 'Smartlead' },
  { num: '04', title: 'Email Infrastructure', tag: 'Domains · Warmup' },
  { num: '05', title: 'General VA Support', tag: 'Ops Support' },
]

// desktop: [left%, top%, anchor] — anchor = which edge of the node card sits on the point
const DESKTOP_POS = [
  ['12.5%', '15%', 'anchor-bottom'],
  ['87.5%', '15%', 'anchor-bottom'],
  ['5%', '50%', 'anchor-right'],
  ['95%', '50%', 'anchor-left'],
  ['50%', '90%', 'anchor-top'],
]

const DESKTOP_PATHS = [
  'M74,37 L74,15 L20,15',
  'M86,37 L86,15 L140,15',
  'M67,50 L8,50',
  'M93,50 L152,50',
  'M80,63 L80,90',
]

// mobile: single centered spine, nodes threaded straight down it
const MOBILE_LEVELS = [55, 95, 135, 175, 215]
const MOBILE_POS = MOBILE_LEVELS.map((y) => ['50%', `${(y / 240) * 100}%`, 'anchor-center'])
const MOBILE_PATHS = []

function Lines({ paths, extra }) {
  return (
    <>
      {extra && (
        <path d={extra} className="hub-line-base" pathLength="100" />
      )}
      {extra && (
        <path
          d={extra}
          className="hub-line-pulse"
          pathLength="100"
          style={{ animationDelay: '0s', animationDuration: '4s' }}
        />
      )}
      {paths.map((d, i) => (
        <g key={i}>
          <path d={d} className="hub-line-base" pathLength="100" />
          <path
            d={d}
            className="hub-line-pulse"
            pathLength="100"
            style={{ animationDelay: `${i * 0.5}s`, animationDuration: '3.2s' }}
          />
        </g>
      ))}
    </>
  )
}

function Core() {
  return (
    <div className="hub-core">
      <span className="hub-core__corner hub-core__corner--tl" />
      <span className="hub-core__corner hub-core__corner--tr" />
      <span className="hub-core__corner hub-core__corner--bl" />
      <span className="hub-core__corner hub-core__corner--br" />
      <span className="hub-core__name">Ken<span>.</span></span>
    </div>
  )
}

function Nodes({ positions }) {
  return SKILLS.map((s, i) => {
    const [left, top, anchor] = positions[i]
    return (
      <div className={`hub-node ${anchor}`} style={{ left, top }} key={s.num}>
        <span className="hub-node__num">{s.num}</span>
        <h3 className="hub-node__title">{s.title}</h3>
        <span className="hub-node__tag">{s.tag}</span>
      </div>
    )
  })
}

export default function SkillsHub() {
  return (
    <div className="hub-wrap">
      <div className="hub-diagram hub-diagram--desktop">
        <svg className="hub-svg" viewBox="0 0 160 100" preserveAspectRatio="none">
          <Lines paths={DESKTOP_PATHS} />
        </svg>
        <Core />
        <Nodes positions={DESKTOP_POS} />
      </div>

      <div className="hub-diagram hub-diagram--mobile">
        <svg className="hub-svg" viewBox="0 0 100 240" preserveAspectRatio="none">
          <Lines paths={MOBILE_PATHS} extra="M50,31 L50,215" />
        </svg>
        <Core />
        <Nodes positions={MOBILE_POS} />
      </div>
    </div>
  )
}
