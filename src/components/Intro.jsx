import Reveal from './Reveal.jsx'

export default function Intro() {
  return (
    <section id="about" className="intro">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <span className="section-head__num">01</span>
          <h2 className="section-head__title">Introduction</h2>
        </Reveal>

        <div className="intro__grid">
          <Reveal as="div" className="intro__photo">
            <img src="/photos/ken-headshot.png" alt="Ken Curtina" />
          </Reveal>

          <Reveal as="div" delay={120}>
            <h3 className="intro__name">
              I'm Mcquinly <span className="script-accent">— call me "Ken."</span>
            </h3>

            <div className="intro__text">
              <p>
                I've been working as a Virtual Assistant for almost 7 years — 3 of
                those years across a wide range of client tasks, and the last 4
                years focused specifically as an Inbox Manager. That range is
                exactly why I'm able to juggle multiple moving parts at once
                instead of specializing so narrowly that I fall apart the moment
                a client needs something outside my lane.
              </p>
              <p>
                I started this journey at 17 with nothing but confidence, a
                strong work ethic, and the perseverance to keep pushing forward.
                I didn't have much starting out, but I knew that consistency and
                a willingness to learn would eventually build the life I wanted.
                It did.
              </p>
              <p>
                Today, I'm proud to say I've hit goals I once thought were out of
                reach: buying my own motorcycle, traveling to local and
                international destinations, going to concerts, supporting my
                family financially (including helping my sister through
                college), and starting to build my own home at just 23.
              </p>
              <p>
                Since 2023, I've become a frequent traveler across Asia, and
                that's grown into a real passion for exploring new places and new
                experiences. I do my best work when I'm learning something new
                and surrounded by people who are positive, driven, and
                growth-minded. I believe that with the right guidance and the
                right motivation, almost anything is possible — and I'm just
                getting started.
              </p>
            </div>

            <div className="intro__stats">
              <div>
                <div className="intro__stat-num">7<span>+</span></div>
                <div className="intro__stat-label">Years as a VA</div>
              </div>
              <div>
                <div className="intro__stat-num">4<span>+</span></div>
                <div className="intro__stat-label">Years Inbox Mgmt</div>
              </div>
              <div>
                <div className="intro__stat-num">17</div>
                <div className="intro__stat-label">Age I Started</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
