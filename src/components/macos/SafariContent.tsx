import { useNavigate } from "react-router-dom"

// --- Blog data (mirrors BlogIndex.tsx) ---

const articles = [
  {
    slug: "prd-increasing-zomato-text-reviews",
    title: "PRD: Increasing Zomato Text Reviews",
    meta: "Product Requirements Document",
    excerpt:
      "This project tackles the challenge of boosting quality text reviews within Zomato's Food Delivery segment. Includes Speech-to-Text reviews, AI tag generation, and UX improvements.",
    tags: ["PRD", "Product Strategy", "User Research"],
  },
  {
    slug: "case-study-growing-zomato-quality-reviews",
    title: "Case Study: Growing Zomato with Quality Reviews",
    meta: "Case Study",
    excerpt:
      "Analyze how increasing the quantity and credibility of text reviews in the food delivery vertical can drive business outcomes for Zomato.",
    tags: ["Case Study", "User Research", "Business Strategy"],
  },
  {
    slug: "smytten-referral-program-teardown",
    title: "Smytten Referral Program Teardown",
    meta: "Product Teardown",
    excerpt:
      "A deep dive into Smytten's referral program mechanics, user personas, journey mapping, and success metrics.",
    tags: ["Product Teardown", "Growth Strategy"],
  },
  {
    slug: "blinkit-app-notification-product-teardown",
    title: "Blinkit: App Notification Product Teardown",
    meta: "Product Teardown",
    excerpt:
      "Analysis of Blinkit's notification system that drives engagement through personalized deals, reminders, and feedback requests.",
    tags: ["Product Teardown", "Engagement Strategy"],
  },
  {
    slug: "swiggy-root-cause-analysis-play-store-rating-drop",
    title: "Swiggy - Root Cause Analysis for Play Store Rating Drop",
    meta: "Root Cause Analysis",
    excerpt:
      "Analysis of Swiggy's Play Store rating drop from 4.5 to 3.8 stars within two weeks. Identifies root causes including unrealistic marketing promises.",
    tags: ["Root Cause Analysis", "Data Analysis"],
  },
  {
    slug: "swiggy-enhancing-customer-loyalty-retention",
    title: "Swiggy - Enhancing Customer Loyalty and Retention",
    meta: "Product Strategy",
    excerpt:
      "Strategies to increase customer loyalty and retention for Swiggy's food delivery segment. Includes user personas and pain points.",
    tags: ["Retention Strategy", "Product Strategy"],
  },
  {
    slug: "secondary-research-food-delivery-industry-india",
    title: "Secondary Research on Food Delivery Industry in India",
    meta: "Industry Research",
    excerpt:
      "Comprehensive research on food delivery trends in India for 2023, including tech giants entering the market and subscription models.",
    tags: ["Industry Research", "Market Analysis"],
  },
  {
    slug: "google-smart-shoes-product-metrics-goals",
    title: "Google Smart Shoes - Product Metrics and Goals",
    meta: "Product Metrics",
    excerpt:
      "Comprehensive product metrics framework for Google Smart Shoes including North Star metrics, KPIs, and guardrail metrics.",
    tags: ["Product Metrics", "KPIs"],
  },
  {
    slug: "swiggy-dabba-customized-meal-plans",
    title: "Swiggy - Dabba: Customized Weekly and Monthly Meal Plans",
    meta: "Product Feature",
    excerpt:
      "Feature proposal for Swiggy's Dabba service allowing users to book weekly or monthly meal plans and pre-order customized food items.",
    tags: ["Feature Development", "Product Innovation"],
  },
]

// --- Badge color map ---

const META_COLORS: Record<string, string> = {
  "Product Requirements Document":
    "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  "Case Study":
    "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  "Product Teardown":
    "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  "Root Cause Analysis":
    "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  "Product Strategy":
    "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  "Industry Research":
    "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300",
  "Product Metrics":
    "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
  "Product Feature":
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
}

// --- Component ---

export default function SafariContent() {
  const navigate = useNavigate()

  return (
    <div className="flex h-full flex-col bg-white dark:bg-[#1c1c1e]">
      {/* Safari toolbar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-200 dark:border-white/10 bg-gray-100/80 dark:bg-[#2c2c2e]">
        {/* Back / Forward */}
        <div className="flex gap-1">
          <button
            type="button"
            className="w-7 h-7 rounded flex items-center justify-center text-gray-400 dark:text-gray-500"
            disabled
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            className="w-7 h-7 rounded flex items-center justify-center text-gray-400 dark:text-gray-500"
            disabled
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* URL bar */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center gap-2 w-full max-w-md px-3 py-1 rounded-lg bg-gray-200/80 dark:bg-white/8 text-xs text-gray-500 dark:text-gray-400">
            {/* Lock icon */}
            <svg
              className="w-3 h-3 text-gray-400 dark:text-gray-500 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="truncate">nerdynikhil.com/blog</span>
          </div>
        </div>

        {/* Share button (decorative) */}
        <button
          type="button"
          className="w-7 h-7 rounded flex items-center justify-center text-gray-400 dark:text-gray-500"
          disabled
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"
            />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" y1="2" x2="12" y2="15" />
          </svg>
        </button>
      </div>

      {/* Page content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-6 py-6">
          {/* Page header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              Blog
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Articles on product design, user experience, and case studies
            </p>
          </div>

          {/* Blog cards */}
          <div className="flex flex-col gap-4">
            {articles.map((article) => (
              <button
                key={article.slug}
                type="button"
                onClick={() => navigate(`/blog/${article.slug}`)}
                className={[
                  "text-left p-4 rounded-xl border transition-all duration-150",
                  "border-gray-200 dark:border-white/10",
                  "bg-gray-50/50 dark:bg-white/3",
                  "hover:border-blue-300 dark:hover:border-blue-500/50",
                  "hover:shadow-sm hover:bg-white dark:hover:bg-white/5",
                  "cursor-default group",
                ].join(" ")}
              >
                {/* Type badge */}
                <span
                  className={[
                    "inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide mb-2",
                    META_COLORS[article.meta] ||
                      "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
                  ].join(" ")}
                >
                  {article.meta}
                </span>

                {/* Title */}
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/8 text-gray-500 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
