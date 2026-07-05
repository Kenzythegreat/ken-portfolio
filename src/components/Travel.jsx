const LABELS = ['Japan, 2023', 'Vietnam, 2024', 'Home Build, 2024', 'The Motorcycle', 'Matcha Run', 'Next: Korea']

export default function Travel() {
  return (
    <section id="travel" className="strip">
      <div className="wrap">
        <div className="section-head">
          <span className="section-head__num">06</span>
          <h2 className="section-head__title">Travel Tales</h2>
        </div>

        <p className="hero__lede" style={{ margin: '0 0 40px', textAlign: 'left', maxWidth: 560 }}>
          A frequent traveler across Asia since 2023 — snapshots from the life
          running alongside the work.
        </p>

        <div className="strip-grid">
          {LABELS.map((l) => (
            <div className="strip-photo" data-label={l} key={l} />
          ))}
        </div>
      </div>
    </section>
  )
}
