export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-copy">
          <p className="hero-kicker">A disk space analyzer for macOS</p>
          <h1 id="hero-title">Disk space, explained.</h1>
          <p className="hero-sub">
            Sector9 reads your disk the way you work and tells you what each thing costs to get back.
          </p>
          <div className="hero-actions">
            <div className="hero-download">
              <a href="#download" className="btn primary">
                Download for macOS
              </a>
              <span className="hero-note">macOS 13+ · Apple silicon &amp; Intel</span>
            </div>
            <a href="#how-it-works" className="btn">
              See how it works
            </a>
          </div>
        </div>
        <figure className="hero-shot shot">
          <img
            src="/sector9/shots/briefing.webp"
            width={2400}
            height={1420}
            alt="The Sector9 Briefing screen. It says the Mac is 94% full but most of it isn't your work, splits the disk by what it costs to get back, and decodes 96 GB of System Data into Docker, Xcode, Adobe caches and more."
            fetchPriority="high"
          />
        </figure>
      </div>
    </section>
  )
}
