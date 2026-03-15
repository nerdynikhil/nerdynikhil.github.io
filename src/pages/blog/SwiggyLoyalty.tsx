import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'

export default function SwiggyLoyalty() {
  return (
    <div className="terminal-theme">
      <SEO
        title="Swiggy - Enhancing Customer Loyalty and Retention - nerdynikhil"
        description="Swiggy - Enhancing Customer Loyalty and Retention"
        url="https://www.nerdynikhil.com/blog/swiggy-enhancing-customer-loyalty-retention"
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
              <h1>Swiggy - Enhancing Customer Loyalty and Retention</h1>
              <div className="article-meta">Product Strategy</div>
            </div>

            <h2>Problem Statement</h2>
            <p>As a product manager at Swiggy, the primary challenge is the migration of users from Swiggy to competing platforms. The objective is to increase customer loyalty and retain existing users by enhancing the app's user experience and services to be hassle-free and friendly.</p>

            <h2>Project Summary</h2>
            <p>The focus is on improving the Swiggy app to make it more user-friendly and reliable, thereby winning users' loyalty and increasing retention rates.</p>

            <h2>Goals and Success Criteria</h2>
            <ul>
              <li>Increase the week-over-week (WoW) retention rate from 60% to 80%.</li>
              <li>Address and solve user pain points to boost loyalty.</li>
            </ul>

            <h2>Assumption</h2>
            <p>This project concentrates solely on the food delivery segment of Swiggy's services.</p>

            <h2>Customer Segments</h2>
            <ul>
              <li>Repeat customers</li>
              <li>New users</li>
              <li>High-value customers</li>
              <li>Social media influencers and brand advocates</li>
            </ul>

            <h2>User Personas</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-[var(--border-color)] my-4">
                <thead>
                  <tr>
                    <th className="border border-[var(--border-color)] p-2 text-left text-[var(--accent-color)]">Segment</th>
                    <th className="border border-[var(--border-color)] p-2 text-left text-[var(--accent-color)]">Repeat Customers</th>
                    <th className="border border-[var(--border-color)] p-2 text-left text-[var(--accent-color)]">New Users</th>
                    <th className="border border-[var(--border-color)] p-2 text-left text-[var(--accent-color)]">High Value Customers</th>
                    <th className="border border-[var(--border-color)] p-2 text-left text-[var(--accent-color)]">Social Media Influencers & Advocates</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[var(--border-color)] p-2"><strong>Demographics</strong></td>
                    <td className="border border-[var(--border-color)] p-2">Age 30-45, urban/suburban</td>
                    <td className="border border-[var(--border-color)] p-2">Age 18-35, urban, busy professionals</td>
                    <td className="border border-[var(--border-color)] p-2">Age 35-50, high disposable income</td>
                    <td className="border border-[var(--border-color)] p-2">Age 18-30, socially active</td>
                  </tr>
                  <tr>
                    <td className="border border-[var(--border-color)] p-2"><strong>Behavioral Traits</strong></td>
                    <td className="border border-[var(--border-color)] p-2">Loyal users valuing convenience, reliability, variety</td>
                    <td className="border border-[var(--border-color)] p-2">Tech-savvy, time-starved, first-timers looking for easy onboarding</td>
                    <td className="border border-[var(--border-color)] p-2">Frequently order for groups/special occasions, value quality</td>
                    <td className="border border-[var(--border-color)] p-2">Trendsetters, sharing experiences, engaged on social media</td>
                  </tr>
                  <tr>
                    <td className="border border-[var(--border-color)] p-2"><strong>Psychographics</strong></td>
                    <td className="border border-[var(--border-color)] p-2">Food enthusiasts, convenience seekers</td>
                    <td className="border border-[var(--border-color)] p-2">Busy professionals seeking efficiency</td>
                    <td className="border border-[var(--border-color)] p-2">Luxury seekers, gourmet enthusiasts</td>
                    <td className="border border-[var(--border-color)] p-2">Trend followers, experience seekers</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Customer Pain Points</h2>
            <ol>
              <li><strong>Poor Delivery Experience:</strong> Users report late deliveries, incorrect or damaged orders hurting trust and overall app satisfaction.</li>
              <li><strong>Limited Restaurant Options:</strong> Customers feel the restaurant choices are narrow in some locations, prompting them to try competing platforms.</li>
              <li><strong>Pricing and Value Perception:</strong> Prices on Swiggy may seem higher than dining in or ordering directly, raising doubts about value for money.</li>
              <li><strong>Competitor Marketing Noise:</strong> Aggressive strategies by competitors distract and attract users away from Swiggy.</li>
            </ol>

            <h2>Prioritization of Improvement Areas</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-[var(--border-color)] my-4">
                <thead>
                  <tr>
                    <th className="border border-[var(--border-color)] p-2 text-left text-[var(--accent-color)]">Priority Level</th>
                    <th className="border border-[var(--border-color)] p-2 text-left text-[var(--accent-color)]">Focus Area</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[var(--border-color)] p-2"><strong>Easy Wins</strong></td>
                    <td className="border border-[var(--border-color)] p-2">Improving delivery logistics and quality control</td>
                  </tr>
                  <tr>
                    <td className="border border-[var(--border-color)] p-2"><strong>Big Bets</strong></td>
                    <td className="border border-[var(--border-color)] p-2">Diversifying restaurant offerings</td>
                  </tr>
                  <tr>
                    <td className="border border-[var(--border-color)] p-2"><strong>Incremental</strong></td>
                    <td className="border border-[var(--border-color)] p-2">Enhancing pricing transparency and competitiveness</td>
                  </tr>
                  <tr>
                    <td className="border border-[var(--border-color)] p-2"><strong>Long-term</strong></td>
                    <td className="border border-[var(--border-color)] p-2">Building competitive differentiation through brand and features</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Detailed Solutions</h2>

            <h3>1. Improving Delivery Experience</h3>
            <ul>
              <li><strong>Advanced Logistics & Tracking:</strong> Invest in technology to optimize delivery routes ensuring timeliness.</li>
              <li><strong>Quality Control:</strong> Strict protocols for packaging and handling to minimize damage and errors.</li>
              <li><strong>Delivery Personnel Training:</strong> Educate on food handling best practices.</li>
            </ul>

            <h3>2. Restaurant Diversification</h3>
            <ul>
              <li>Conduct market research to understand regional preferences.</li>
              <li>Onboard a broader range of restaurants, enhancing variety.</li>
              <li>Expand service reach to new neighborhoods.</li>
            </ul>

            <h3>3. Pricing Value Enhancement</h3>
            <ul>
              <li>Maintain transparent pricing with clear indication of additional fees.</li>
              <li>Negotiate competitive deals with restaurants to offer exclusive discounts.</li>
            </ul>

            <h3>4. Competitive Differentiation</h3>
            <ul>
              <li>Strengthen brand identity with effective marketing campaigns.</li>
              <li>Innovate with unique app features, such as customized ordering and exclusive partnerships.</li>
            </ul>

            <h2>Future Scope</h2>
            <ul>
              <li><strong>Price Comparison Feature:</strong> Allow customers to compare prices of the same dish across participating restaurants, aiding informed decisions.</li>
            </ul>

            <div className="article-tags">
              <span className="article-tag">Retention Strategy</span>
              <span className="article-tag">User Personas</span>
              <span className="article-tag">Pain Points Analysis</span>
              <span className="article-tag">Product Strategy</span>
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
