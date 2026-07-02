import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="editorial-theme">
      <header style={{ borderBottom: '1px solid var(--border)', padding: '0 1.5rem', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.125rem', textDecoration: 'none', color: 'var(--text-muted)' }}>
            nerdynikhil
          </Link>
          <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'var(--text-faint)' }}>Home</Link>
            <Link to="/blog" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Blog</Link>
          </nav>
        </div>
      </header>

      <div className="editorial-container">
        {children}
      </div>

      <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem 1.5rem', textAlign: 'center', fontSize: '0.8125rem', color: 'var(--text-faint)' }}>
        <Link to="/blog" style={{ color: 'var(--text-muted)', marginRight: '1rem' }}>All posts</Link>
        <a href="mailto:nerdynikhil@outlook.com" style={{ color: 'var(--text-muted)' }}>nerdynikhil@outlook.com</a>
      </footer>
    </div>
  )
}
