const faqs = [
  {
    q: 'Is it safe?',
    a: 'Sector9 never deletes anything on its own. You pick what goes into the review tray, a dry run shows exactly what would move, and pre-flight checks make sure the owning apps are closed first. Everything goes to the macOS Trash, and undo puts it back.',
  },
  {
    q: 'Does it need Full Disk Access? Why?',
    a: 'It works best with it. The biggest leftovers, like app caches, Xcode builds and Docker’s disk, live inside ~/Library and app containers that macOS hides from apps without Full Disk Access. Without it, Sector9 still scans your home folder and tells you what it could not see.',
  },
  {
    q: 'Will it delete my photos?',
    a: 'No. Your photos, footage, code and documents are marked “Yours, kept” and are never selected. Sector9 may point out things like Lightroom previews, which Lightroom rebuilds, but your originals are left alone.',
  },
  {
    q: 'Is it on the Mac App Store?',
    a: 'Not at first. Sector9 launches as a direct download. An App Store edition is planned.',
  },
  {
    q: 'Is there a Windows version?',
    a: 'Not yet. Sector9 is macOS only for now.',
  },
]

export function Faq() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="container faq-layout">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2 id="faq-title">Questions, answered plainly.</h2>
        </div>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>
                <h3>{f.q}</h3>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
