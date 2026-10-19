const promises = [
  { title: 'On-device', body: 'Scanning and answers happen on your Mac. File names never leave it.' },
  { title: 'No account', body: 'Download, open, scan. There is nothing to sign up for.' },
  { title: 'No telemetry', body: 'Sector9 does not phone home with what it finds.' },
  { title: 'Trash only', body: 'Nothing is deleted outright. Files go to the Trash, and undo puts them back.' },
  { title: 'Never picks for you', body: 'Your files and anything marked “Your call” are never selected automatically.' },
]

export function Privacy() {
  return (
    <section className="section privacy" id="privacy" aria-labelledby="privacy-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Privacy &amp; safety</span>
          <h2 id="privacy-title">Your disk stays your business.</h2>
        </div>
        <ul className="promises">
          {promises.map((p) => (
            <li key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
