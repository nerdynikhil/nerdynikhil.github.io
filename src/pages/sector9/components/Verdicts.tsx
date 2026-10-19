const verdicts = [
  {
    key: 'rebuilds',
    name: 'Rebuilds itself',
    body: 'The app that made it recreates it on its own, the next time it needs it.',
    cost: 'Costs you a short wait. Sector9 shows the rebuild time.',
  },
  {
    key: 'redownload',
    name: 'Re-downloadable',
    body: 'It can be fetched again from where it came from: a model, an SDK, a sound library.',
    cost: 'Costs you bandwidth. Sector9 shows the download size.',
  },
  {
    key: 'review',
    name: 'Your call',
    body: 'Personal or ambiguous, like old exports, phone backups and duplicates.',
    cost: 'Only you can decide, so it is never selected for you.',
  },
  {
    key: 'protected',
    name: 'Yours, kept',
    body: 'Your footage, code, photos and apps. Sector9 counts it and leaves it alone.',
    cost: 'Never touched.',
  },
]

export function Verdicts() {
  return (
    <section className="section" id="how-it-works" aria-labelledby="verdicts-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The idea</span>
          <h2 id="verdicts-title">Not “safe” or “unsafe”. What it costs to get back.</h2>
          <p>
            Most cleaners sort files into junk and not-junk. Sector9 gives every finding one of four
            plain verdicts, and shows the reasoning behind each one.
          </p>
        </div>
        <ul className="verdicts">
          {verdicts.map((v) => (
            <li key={v.key} className={`verdict ${v.key}`}>
              <h3>
                <span className={`dot ${v.key}`} aria-hidden="true" />
                {v.name}
              </h3>
              <p>{v.body}</p>
              <p className="verdict-cost">{v.cost}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
