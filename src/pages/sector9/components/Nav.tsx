import { Logo } from './Logo'

const links = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#privacy', label: 'Privacy' },
  { href: '#pricing', label: 'Pricing' },
]

export function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label="Sector9 home">
          <Logo size={24} />
          <span>Sector9</span>
        </a>
        <nav aria-label="Primary" className="nav-links">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#download" className="btn primary small nav-cta">
          Download for Mac
        </a>
      </div>
    </header>
  )
}
