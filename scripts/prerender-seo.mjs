// Post-build step: injects real per-route <title>/meta/OG/canonical/JSON-LD tags
// into static HTML files, since react-helmet-async only sets them client-side
// after hydration (invisible to non-JS scrapers like Twitter/LinkedIn/Slack).
//
// The React app still owns the DOM after hydration — this only fixes what
// crawlers and link-preview bots see in the initial response.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')
const siteName = 'Nikhil Barik'
const defaultImage = 'https://www.nerdynikhil.com/images/profilepic.png'

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nikhil Barik',
  alternateName: 'nerdynikhil',
  url: 'https://www.nerdynikhil.com',
  image: 'https://www.nerdynikhil.com/images/profilepic.png',
  sameAs: [
    'https://www.linkedin.com/in/nerdynikhil/',
    'https://github.com/nerdynikhil',
    'https://twitter.com/nerdynikhil',
    'https://www.instagram.com/i.know.nothing_/',
  ],
  jobTitle: 'Product Builder',
  description: 'Solo builder of iOS apps, developer tools, and AI utilities. 18+ products shipped from idea to App Store.',
}

const hustlerDevJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'The Hustler Dev',
  description: 'Curated resources, productivity tools, and essential tech insights for AI Engineers and Software Engineers.',
  url: 'https://www.nerdynikhil.com/thehustlerdev/',
  author: {
    '@type': 'Person',
    name: 'Nikhil Barik',
    url: 'https://www.nerdynikhil.com/',
    sameAs: ['https://www.instagram.com/thehustlerdev/', 'https://twitter.com/nerdynikhil'],
  },
}

const behance2pdfFaqs = [
  {
    q: 'How do I save a Behance project as a PDF?',
    a: 'Install the Behance2PDF Chrome extension, open any project on behance.net, and click the floating "Save as PDF" button. The PDF downloads automatically with the project name.',
  },
  {
    q: 'Is Behance2PDF free?',
    a: 'Yes. Behance2PDF is completely free and open source, with no account, sign-up, or subscription required.',
  },
  {
    q: 'Can I download all the images from a Behance project?',
    a: 'Yes. Alongside PDF export, Behance2PDF can bulk-download every image in a project as a ZIP archive, in its original resolution.',
  },
  {
    q: 'Does it work with all Behance project layouts?',
    a: 'Yes. Behance2PDF is built to handle every Behance project type and layout, including image galleries, text sections, and embedded media.',
  },
  {
    q: 'Does Behance2PDF track my data?',
    a: 'No. Behance2PDF is privacy-first: it runs entirely in your browser, collects no data, and includes no analytics or tracking.',
  },
]

const behance2pdfJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Behance2PDF',
      applicationCategory: 'BrowserApplication',
      operatingSystem: 'Chrome',
      description: 'Free Chrome extension to save any Behance project as a high-quality PDF or download all its images in one click. No account, no tracking.',
      url: 'https://www.nerdynikhil.com/behance2pdf',
      image: 'https://www.nerdynikhil.com/images/behance2pdf/icon1024.png',
      author: { '@type': 'Person', name: 'Nikhil Barik' },
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: behance2pdfFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ],
}

// One entry per route in src/App.tsx. `path: '/'` overwrites dist/index.html directly.
export const routes = [
  { path: '/', title: 'Nikhil Barik — Builder of Products People Use', description: 'Nikhil Barik (nerdynikhil) builds and ships iOS apps, SaaS tools, Chrome extensions, and AI utilities — solo, end to end. 18+ products and counting.', jsonLd: personJsonLd },

  { path: '/behance2pdf', title: 'Behance2PDF — Save Behance Projects as PDF & Download Images (Free Chrome Extension)', description: 'Free Chrome extension to save any Behance project as a high-quality PDF or download all its images in one click. No account, no tracking.', image: 'https://www.nerdynikhil.com/images/behance2pdf/og-image.png', jsonLd: behance2pdfJsonLd },
  { path: '/behance2pdf/privacy', title: 'Privacy Policy - Behance2PDF', description: 'Privacy policy for the Behance2PDF Chrome extension. We do not collect any user data.' },

  { path: '/chattercards', title: 'ChatterCards - Master your IELTS Speaking', description: 'Practice IELTS speaking with smart flashcards. Build confidence and fluency for your IELTS exam.', image: 'https://www.nerdynikhil.com/images/chattercards/phone-hero.png' },
  { path: '/chattercards/privacy', title: 'Privacy Policy - ChatterCards', description: 'Privacy policy for ChatterCards IELTS Speaking practice app. We respect your privacy and do not collect personal data.' },

  { path: '/claude-narrator', title: 'claude-narrator — Real-time narration for Claude Code', description: 'A Claude Code plugin that narrates what Claude is doing in real-time with emoji console output and optional text-to-speech.' },

  { path: '/eta-tube', title: 'EtaTube - Know When Your Video Ends', description: 'A lightweight Chrome extension that shows you exactly when your YouTube video will finish. No tracking, no bloat.', image: 'https://www.nerdynikhil.com/images/eta-tube/store-icon-128x128.png' },
  { path: '/eta-tube/privacy', title: 'Privacy Policy - EtaTube', description: 'Privacy policy for EtaTube Chrome extension. We do not collect any user data.' },

  { path: '/faster-udemy', title: 'Faster Udemy - Chrome Extension', description: 'Speed up your Udemy video playback. Adjust playback rate from 0.25x to 5x. Because time is precious.' },
  { path: '/faster-udemy/privacy', title: 'Privacy Policy - Faster Udemy', description: 'Privacy Policy for Faster Udemy Chrome Extension - Learn how we protect your privacy with our local-first, no-tracking approach.' },

  { path: '/lingoduel', title: 'LingoDuel - Master languages through AI-powered conversations', description: 'Practice real-world language scenarios with AI. Restaurant visits, job interviews, shopping - master conversations that matter. Featured in IndieHub Hackathon.', image: 'https://www.nerdynikhil.com/images/lingoduel/hero-image.png' },
  { path: '/lingoduel/privacy', title: 'Privacy Policy - LingoDuel', description: 'Privacy Policy for LingoDuel language learning app.' },

  { path: '/serenight', title: 'Serenight - Your Sleep Tracking Companion', description: 'Transform your sleep with intelligent tracking and insights. Analyze patterns, track quality, and unlock better rest with Apple Health integration.', image: 'https://www.nerdynikhil.com/images/serenight/hero-image.png' },
  { path: '/serenight/privacy', title: 'Privacy Policy - Serenight', description: 'Privacy Policy for Serenight sleep tracking app. Your sleep data stays on your device.' },

  { path: '/subscriptionly', title: 'Subscriptionly - Simple Subscription Management', description: 'A clean and simple subscription management app for iOS. Track all your recurring subscriptions and see your total monthly spending at a glance.', image: 'https://www.nerdynikhil.com/images/subscriptionly/360x360ia.png' },
  { path: '/subscriptionly/privacy', title: 'Privacy Policy - Subscriptionly', description: 'Privacy Policy for Subscriptionly subscription management app.' },

  { path: '/truehue', title: 'TrueHue - Master the Art of Color Matching', description: 'Challenge your perception with this addictive color puzzle game. Download TrueHue on the App Store today!', image: 'https://www.nerdynikhil.com/images/truehue/TrueHue.png' },
  { path: '/truehue/privacy', title: 'Privacy Policy - TrueHue', description: 'Privacy Policy for TrueHue - Learn how we protect your privacy with our local-first, no-tracking approach to mobile gaming.', image: 'https://www.nerdynikhil.com/images/truehue/TrueHue.png' },

  { path: '/wdtg', title: 'WDTG - Where Did The Time Go?', description: 'Track your time, visualize your life. Simple time tracking with beautiful charts and automatic iCloud sync.' },
  { path: '/wdtg/privacy', title: 'Privacy Policy - WDTG', description: 'Privacy Policy for WDTG (Where Did The Time Go?) - Learn how we handle your data with our privacy-first approach.' },
  { path: '/wdtg/support', title: 'Support - WDTG', description: 'Get help with Where Did The Time Go? - FAQ, contact information, and troubleshooting.' },
  { path: '/wdtg/terms', title: 'Terms of Service - WDTG', description: 'Terms of Service for WDTG (Where Did The Time Go?) - Time tracking application terms and conditions.' },

  { path: '/thehustlerdev', title: 'The Hustler Dev - Tips & Resources for Software Engineers', description: 'Curated resources, productivity tools, and essential tech insights for AI Engineers and Software Engineers. From tech stack selection to design patterns, level up your development journey.', jsonLd: hustlerDevJsonLd },
  { path: '/thehustlerdev/resources/tech-stack-picker-2025', title: 'Tech Stack Picker 2025 — The Hustler Dev Edition', description: 'Private checklist used by 200+ founders & CTOs to pick the perfect tech stack in 2025. Save 200+ hours of research.' },
  { path: '/thehustlerdev/resources/5-essential-leetcode-patterns', title: '5 Essential LeetCode Patterns for Technical Interviews - The Hustler Dev', description: 'Master these 5 essential LeetCode patterns to ace your technical interviews and improve your problem-solving skills.' },
  { path: '/thehustlerdev/resources/5-design-patterns-that-changed-my-code-quality', title: '5 Design Patterns That Changed My Code Quality - The Hustler Dev', description: 'Master these 5 essential design patterns to write cleaner, more maintainable, and scalable code. Learn the Observer, Factory, Singleton, Strategy, and Adapter patterns with practical JavaScript examples.' },
  { path: '/thehustlerdev/resources/ai-productivity-toolkit', title: "AI Engineer's Productivity Toolkit - The Hustler Dev", description: 'Essential tools that help AI Engineers stay efficient while keeping costs in check.' },

  { path: '/blog', title: 'Blog - nerdynikhil', description: 'Blog articles by Nikhil Barik - Product Design, UX, Case Studies' },
  { path: '/blog/blinkit-app-notification-product-teardown', title: 'Blinkit: App Notification Product Teardown - nerdynikhil', description: 'Blinkit: App Notification Product Teardown' },
  { path: '/blog/case-study-growing-zomato-quality-reviews', title: 'Case Study: Growing Zomato with Quality Reviews - nerdynikhil', description: 'Case Study: Growing Zomato with Quality Reviews' },
  { path: '/blog/google-smart-shoes-product-metrics-goals', title: 'Google Smart Shoes - Product Metrics and Goals - nerdynikhil', description: 'Google Smart Shoes - Product Metrics and Goals' },
  { path: '/blog/prd-increasing-zomato-text-reviews', title: 'PRD: Increasing Zomato Text Reviews - nerdynikhil', description: 'PRD: Increasing Zomato Text Reviews' },
  { path: '/blog/secondary-research-food-delivery-industry-india', title: 'Secondary Research on Food Delivery Industry in India - nerdynikhil', description: 'Secondary Research on Food Delivery Industry in India' },
  { path: '/blog/smytten-referral-program-teardown', title: 'Smytten Referral Program Teardown - nerdynikhil', description: 'Smytten Referral Program Teardown' },
  { path: '/blog/swiggy-dabba-customized-meal-plans', title: 'Swiggy - Dabba: Customized Weekly and Monthly Meal Plans - nerdynikhil', description: 'Swiggy - Dabba: Customized Weekly and Monthly Meal Plans' },
  { path: '/blog/swiggy-enhancing-customer-loyalty-retention', title: 'Swiggy - Enhancing Customer Loyalty and Retention - nerdynikhil', description: 'Swiggy - Enhancing Customer Loyalty and Retention' },
  { path: '/blog/swiggy-root-cause-analysis-play-store-rating-drop', title: 'Swiggy - Root Cause Analysis for Play Store Rating Drop - nerdynikhil', description: 'Swiggy - Root Cause Analysis for Play Store Rating Drop' },
]

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function buildHead(route) {
  const url = `https://www.nerdynikhil.com${route.path === '/' ? '/' : route.path}`
  const image = route.image || defaultImage
  const title = escapeHtml(route.title)
  const description = escapeHtml(route.description)

  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:site_name" content="${escapeHtml(siteName)}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:site" content="@nerdynikhil" />`,
    `<meta name="twitter:creator" content="@nerdynikhil" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ]

  if (route.jsonLd) {
    tags.push(`<script type="application/ld+json">${JSON.stringify(route.jsonLd)}</script>`)
  }

  return tags.join('\n    ')
}

function run() {
  const templatePath = join(distDir, 'index.html')
  const template = readFileSync(templatePath, 'utf8')

  for (const route of routes) {
    const html = template.replace(
      /<title>.*?<\/title>/s,
      `${buildHead(route)}`,
    )

    if (route.path === '/') {
      writeFileSync(templatePath, html)
      continue
    }

    const outDir = join(distDir, route.path.slice(1))
    mkdirSync(outDir, { recursive: true })
    writeFileSync(join(outDir, 'index.html'), html)
  }

  console.log(`prerender-seo: injected SEO tags into ${routes.length} route(s)`)
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  run()
}
