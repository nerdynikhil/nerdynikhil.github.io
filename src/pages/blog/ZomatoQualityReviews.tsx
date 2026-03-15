import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'

export default function ZomatoQualityReviews() {
  return (
    <div className="terminal-theme">
      <SEO
        title="Case Study: Growing Zomato with Quality Reviews - nerdynikhil"
        description="Case Study: Growing Zomato with Quality Reviews"
        url="https://www.nerdynikhil.com/blog/case-study-growing-zomato-quality-reviews"
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
              <h1>Case Study: Growing Zomato with Quality Reviews</h1>
              <div className="article-meta">Case Study</div>
            </div>

            <h2>Objective</h2>
            <p>Analyze how increasing the quantity and credibility of text reviews in the food delivery vertical can drive business outcomes for Zomato.</p>

            <h2>Key Takeaways</h2>

            <h3>Importance of Reviews</h3>
            <p>Text reviews strengthen platform trust, speed up user decision making, and improve menu conversions.</p>

            <h3>Target Users</h3>
            <p>Highly active, frequent orderers are most likely to engage if their barriers—mostly time and value—are addressed.</p>

            <h3>Survey Insights</h3>
            <p>Only 28% frequently write text reviews due to convenience and perceived benefit issues.</p>

            <h3>Competitor Research</h3>
            <p>The segment lacks advanced audio or AI review systems, presenting a strong differentiation opportunity.</p>

            <h2>Solution Highlights</h2>

            <h3>Speech-to-Text Reviewer</h3>
            <p>Eases writing anxiety and decision effort, increases perceived value.</p>

            <h3>AI Tag Generator</h3>
            <p>Creates detailed, relatable reviews from simple ratings.</p>

            <h3>User Experience Improvements</h3>
            <ul>
              <li>Conversational UI</li>
              <li>Emojis and hashtags</li>
              <li>Appreciation messages</li>
              <li>Recent review visibility for menu browsing</li>
            </ul>

            <h2>System Design</h2>
            <p>Speech recognition is central, with fallback to online models. Moderation, sentiment analysis, and keyword tagging safeguard quality.</p>
            <p>Data pipeline tracks review interactions for business analytics.</p>

            <h2>Success Metrics</h2>
            <ul>
              <li>Review volume and active users</li>
              <li>Time to write reviews</li>
              <li>Menu conversion rates</li>
              <li>Click-through rates on notifications</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Prioritizing convenience and recognition can transform text review rates, supporting Zomato's business goals and overall user satisfaction.</p>

            <div className="article-tags">
              <span className="article-tag">Case Study</span>
              <span className="article-tag">User Research</span>
              <span className="article-tag">Competitive Analysis</span>
              <span className="article-tag">Business Strategy</span>
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
