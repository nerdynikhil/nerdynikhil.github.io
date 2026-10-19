type Shot = { src: string; alt: string }
type Feature = { id: string; label: string; title: string; body: string; points: string[]; shots: Shot[] }

const features: Feature[] = [
  {
    id: 'briefing',
    label: 'Briefing',
    title: 'A plain-English diagnosis, not a pie chart.',
    body: 'Open Sector9 and it tells you, in one sentence, why your disk is full and how much of it is really your work. Every finding says what it is, what happens if you remove it, and why Sector9 thinks so.',
    points: [
      '“System Data”, decoded into Docker disks, Xcode builds, Adobe caches and snapshots',
      'Your disk split by what each part costs to get back',
      'The three moves that free the most space with the least effort',
    ],
    shots: [
      {
        src: '/sector9/shots/workbench-video.webp',
        alt: 'The Video workbench. A Final Cut preview renders finding is expanded, explaining what it is, what happens if you remove it, the cost to get it back (about 25 minutes of background rendering) and why Sector9 thinks so.',
      },
    ],
  },
  {
    id: 'projects',
    label: 'Projects',
    title: 'See each project’s whole footprint.',
    body: 'A project’s footage lives in one folder, its cache in another and its renders in a third. Sector9 traces them back to the project that made them and tells you whether you are still working on it.',
    points: [
      'Active, Resting and Dormant status from when you last opened it',
      'Clean the residue and keep the project',
      'Archive a finished project to an external drive, with a manifest',
    ],
    shots: [
      {
        src: '/sector9/shots/projects.webp',
        alt: 'The Projects screen with cards for Mehta Wedding (110 GB, dormant), Brand Film 2026 (43.3 GB, working on it), Nike spec ad and Iceland 2025, each split into originals, caches and exports with Clean residue and Archive to drive buttons.',
      },
    ],
  },
  {
    id: 'explore',
    label: 'Explore',
    title: 'Browse by meaning, or by folder.',
    body: 'A map of ~/Library/Containers tells most people nothing. Sector9’s map groups your disk into things you recognise, like your footage, video caches and developer tools, and colours each tile by what it costs to get back.',
    points: [
      'Switch to the folder view whenever you want the raw paths',
      'Grey is yours and is never touched',
      'Reveal anything in Finder in one click',
    ],
    shots: [
      {
        src: '/sector9/shots/explore.webp',
        alt: 'The Explore treemap in By meaning mode. Tiles such as Your footage, Video caches and renders, Developer tools and Things to decide are coloured green, blue, amber or grey by recovery cost.',
      },
    ],
  },
  {
    id: 'ask',
    label: 'Ask Sector9 and the Review tray',
    title: 'Ask a question. Review before anything moves.',
    body: 'Ask things like “why is System Data so big?” or “what can I clear before my flight?” and get an answer built from your own scan, on your Mac. Anything you choose goes into a review tray first.',
    points: [
      'A dry run shows exactly what would move, without moving it',
      'Pre-flight checks: owning apps closed, lockfiles present, running containers left alone',
      'Everything goes to the Trash, with undo',
    ],
    shots: [
      {
        src: '/sector9/shots/ask.webp',
        alt: 'Ask Sector9 answering “Why is System Data so big?”: macOS reports 96.4 GB, mostly Docker’s virtual disk and Xcode build data, with a list of the parts and an Add the safe parts button.',
      },
      {
        src: '/sector9/shots/review.webp',
        alt: 'The Review tray with 170 GB staged, each item labelled Rebuilds itself or Re-downloadable, a Before anything moves checklist, a Dry run switch and a Clean 170 GB button.',
      },
    ],
  },
]

export function Features() {
  return (
    <section className="section" id="features" aria-labelledby="features-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Features</span>
          <h2 id="features-title">Four ways to understand your disk.</h2>
        </div>
        <div className="features">
          {features.map((f, i) => (
            <article key={f.id} className={`feature${i % 2 ? ' flip' : ''}`} aria-labelledby={`f-${f.id}`}>
              <div className="feature-copy">
                <span className="feature-label">{f.label}</span>
                <h3 id={`f-${f.id}`}>{f.title}</h3>
                <p>{f.body}</p>
                <ul className="feature-points">
                  {f.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className={`feature-media${f.shots.length > 1 ? ' stack' : ''}`}>
                {f.shots.map((s) => (
                  <figure key={s.src} className="shot">
                    <img src={s.src} alt={s.alt} width={2400} height={1420} loading="lazy" decoding="async" />
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
