import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import BlogLayout from '../../components/BlogLayout'

export default function ZomatoTextReviews() {
  return (
    <BlogLayout>
      <SEO
        title="PRD: Increasing Zomato Text Reviews - nerdynikhil"
        description="PRD: Increasing Zomato Text Reviews"
        url="https://www.nerdynikhil.com/blog/prd-increasing-zomato-text-reviews"
      />
      <article className="article-content">
            <div className="article-header">
              <h1>PRD: Increasing Zomato Text Reviews</h1>
              <div className="article-meta">Product Requirements Document</div>
            </div>

            <h2>Overview</h2>
            <p>This project tackles the challenge of boosting quality text reviews within Zomato's Food Delivery segment. Although a large portion of users rate orders, few leave descriptive text feedback—often because the process is lengthy and its value unclear.</p>

            <h2>Goals</h2>
            <ul>
              <li><strong>Drive revenue via credible reviews:</strong> Increase review frequency from loyal users, and convert occasional reviewers by removing friction.</li>
              <li><strong>Improve review quality:</strong> Specifically focus on relevance, recency, and depth.</li>
            </ul>

            <h2>Approach</h2>
            <h3>User Segmentation</h3>
            <p>Target frequent orderers ({'\u2265'}12 orders/3 months) who have previously left ratings/reviews.</p>

            <h3>Problem Validation</h3>
            <p>Surveys and interviews identified key blockers:</p>
            <ul>
              <li>Time consumption</li>
              <li>Lack of perceived value</li>
              <li>Poor recall</li>
              <li>Inconvenience</li>
            </ul>

            <h2>Solution Ideation</h2>
            <p>Three main ideas emerged:</p>

            <h3>1. Lean Review with Speech-to-Text</h3>
            <p>Users submit reviews via voice, aided by speech recognition. Eases friction and shortens review time.</p>

            <h3>2. Keyword-Based AI Reviews</h3>
            <p>Auto-generates category-specific keywords; users edit or approve AI-generated reviews.</p>

            <h3>3. AI Review Assistant</h3>
            <p>Populates editable default reviews using AI and previous feedback.</p>

            <h2>Recommended Solution</h2>
            <p>Speech-to-text reviews scored highest on reach, impact, confidence, and effort. The flow includes quick mic-based review input, tag selection for food aspects, and instant "thank you" feedback.</p>

            <h2>Metrics & Outcomes</h2>
            <ul>
              <li>Monthly review volume</li>
              <li>Active text reviewers</li>
              <li>Orders featuring text reviews</li>
              <li>Menu conversion rates</li>
            </ul>

            <h2>Future Directions</h2>
            <p>Plan to automate moderation, support local dialects, AI summarization, and create top reviewer incentives.</p>

            <div className="article-tags">
              <span className="article-tag">PRD</span>
              <span className="article-tag">Product Strategy</span>
              <span className="article-tag">User Research</span>
              <span className="article-tag">UX Design</span>
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
    </BlogLayout>
  )
}
