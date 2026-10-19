import { useState, type FormEvent } from 'react'
import { Logo } from './Logo'

export function Download() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  // Nothing is sent anywhere: the waitlist is a local placeholder until launch.
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (e.currentTarget.checkValidity()) setJoined(true)
  }

  return (
    <section className="section download" id="download" aria-labelledby="download-title">
      <div className="container download-inner">
        <Logo size={44} />
        <h2 id="download-title">Coming soon. Join the waitlist.</h2>
        <p>Sector9 is not out yet. Leave your email and we will write once, when it is ready to download.</p>
        <div className="waitlist-slot" aria-live="polite">
          {joined ? (
            <p className="waitlist-thanks">
              Thanks. You are on the list as <strong>{email}</strong>.
            </p>
          ) : (
            <form className="waitlist" onSubmit={submit}>
              <label htmlFor="waitlist-email" className="visually-hidden">
                Email address
              </label>
              <input
                id="waitlist-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn primary">
                Join the waitlist
              </button>
            </form>
          )}
        </div>
        <p className="download-note">macOS 13+ · Apple silicon &amp; Intel</p>
      </div>
    </section>
  )
}
