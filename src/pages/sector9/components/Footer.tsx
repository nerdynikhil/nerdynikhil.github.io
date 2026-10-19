import { Link } from 'react-router-dom'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="brand small">
          <Logo size={18} />
          <span>Sector9</span>
        </span>
        <p>Disk space, explained.</p>
        <nav aria-label="Footer" className="footer-links">
          <Link to="/sector9/privacy">Privacy</Link>
          <Link to="/sector9/support">Support</Link>
          <Link to="/">nerdynikhil.com</Link>
        </nav>
        <p className="footer-copy">© 2026 Sector9</p>
      </div>
    </footer>
  )
}
