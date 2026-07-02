import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <div className="editorial-theme" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SEO
        title="404 — Page Not Found | nerdynikhil"
        description="The page you are looking for does not exist."
      />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
        <p className="section-label" style={{ marginBottom: '1rem' }}>404</p>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 400, color: 'var(--text-muted)', margin: '0 0 0.75rem' }}>
          Page not found
        </h1>
        <p style={{ color: 'var(--text-faint)', marginBottom: '2rem', fontSize: '0.9375rem' }}>
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.625rem 1.25rem',
            fontSize: '0.875rem',
            fontWeight: 500,
            color: 'var(--text-muted)',
            background: '#fff',
            border: '1px solid var(--border-strong)',
            borderRadius: 'var(--radius-btn)',
            textDecoration: 'none',
          }}
        >
          Back to home →
        </Link>
      </div>
    </div>
  )
}
