import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'

export default function SwiggyDabba() {
  return (
    <div className="terminal-theme">
      <SEO
        title="Swiggy - Dabba: Customized Weekly and Monthly Meal Plans - nerdynikhil"
        description="Swiggy - Dabba: Customized Weekly and Monthly Meal Plans"
        url="https://www.nerdynikhil.com/blog/swiggy-dabba-customized-meal-plans"
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
              <h1>Swiggy - Dabba: Customized Weekly and Monthly Meal Plans</h1>
              <div className="article-meta">Product Feature</div>
            </div>

            <h2>Objective</h2>
            <p>The project aims to increase customer loyalty, retention, and acquire new customers by introducing a new feature called "Dabba." Dabba allows users to book weekly or monthly meal plans and pre-order customized food items. This feature provides customers with convenience and control over their meal choices, encouraging sustained engagement with Swiggy.</p>

            <h2>Key Results and Success Criteria</h2>
            <ul>
              <li>Customers pre-order customized food plans through Dabba.</li>
              <li>New users join Swiggy attracted by the Dabba service.</li>
              <li>Increase in bulky orders linked to meal plans.</li>
              <li>Growing customer satisfaction and preference for weekly/monthly meal plans.</li>
              <li>Establish partnerships with cloud kitchens to cater to the feature.</li>
            </ul>

            <h2>Problem Statement</h2>
            <p>To offer nationwide delivery of customized pre-order meal plans, Swiggy requires significant logistical capabilities and operational scale. Maintaining consistent food quality and timely delivery while scaling operations poses challenges.</p>

            <h2>Opportunity</h2>
            <ul>
              <li>Empower customers to customize and pre-order meals with optional notes for restaurants.</li>
              <li>Enhance the perception of receiving fresh and personalized food.</li>
              <li>Attract new users looking for meal-planning convenience.</li>
              <li>Boost customer loyalty by simplifying meal ordering.</li>
            </ul>

            <h2>Target Audience</h2>
            <ul>
              <li>Customers conscious about their diet and meal choices.</li>
              <li>Users specifically seeking pre-planned meal subscriptions.</li>
              <li>Consumers requiring reliable, hassle-free meal solutions.</li>
            </ul>

            <h2>Scope</h2>
            <ul>
              <li>The feature could attract and retain more customers via meal subscriptions.</li>
              <li>Potentially launch Dabba as a standalone service akin to Swiggy's Genie or Instamart offering.</li>
              <li>Expand Swiggy's product portfolio, diversifying revenue streams.</li>
            </ul>

            <h2>User Flows (Conceptual)</h2>
            <ul>
              <li>Users select a meal plan (weekly/monthly).</li>
              <li>Customize items and add special instructions.</li>
              <li>Add to cart and checkout within the app.</li>
              <li>Order is sent to the respective restaurant or cloud kitchen.</li>
              <li>Scheduled, recurring deliveries managed automatically.</li>
            </ul>

            <div className="article-tags">
              <span className="article-tag">Feature Development</span>
              <span className="article-tag">User Flows</span>
              <span className="article-tag">Retention Strategy</span>
              <span className="article-tag">Product Innovation</span>
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
