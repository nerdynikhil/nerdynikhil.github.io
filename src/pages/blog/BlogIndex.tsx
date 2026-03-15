import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'

const articles = [
  {
    slug: 'prd-increasing-zomato-text-reviews',
    title: 'PRD: Increasing Zomato Text Reviews',
    meta: 'Product Requirements Document',
    excerpt:
      'This project tackles the challenge of boosting quality text reviews within Zomato\'s Food Delivery segment. The solution includes Speech-to-Text reviews, AI tag generation, and UX improvements to increase review frequency and quality.',
    tags: ['PRD', 'Product Strategy', 'User Research', 'UX Design'],
  },
  {
    slug: 'case-study-growing-zomato-quality-reviews',
    title: 'Case Study: Growing Zomato with Quality Reviews',
    meta: 'Case Study',
    excerpt:
      'Analyze how increasing the quantity and credibility of text reviews in the food delivery vertical can drive business outcomes for Zomato. Includes user research, competitor analysis, and solution design.',
    tags: ['Case Study', 'User Research', 'Competitive Analysis', 'Business Strategy'],
  },
  {
    slug: 'smytten-referral-program-teardown',
    title: 'Smytten Referral Program Teardown',
    meta: 'Product Teardown',
    excerpt:
      'A deep dive into Smytten\'s referral program mechanics, user personas, journey mapping, and success metrics. Includes recommendations for enhancing engagement and loyalty.',
    tags: ['Product Teardown', 'User Personas', 'Journey Mapping', 'Growth Strategy'],
  },
  {
    slug: 'blinkit-app-notification-product-teardown',
    title: 'Blinkit: App Notification Product Teardown',
    meta: 'Product Teardown',
    excerpt:
      'Analysis of Blinkit\'s notification system that drives engagement through personalized deals, reminders, and feedback requests. Includes user personas, recommendations, and key metrics.',
    tags: ['Product Teardown', 'User Personas', 'Engagement Strategy', 'Product Analytics'],
  },
  {
    slug: 'swiggy-root-cause-analysis-play-store-rating-drop',
    title: 'Swiggy - Root Cause Analysis for Play Store Rating Drop',
    meta: 'Root Cause Analysis',
    excerpt:
      'Analysis of Swiggy\'s Play Store rating drop from 4.5 to 3.8 stars within two weeks. Identifies root causes including unrealistic marketing promises, app performance issues, and operational challenges.',
    tags: ['Root Cause Analysis', 'Problem Solving', 'Data Analysis', 'Product Quality'],
  },
  {
    slug: 'swiggy-enhancing-customer-loyalty-retention',
    title: 'Swiggy - Enhancing Customer Loyalty and Retention',
    meta: 'Product Strategy',
    excerpt:
      'Strategies to increase customer loyalty and retention for Swiggy\'s food delivery segment. Includes user personas, pain points, and solutions to improve retention rates from 60% to 80% WoW.',
    tags: ['Retention Strategy', 'User Personas', 'Pain Points Analysis', 'Product Strategy'],
  },
  {
    slug: 'secondary-research-food-delivery-industry-india',
    title: 'Secondary Research on Food Delivery Industry in India',
    meta: 'Industry Research',
    excerpt:
      'Comprehensive research on food delivery trends in India for 2023, including tech giants entering the market, drone deliveries, subscription models, cloud kitchens, and factors affecting the industry.',
    tags: ['Industry Research', 'Market Analysis', 'Trend Analysis', 'Strategic Planning'],
  },
  {
    slug: 'google-smart-shoes-product-metrics-goals',
    title: 'Google Smart Shoes - Product Metrics and Goals',
    meta: 'Product Metrics',
    excerpt:
      'Comprehensive product metrics framework for Google Smart Shoes including North Star metrics, KPIs, adoption, engagement, supply, quality, and guardrail metrics to track product success.',
    tags: ['Product Metrics', 'KPIs', 'North Star Metrics', 'Data-Driven Decisions'],
  },
  {
    slug: 'swiggy-dabba-customized-meal-plans',
    title: 'Swiggy - Dabba: Customized Weekly and Monthly Meal Plans',
    meta: 'Product Feature',
    excerpt:
      'Feature proposal for Swiggy\'s Dabba service allowing users to book weekly or monthly meal plans and pre-order customized food items to increase customer loyalty, retention, and acquisition.',
    tags: ['Feature Development', 'User Flows', 'Retention Strategy', 'Product Innovation'],
  },
]

export default function BlogIndex() {
  return (
    <div className="terminal-theme">
      <SEO
        title="Blog - nerdynikhil"
        description="Blog articles by Nikhil Barik - Product Design, UX, Case Studies"
        url="https://www.nerdynikhil.com/blog"
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

        {/* Blog Page Header */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-[var(--accent-color)] mb-2">Blog</h1>
          <p className="text-[var(--text-secondary)]">
            Articles on product design, user experience, and case studies
          </p>
        </div>

        {/* Blog List */}
        <div className="flex flex-col gap-8 mb-12">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="border-b border-[var(--border-color)] pb-8"
            >
              <h4 className="text-base font-semibold mb-1">
                <Link
                  to={`/blog/${article.slug}`}
                  className="text-[var(--accent-color)] hover:text-[var(--accent-hover)]"
                >
                  {article.title}
                </Link>
              </h4>
              <div className="article-meta">{article.meta}</div>
              <p className="text-[var(--text-primary)] mt-2 mb-3 text-sm leading-relaxed">
                {article.excerpt}
              </p>
              <div className="article-tags">
                {article.tags.map((tag) => (
                  <span key={tag} className="article-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Back Link */}
        <div className="text-center mb-12">
          <Link
            to="/"
            className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] text-sm"
          >
            &larr; Back to Home
          </Link>
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
