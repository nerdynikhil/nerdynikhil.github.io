import { Logo } from './Logo'

const WAITLIST_MAILTO = 'mailto:nklmarch17@gmail.com?subject=Sector9%20waitlist&body=Let%20me%20know%20when%20Sector9%20is%20ready.'

export function Download() {
  return (
    <section className="section download" id="download" aria-labelledby="download-title">
      <div className="container download-inner">
        <Logo size={44} />
        <h2 id="download-title">Coming soon. Join the waitlist.</h2>
        <p>Sector9 is not out yet. Send a one-line email and you will hear back once, when it is ready to download.</p>
        <div className="waitlist-slot">
          <a className="btn primary" href={WAITLIST_MAILTO}>
            Join the waitlist by email
          </a>
        </div>
      </div>
    </section>
  )
}
