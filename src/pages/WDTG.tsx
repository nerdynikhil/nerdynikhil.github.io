import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function WDTG() {
  const features = [
    {
      icon: '⏱️',
      title: 'Simple Time Logging',
      description:
        'Log activities in seconds. Choose from smart defaults or create custom categories. Track your time effortlessly.',
    },
    {
      icon: '📊',
      title: 'Beautiful Visualizations',
      description:
        'Interactive pie charts and year dots reveal your patterns. See where your time goes at a glance.',
    },
    {
      icon: '☁️',
      title: 'iCloud Sync',
      description:
        'Automatic sync across all your devices. Your data follows you everywhere, always up to date.',
    },
    {
      icon: '📈',
      title: 'Insights & Trends',
      description:
        'View daily, weekly, monthly, or yearly patterns. Understand your time allocation and build better habits.',
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description:
        'Your data stays private in your iCloud. No tracking, no analytics, no data collection. Just you and your time.',
    },
    {
      icon: '🎨',
      title: 'Smart Categories',
      description:
        '8 thoughtful defaults plus unlimited custom categories. Organize your time the way you want.',
    },
  ]

  return (
    <>
      <SEO
        title="WDTG - Where Did The Time Go?"
        description="Track your time, visualize your life. Simple time tracking with beautiful charts and automatic iCloud sync."
        url="https://www.nerdynikhil.com/wdtg"
      />

      <div className="min-h-screen bg-white font-['-apple-system',BlinkMacSystemFont,'SF_Pro_Display','Segoe_UI',sans-serif] leading-relaxed text-[#1a1a1a]">
        {/* Navigation */}
        <nav className="border-b border-[#e5e5e5] px-10 py-5">
          <div className="mx-auto flex max-w-[1200px] items-center justify-between">
            <div className="text-2xl font-semibold text-[#6366F1]">WDTG</div>
            <div className="hidden md:block">
              <a
                href="#features"
                className="ml-8 font-medium text-[#666] no-underline hover:text-[#6366F1]"
              >
                Features
              </a>
              <a
                href="#privacy"
                className="ml-8 font-medium text-[#666] no-underline hover:text-[#6366F1]"
              >
                Privacy
              </a>
              <Link
                to="/wdtg/support"
                className="ml-8 font-medium text-[#666] no-underline hover:text-[#6366F1]"
              >
                Support
              </Link>
              <Link
                to="/wdtg/privacy"
                className="ml-8 font-medium text-[#666] no-underline hover:text-[#6366F1]"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="mx-auto max-w-[1200px] px-10 py-20 text-center">
          <h1 className="mb-5 text-4xl font-bold text-[#1a1a1a] md:text-[56px]">
            Where Did The Time Go?
          </h1>
          <p className="mb-10 text-lg text-[#666] md:text-2xl">
            Track your time. Visualize your life. Understand your patterns.
          </p>
          <a
            href="#"
            className="inline-block rounded-xl bg-[#6366F1] px-10 py-4 text-lg font-semibold text-white no-underline transition-transform duration-200 hover:-translate-y-0.5"
          >
            📱 Download on App Store
          </a>
          <p className="mt-5 text-[#999]">Coming Soon</p>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-[#f9f9f9] px-10 py-20">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="mb-15 text-center text-3xl font-bold md:text-[42px]">
              Simple. Beautiful. Powerful.
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-[#e5e5e5] bg-white p-8"
                >
                  <div className="mb-4 text-[40px]">{feature.icon}</div>
                  <h3 className="mb-2.5 text-[22px] font-semibold text-[#1a1a1a]">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-[#666]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Section */}
        <section
          id="privacy"
          className="mx-auto max-w-[1200px] px-10 py-20 text-center"
        >
          <h2 className="mb-5 text-3xl font-bold md:text-[42px]">
            Your Data, Your Control
          </h2>
          <p className="mb-8 text-lg text-[#666]">
            All your time entries are stored securely in your private iCloud. We
            never see, collect, or share your data.
          </p>
          <p className="mb-8 text-lg text-[#666]">
            No accounts. No tracking. No analytics. Just simple, private time
            tracking.
          </p>
          <div className="mt-10">
            <Link
              to="/wdtg/privacy"
              className="mx-4 font-medium text-[#6366F1] no-underline hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              to="/wdtg/terms"
              className="mx-4 font-medium text-[#6366F1] no-underline hover:underline"
            >
              Terms of Service
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1a1a1a] px-10 py-10 text-center text-white">
          <p>
            Made with ❤️ by{' '}
            <a
              href="https://nerdynikhil.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6366F1] no-underline hover:underline"
            >
              Nikhil Barik
            </a>
          </p>
          <p className="mt-2.5 text-sm text-[#999]">
            &copy; 2024 Nikhil Barik. All rights reserved.
          </p>
          <p className="mt-5">
            <a
              href="mailto:hello@nerdynikhil.com"
              className="text-[#6366F1] no-underline hover:underline"
            >
              Contact
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}
