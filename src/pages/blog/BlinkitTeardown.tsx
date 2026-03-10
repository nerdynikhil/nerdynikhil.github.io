import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'

export default function BlinkitTeardown() {
  return (
    <div className="terminal-theme">
      <SEO
        title="Blinkit: App Notification Product Teardown - nerdynikhil"
        description="Blinkit: App Notification Product Teardown"
        url="https://www.nerdynikhil.com/blog/blinkit-app-notification-product-teardown"
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
              <h1>Blinkit: App Notification Product Teardown</h1>
              <div className="article-meta">Product Teardown</div>
            </div>

            <h2>Business Context</h2>
            <p>Blinkit (acquired by Zomato) leads the hyperlocal instant commerce segment by leveraging strategically placed dark stores for nearly instant delivery.</p>

            <h2>Key Features</h2>
            <p>Notification system drives engagement: personalized deals, reminders, and feedback requests.</p>
            <ul>
              <li>Minimalistic design and strong CTAs optimize readability and engagement</li>
              <li>Targeted frequency and personalized content reduce opt-out rates</li>
            </ul>

            <h2>User Personas</h2>

            <h3>Young Professionals</h3>
            <p>Seeking efficiency and convenience with minimal notification spam.</p>

            <h3>Budget-Driven Household Managers</h3>
            <p>Juggling shopping, deals, and family needs.</p>

            <h2>Recommendations</h2>
            <ul>
              <li><strong>AI personalization:</strong> Predict preferences, suggest relevant deals at optimal times</li>
              <li><strong>Interactive notifications:</strong> Enable direct actions like reordering or rating deliveries right from the notification</li>
              <li><strong>Enhanced controls:</strong> Users choose notification type/frequency</li>
              <li><strong>UI/UX consistency and clarity:</strong> Strong branding, actionable content, and minimal information overload</li>
            </ul>

            <h2>Metrics</h2>
            <ul>
              <li>Opt-out and click-through rates</li>
              <li>Retention and engagement rates after notifications</li>
              <li>Notification conversion and session frequency</li>
            </ul>

            <div className="article-tags">
              <span className="article-tag">Product Teardown</span>
              <span className="article-tag">User Personas</span>
              <span className="article-tag">Engagement Strategy</span>
              <span className="article-tag">Product Analytics</span>
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
