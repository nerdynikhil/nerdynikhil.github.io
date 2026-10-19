type Leftover = { name: string; verdict: 'rebuilds' | 'redownload' | 'review' }

const professions: { name: string; apps: string; items: Leftover[] }[] = [
  {
    name: 'Code',
    apps: 'Xcode, Docker, npm, Cargo, JetBrains',
    items: [
      { name: 'Xcode DerivedData', verdict: 'rebuilds' },
      { name: 'node_modules in sleeping projects', verdict: 'rebuilds' },
      { name: 'Unused Docker images', verdict: 'redownload' },
    ],
  },
  {
    name: 'Video',
    apps: 'Final Cut Pro, Premiere Pro, DaVinci Resolve',
    items: [
      { name: 'Final Cut render files', verdict: 'rebuilds' },
      { name: 'Premiere media cache', verdict: 'rebuilds' },
      { name: 'Duplicate exports', verdict: 'review' },
    ],
  },
  {
    name: 'Photo',
    apps: 'Lightroom Classic, Capture One, Photoshop',
    items: [
      { name: 'Lightroom previews', verdict: 'rebuilds' },
      { name: 'Old catalog backups', verdict: 'review' },
      { name: 'Photoshop scratch files', verdict: 'rebuilds' },
    ],
  },
  {
    name: 'Audio',
    apps: 'Logic Pro, Ableton Live, Kontakt, Splice',
    items: [
      { name: 'Logic sound library', verdict: 'redownload' },
      { name: 'Plugin installers in Downloads', verdict: 'redownload' },
      { name: 'Freeze and bounce files', verdict: 'rebuilds' },
    ],
  },
  {
    name: '3D & Games',
    apps: 'Unity, Unreal, Blender, Steam',
    items: [
      { name: 'Unreal DerivedDataCache', verdict: 'rebuilds' },
      { name: 'Unity Library folders', verdict: 'rebuilds' },
      { name: 'Blender .blend1 saves', verdict: 'review' },
    ],
  },
  {
    name: 'Design',
    apps: 'Figma, Adobe CC, Sketch',
    items: [
      { name: 'Figma desktop cache', verdict: 'rebuilds' },
      { name: 'Adobe CC caches', verdict: 'rebuilds' },
      { name: 'Sketch version history', verdict: 'review' },
    ],
  },
  {
    name: 'AI & Data',
    apps: 'Ollama, Hugging Face, ComfyUI, Conda',
    items: [
      { name: 'Hugging Face model cache', verdict: 'redownload' },
      { name: 'Ollama models you stopped using', verdict: 'redownload' },
      { name: 'Old Conda environments', verdict: 'rebuilds' },
    ],
  },
  {
    name: 'Everyday',
    apps: 'Messages, Photos, Safari, Zoom',
    items: [
      { name: 'Old iPhone backups', verdict: 'review' },
      { name: 'macOS installers', verdict: 'redownload' },
      { name: 'Browser caches', verdict: 'rebuilds' },
    ],
  },
]

const verdictLabel = { rebuilds: 'Rebuilds itself', redownload: 'Re-downloadable', review: 'Your call' }

export function Professions() {
  return (
    <section className="section" id="professions" aria-labelledby="professions-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Built for your kind of work</span>
          <h2 id="professions-title">Every profession leaves a different pile.</h2>
          <p>
            Sector9 looks at the apps you have installed and turns on the matching knowledge. No setup
            questions. A video editor sees render files; a developer sees build folders.
          </p>
        </div>
        <ul className="professions">
          {professions.map((p) => (
            <li key={p.name} className="profession">
              <h3>{p.name}</h3>
              <p className="profession-apps">{p.apps}</p>
              <ul className="leftovers">
                {p.items.map((i) => (
                  <li key={i.name}>
                    <span className={`dot ${i.verdict}`} aria-hidden="true" />
                    <span>{i.name}</span>
                    <span className="visually-hidden"> ({verdictLabel[i.verdict]})</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
