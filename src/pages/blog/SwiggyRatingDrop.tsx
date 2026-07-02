import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import BlogLayout from '../../components/BlogLayout'

export default function SwiggyRatingDrop() {
  return (
    <BlogLayout>
      <SEO
        title="Swiggy - Root Cause Analysis for Play Store Rating Drop - nerdynikhil"
        description="Swiggy - Root Cause Analysis for Play Store Rating Drop"
        url="https://www.nerdynikhil.com/blog/swiggy-root-cause-analysis-play-store-rating-drop"
      />
      <article className="article-content">
            <div className="article-header">
              <h1>Swiggy - Root Cause Analysis for Play Store Rating Drop</h1>
              <div className="article-meta">Root Cause Analysis</div>
            </div>

            <h2>Overview</h2>
            <p>Swiggy faced a sudden drop in its Play Store rating from 4.5 stars to 3.8 stars within two weeks. The goal was to identify the root causes of this decline and propose actionable solutions to restore user trust and improve app ratings.</p>

            <h2>Problem Statement</h2>
            <p>Users expressed dissatisfaction leading to negative ratings. The task was to analyze data and user feedback to find primary issues influencing this drop.</p>

            <h2>Assumptions</h2>
            <ol>
              <li>The app is only available on Android platforms.</li>
              <li>Swiggy's app includes four distinct services:
                <ul>
                  <li>Food Delivery</li>
                  <li>Swiggy Instamart (grocery delivery)</li>
                  <li>Dineout (restaurant bookings)</li>
                  <li>Genie (instant parcel delivery)</li>
                </ul>
              </li>
            </ol>
            <p>Analysis was divided to check if the rating issues were service-specific or brand-wide.</p>

            <h2>Analysis Process</h2>

            <h3>Step 1: Check for Service-Specific Issues</h3>
            <ul>
              <li>Investigated Play Store reviews to identify which service had the most complaints.</li>
              <li>Found the majority of negative reviews related to Swiggy's Food Delivery service.</li>
            </ul>

            <h3>Step 2: Identify Common Complaints</h3>
            <ul>
              <li>Delays in deliveries beyond promised times.</li>
              <li>Order inaccuracies.</li>
              <li>App crashes and bugs reported post-update.</li>
              <li>Customer support not resolving issues timely.</li>
            </ul>

            <h3>Step 3: External Factors</h3>
            <ul>
              <li>A recent ambitious marketing campaign promised 10-minute delivery times.</li>
              <li>Users found this promise unrealistic given current delivery constraints leading to frustration.</li>
            </ul>

            <h3>Step 4: Competitor Comparison</h3>
            <ul>
              <li>Users switching to platforms like Zomato due to better offers or timely delivery.</li>
            </ul>

            <h2>Findings</h2>
            <ul>
              <li>The 10-minute delivery promise created an expectation gap.</li>
              <li>App performance issues post-update further hurt user experience.</li>
              <li>Delivery delays and inaccurate orders were persistent issues.</li>
              <li>Customer support resolution processes were deemed slow and ineffective.</li>
            </ul>

            <h2>Recommendations</h2>
            <ul>
              <li>Publicly clarify realistic delivery timelines with users.</li>
              <li>Improve app stability through rigorous testing and bug fixes.</li>
              <li>Enhance delivery logistics coordination.</li>
              <li>Revamp customer support with faster response and resolution mechanisms.</li>
              <li>Monitor user feedback continuously to address emerging issues.</li>
            </ul>

            <h2>Conclusion</h2>
            <p>The fall in ratings was due to a combination of unrealistic marketing promises and operational challenges. Addressing these holistically will rebuild user trust and improve the Swiggy app's rating on app stores.</p>

            <div className="article-tags">
              <span className="article-tag">Root Cause Analysis</span>
              <span className="article-tag">Problem Solving</span>
              <span className="article-tag">Data Analysis</span>
              <span className="article-tag">Product Quality</span>
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
