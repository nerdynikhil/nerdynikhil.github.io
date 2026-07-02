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
    <div className="editorial-theme">
      <SEO
        title="Blog - nerdynikhil"
        description="Blog articles by Nikhil Barik - Product Design, UX, Case Studies"
        url="https://www.nerdynikhil.com/blog"
      />

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
        <p className="section-label" style={{ marginBottom: '0.75rem' }}>Field Notes</p>
        <h1 style={{ marginBottom: '0.5rem' }}>Product thinking</h1>
        <p style={{ color: 'var(--text-faint)', marginBottom: '2.5rem', fontSize: '0.9375rem' }}>
          Articles on product design, user experience, and case studies
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {articles.map((article) => (
            <article
              key={article.slug}
              style={{ borderBottom: '1px solid var(--border)', padding: '1.5rem 0' }}
            >
              <h2 style={{ fontSize: '1.25rem', margin: '0 0 0.375rem', border: 'none', padding: 0 }}>
                <Link to={`/blog/${article.slug}`} style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>
                  {article.title}
                </Link>
              </h2>
              <div className="article-meta">{article.meta}</div>
              <p style={{ marginTop: '0.75rem', marginBottom: '0.75rem' }}>{article.excerpt}</p>
              <div className="article-tags">
                {article.tags.map((tag) => (
                  <span key={tag} className="article-tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/" style={{ fontSize: '0.875rem', color: 'var(--text-faint)' }}>
            ← Back to Home
          </Link>
        </div>
      </div>

      <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem 1.5rem', textAlign: 'center', fontSize: '0.8125rem', color: 'var(--text-faint)' }}>
        <a href="mailto:nerdynikhil@outlook.com" style={{ color: 'var(--text-muted)' }}>nerdynikhil@outlook.com</a>
      </footer>
    </div>
  )
}
