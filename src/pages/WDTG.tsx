import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function WDTG() {
  const features = [
    {
      icon: '⏱️',
      title: 'Simple Time Logging',
      description:
        'Log activities in seconds. Choose from smart defaults or create custom categories. Track your time effortlessly.',
    },
    {
      icon: '📊',
      title: 'Beautiful Visualizations',
      description:
        'Interactive pie charts and year dots reveal your patterns. See where your time goes at a glance.',
    },
    {
      icon: '☁️',
      title: 'iCloud Sync',
      description:
        'Automatic sync across all your devices. Your data follows you everywhere, always up to date.',
    },
    {
      icon: '📈',
      title: 'Insights & Trends',
      description:
        'View daily, weekly, monthly, or yearly patterns. Understand your time allocation and build better habits.',
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description:
        'Your data stays private in your iCloud. No tracking, no analytics, no data collection. Just you and your time.',
    },
    {
      icon: '🎨',
      title: 'Smart Categories',
      description:
        '8 thoughtful defaults plus unlimited custom categories. Organize your time the way you want.',
    },
  ]

  return (
    <>
      <SEO
        title="WDTG - Where Did The Time Go?"
        description="Track your time, visualize your life. Simple time tracking with beautiful charts and automatic iCloud sync."
        url="https://www.nerdynikhil.com/wdtg"
      />

      <div style={{ minHeight: '100vh', background: 'var(--cream)', color: 'var(--text)' }}>
        {/* Navigation */}
        <nav style={{ borderBottom: '1px solid var(--border)', padding: '1.25rem 1.5rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--text-muted)' }}>WDTG</span>
            <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }} className="portfolio-nav-links">
              <a href="#features" className="nav-link-item" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-faint)', textDecoration: 'none' }}>
                Features
              </a>
              <a href="#privacy" className="nav-link-item" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-faint)', textDecoration: 'none' }}>
                Privacy
              </a>
              <Link to="/wdtg/support" className="nav-link-item" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-faint)', textDecoration: 'none' }}>
                Support
              </Link>
              <Link to="/" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-muted)', textDecoration: 'none', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-btn)', padding: '0.5rem 1rem' }}>
                nerdynikhil.com
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '5rem 1.5rem', textAlign: 'center' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}>iOS App</p>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 400,
            fontSize: 'clamp(2.25rem, 6vw, 3.75rem)',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: 'var(--text-muted)',
            margin: '0 0 1.25rem',
          }}>
            Where Did The <em style={{ fontStyle: 'italic' }}>Time Go?</em>
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', color: 'var(--text-faint)', maxWidth: '480px', margin: '0 auto 2.5rem', lineHeight: 1.65 }}>
            Track your time. Visualize your life. Understand your patterns.
          </p>
          <a
            href="https://apps.apple.com/us/app/wdtg-where-did-the-time-go/id6756418835"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--text-muted)',
              color: '#fff',
              padding: '0.875rem 1.75rem',
              borderRadius: 'var(--radius-btn)',
              fontWeight: 500,
              fontSize: '0.9375rem',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(28,25,23,0.12)',
            }}
          >
            📱 Download on the App Store
          </a>
          <p style={{ marginTop: '1.25rem', color: 'var(--text-faint)', fontSize: '0.875rem' }}>Available now on iPhone</p>
        </section>

        {/* Features Section */}
        <section id="features" style={{ padding: '5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
          <p className="section-label" style={{ textAlign: 'center', marginBottom: '1rem' }}>What It Does</p>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 400,
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            color: 'var(--text-muted)',
            textAlign: 'center',
            margin: '0 auto 3rem',
            maxWidth: '600px',
          }}>
            Simple. Beautiful. <em style={{ fontStyle: 'italic' }}>Powerful.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {features.map((feature) => (
              <div
                key={feature.title}
                style={{
                  background: 'var(--cream-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-card)',
                  padding: '1.75rem',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{feature.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: '1.125rem', color: 'var(--text-muted)', margin: '0 0 0.5rem' }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-faint)', lineHeight: 1.6, margin: 0 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Privacy Section */}
        <section id="privacy" style={{ padding: '3rem 1.5rem 6rem', maxWidth: '640px', margin: '0 auto' }}>
          <div style={{
            background: 'var(--cream-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-card)',
            padding: '2.5rem 2rem',
            textAlign: 'center',
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--text-muted)', margin: '0 0 0.75rem' }}>
              Your Data, <em style={{ fontStyle: 'italic' }}>Your Control</em>
            </h2>
            <p style={{ color: 'var(--text-faint)', fontSize: '0.9375rem', lineHeight: 1.6, margin: '0 0 0.75rem' }}>
              All your time entries are stored securely in your private iCloud. We never see, collect, or share your data.
            </p>
            <p style={{ color: 'var(--text-faint)', fontSize: '0.9375rem', lineHeight: 1.6, margin: '0 0 1.5rem' }}>
              No accounts. No tracking. No analytics. Just simple, private time tracking.
            </p>
            <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link
                to="/wdtg/privacy"
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
                Privacy Policy
              </Link>
              <Link
                to="/wdtg/terms"
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
                Terms of Service
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem 1.5rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--text-faint)' }}>
              Made by{' '}
              <a href="https://nerdynikhil.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }}>
                Nikhil Barik
              </a>
            </span>
            <a href="mailto:hello@nerdynikhil.com" style={{ fontSize: '0.8125rem', color: 'var(--text-faint)', textDecoration: 'none' }}>
              Contact
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}
