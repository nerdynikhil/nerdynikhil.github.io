import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'

export default function SmyttenReferral() {
  return (
    <div className="terminal-theme">
      <SEO
        title="Smytten Referral Program Teardown - nerdynikhil"
        description="Smytten Referral Program Teardown"
        url="https://www.nerdynikhil.com/blog/smytten-referral-program-teardown"
      />

      <div className="terminal-container">
        {/* Header */}
        <header className="flex items-center justify-between py-6 border-b border-[var(--border-color)] mb-12">
          <Link
            to="/"
            className="text-xl font-semibold text-[var(--accent-color)] !border-b-0"
          >
            <span className="text-[var(--text-secondary)]">./</span>nerdynikhil
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link to="/" className="!border-b-0 hover:text-[var(--accent-color)]">
              <span className="text-[var(--text-secondary)]">[</span>
              Home
              <span className="text-[var(--text-secondary)]">]</span>
            </Link>
            <Link to="/blog" className="!border-b-0 hover:text-[var(--accent-color)]">
              <span className="text-[var(--text-secondary)]">[</span>
              Blog
              <span className="text-[var(--text-secondary)]">]</span>
            </Link>
          </nav>
        </header>

        <div className="article-container">
          <article className="article-content">
            <div className="article-header">
              <h1>Smytten Referral Program Teardown</h1>
              <div className="article-meta">Product Teardown</div>
            </div>

            <h2>Platform Overview</h2>
            <p>Smytten is India's leading tech-driven D2C product discovery and trial platform. It curates premium brands, emphasizes sampling, and leverages digital engagement for growth.</p>

            <h2>Referral Mechanics</h2>
            <ul>
              <li>Sign-up bonus for both referrer and referee</li>
              <li>Additional rewards when a referred friend places a trial order</li>
              <li>Redemption after reaching 500 Smytten Bucks; expiry in one year</li>
              <li>Referral limit: 10 per month</li>
            </ul>

            <h2>User Personas</h2>

            <h3>Referrer</h3>
            <p>Digitally savvy influencers seeking social recognition and rewards.</p>

            <h3>Referee</h3>
            <p>Incentive-driven premium buyers, prefer trusted recommendations.</p>

            <h2>Journey Map</h2>
            <ul>
              <li>Sign up, explore rewards</li>
              <li>Refer friends through contacts or social sharing</li>
              <li>Enjoy free trial rewards</li>
              <li>Track referrals</li>
              <li>Communicate through WhatsApp or SMS</li>
            </ul>

            <h2>Success Metrics</h2>
            <ul>
              <li>Number of referrals per user</li>
              <li>Conversion and redemption rates</li>
              <li>Visibility of referral features and personalized messaging</li>
              <li>App Store conversion and referral CTR</li>
            </ul>

            <h2>Recommendations</h2>
            <ul>
              <li>Enhance app interface visibility</li>
              <li>Gamify leaderboards</li>
              <li>Improve SMS reliability</li>
              <li>Personalize referral experience for maximum engagement and loyalty</li>
            </ul>

            <div className="article-tags">
              <span className="article-tag">Product Teardown</span>
              <span className="article-tag">User Personas</span>
              <span className="article-tag">Journey Mapping</span>
              <span className="article-tag">Growth Strategy</span>
            </div>

            <div className="text-center mt-12">
              <Link
                to="/blog"
                className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] text-sm"
              >
                &larr; Back to Blog
              </Link>
            </div>
          </article>
        </div>

        {/* Footer */}
        <footer className="border-t border-[var(--border-color)] pt-8 pb-12 text-sm text-[var(--text-secondary)]">
          <div className="mb-4">
            <span className="text-[var(--text-secondary)]">echo </span>
            <a
              href="mailto:nerdynikhil@outlook.com"
              className="text-[var(--text-primary)]"
            >
              nerdynikhil@outlook.com
            </a>
          </div>
          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/nerdynikhil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[var(--text-secondary)]">&lt;</span>
              LinkedIn
              <span className="text-[var(--text-secondary)]">&gt;</span>
            </a>
            <a
              href="https://github.com/nerdynikhil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[var(--text-secondary)]">&lt;</span>
              GitHub
              <span className="text-[var(--text-secondary)]">&gt;</span>
            </a>
            <a
              href="https://twitter.com/nerdynikhil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[var(--text-secondary)]">&lt;</span>
              Twitter
              <span className="text-[var(--text-secondary)]">&gt;</span>
            </a>
            <a
              href="https://instagram.com/nerdynikhil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[var(--text-secondary)]">&lt;</span>
              Instagram
              <span className="text-[var(--text-secondary)]">&gt;</span>
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
