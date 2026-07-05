const SKILLS = [
  { num: '01', title: 'Inbox Management', tag: 'Smartlead · Front' },
  { num: '02', title: 'Social Media Management', tag: 'Canva · Scheduling' },
  { num: '03', title: 'Lead Generation', tag: 'Apollo · Listkit' },
  { num: '04', title: 'Campaign Management', tag: 'Smartlead' },
  { num: '05', title: 'Email Infrastructure', tag: 'Domains · Warmup' },
  { num: '06', title: 'Content Creation', tag: 'Copy · Captions' },
  { num: '07', title: 'Graphic Designing', tag: 'Canva' },
  { num: '08', title: 'General VA Support', tag: 'Ops Support' },
]

// desktop: 8-point ring, clockwise from top-left — [left%, top%, anchor]
const DESKTOP_POS = [
  ['12.5%', '15.4%', 'anchor-bottom'],  // topLeft
  ['50%', '7.7%', 'anchor-bottom'],     // topCenter
  ['87.5%', '15.4%', 'anchor-bottom'],  // topRight
  ['78%', '50%', 'anchor-left'],        // rightMid
  ['87.5%', '84.6%', 'anchor-top'],     // bottomRight
  ['50%', '92.3%', 'anchor-top'],       // bottomCenter
  ['12.5%', '84.6%', 'anchor-top'],     // bottomLeft
  ['22%', '50%', 'anchor-right'],       // leftMid
]

const DESKTOP_PATHS = [
  'M92,50 L92,20 L25,20',
  'M100,50 L100,10',
  'M108,50 L108,20 L175,20',
  'M115,65 L156,65',
  'M108,80 L108,110 L175,110',
  'M100,80 L100,120',
  'M92,80 L92,110 L25,110',
  'M85,65 L44,65',
]

// mobile: single centered spine, nodes threaded straight down it
const MOBILE_LEVELS = [55, 95, 135, 175, 215, 255, 295, 335]
const MOBILE_VIEW_H = 360
const MOBILE_POS = MOBILE_LEVELS.map((y) => ['50%', `${(y / MOBILE_VIEW_H) * 100}%`, 'anchor-center'])
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
            style={{ animationDelay: `${i * 0.4}s`, animationDuration: '3.2s' }}
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
        <svg className="hub-svg" viewBox="0 0 200 130" preserveAspectRatio="none">
          <Lines paths={DESKTOP_PATHS} />
        </svg>
        <Core />
        <Nodes positions={DESKTOP_POS} />
      </div>

      <div className="hub-diagram hub-diagram--mobile">
        <svg className="hub-svg" viewBox={`0 0 100 ${MOBILE_VIEW_H}`} preserveAspectRatio="none">
          <Lines paths={MOBILE_PATHS} extra="M50,31 L50,335" />
        </svg>
        <Core />
        <Nodes positions={MOBILE_POS} />
      </div>
    </div>
  )
}
