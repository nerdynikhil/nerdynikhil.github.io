import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const featureCards = [
  {
    icon: '\u{1F4CA}',
    title: 'Comprehensive Analytics',
    description: 'Track sleep efficiency, consistency, duration, and quality with detailed breakdowns and trend analysis over time.',
    highlights: ['Sleep Score', 'Quality Metrics', 'Trend Analysis'],
  },
  {
    icon: '\u{1F916}',
    title: 'AI-Powered Insights',
    description: 'Get personalized recommendations and insights powered by advanced AI that learns from your unique sleep patterns.',
    highlights: ['Smart Analysis', 'Personalized Tips', 'Pattern Recognition'],
  },
  {
    icon: '\u{1F34E}',
    title: 'Apple Health Integration',
    description: 'Seamlessly connects with Apple Health to analyze your existing sleep data without any additional tracking required.',
    highlights: ['HealthKit Sync', 'Auto Import', 'No Manual Entry'],
  },
  {
    icon: '\u{1F4C8}',
    title: 'Visual Sleep Trends',
    description: 'Beautiful charts and graphs that make it easy to understand your sleep patterns and track improvements over weeks and months.',
    highlights: ['Weekly Trends', 'Quality Charts', 'Progress Tracking'],
  },
  {
    icon: '\u{1F512}',
    title: 'Privacy by Design',
    description: 'Your sleep data stays on your device. No cloud storage, no data sharing, just secure local analysis of your personal information.',
    highlights: ['Local Storage', 'No Cloud Sync', 'Full Control'],
  },
  {
    icon: '\u{1F3A8}',
    title: 'Beautiful Interface',
    description: 'Enjoy a clean, intuitive design that makes exploring your sleep data both informative and delightful.',
    highlights: ['Dark Mode', 'Smooth Animations', 'Intuitive Design'],
  },
]

const screenshots = [
  {
    title: 'Dashboard Overview',
    description: 'Get a complete picture of your sleep health with our comprehensive dashboard featuring your AI companion.',
    bullets: ['Sleep quality metrics', 'Weekly trends', 'Quick stats', 'Personalized insights'],
    image: '/images/serenight/dashboard-view.png',
    alt: 'Sleep Dashboard',
    reverse: false,
  },
  {
    title: 'Detailed Analytics',
    description: 'Dive deep into your sleep patterns with comprehensive analytics and quality breakdowns.',
    bullets: ['Sleep efficiency tracking', 'Consistency monitoring', 'Duration analysis', 'Quality scoring'],
    image: '/images/serenight/analytics-view.png',
    alt: 'Sleep Analytics',
    reverse: true,
  },
  {
    title: 'Quality Breakdown',
    description: 'Understand exactly how well you\'re sleeping with detailed quality metrics and personalized feedback.',
    bullets: ['Overall quality score', 'Efficiency percentage', 'Sleep debt tracking', 'Consistency analysis'],
    image: '/images/serenight/quality-breakdown.png',
    alt: 'Quality Breakdown',
    reverse: false,
  },
  {
    title: 'Trend Analysis',
    description: 'Visualize your sleep patterns over time with beautiful charts and identify improvement opportunities.',
    bullets: ['Quality trend charts', 'Sleep debt visualization', 'AI-powered insights', 'Pattern recognition'],
    image: '/images/serenight/trends-view.png',
    alt: 'Sleep Trends',
    reverse: true,
  },
]

const steps = [
  { number: 1, title: 'Connect to Apple Health', description: 'Grant Serenight permission to read your sleep data from Apple Health. Your data never leaves your device.' },
  { number: 2, title: 'Automatic Analysis', description: 'Our AI immediately analyzes your historical sleep data to identify patterns and calculate quality metrics.' },
  { number: 3, title: 'Get Insights', description: 'Receive personalized insights, track your progress, and discover ways to improve your sleep quality.' },
]

export default function Serenight() {
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  const addRef = (id: string) => (el: HTMLElement | null) => {
    if (el && observerRef.current) {
      el.dataset.animId = id
      observerRef.current.observe(el)
    }
  }

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).dataset.animId
            if (id) {
              setAnimatedElements((prev) => new Set(prev).add(id))
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    return () => observerRef.current?.disconnect()
  }, [])

  // Hero phone animation on mount
  useEffect(() => {
    setTimeout(() => {
      setAnimatedElements((prev) => new Set(prev).add('hero-phone'))
    }, 500)
  }, [])

  const isVisible = (id: string) => animatedElements.has(id)

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-['Inter',system-ui,'-apple-system','BlinkMacSystemFont','Segoe_UI',sans-serif] leading-relaxed font-normal">
      <SEO
        title="Serenight - Your Sleep Tracking Companion"
        description="Transform your sleep with intelligent tracking and insights. Analyze patterns, track quality, and unlock better rest with Apple Health integration."
        url="https://www.nerdynikhil.com/serenight"
        image="https://www.nerdynikhil.com/images/serenight/hero-image.png"
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-b border-gray-200 z-50">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2 font-semibold text-lg text-[#1a1a1a]">
            <img src="/images/serenight/logo.png" alt="Serenight Logo" className="w-8 h-8 rounded-lg object-cover" />
            <span>Serenight</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-500 no-underline hover:text-[#1a1a1a] transition-colors">Features</a>
            <a href="#screenshots" className="text-sm font-medium text-gray-500 no-underline hover:text-[#1a1a1a] transition-colors">Screenshots</a>
            <a href="#privacy" className="text-sm font-medium text-gray-500 no-underline hover:text-[#1a1a1a] transition-colors">Privacy</a>
            <a
              href="#download"
              className="text-sm font-semibold text-white no-underline bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 hover:-translate-y-px transition-all"
            >
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 text-[#1a1a1a]">
              <span className="bg-gradient-to-br from-blue-500 to-violet-500 bg-clip-text text-transparent">Sleep smart,</span>
              <br />
              live bright with
              <br />
              <span className="text-blue-600">Serenight</span>
            </h1>
            <p className="text-xl text-gray-500 mb-10 leading-relaxed">
              Transform your sleep with intelligent tracking and personalized insights.
              Analyze your patterns, understand your quality, and unlock the secrets
              to better rest using your Apple Health data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center lg:justify-start">
              <a
                href="https://apps.apple.com/in/app/images/serenight/id6752668596"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-4 rounded-xl no-underline font-semibold text-base hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-[0_4px_12px_rgba(37,99,235,0.2)]"
              >
                <span className="text-lg">{'\u{1F4F1}'}</span>
                Download on App Store
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 bg-white text-gray-500 px-6 py-4 rounded-xl no-underline font-semibold text-base border border-gray-200 hover:bg-gray-50 hover:text-[#1a1a1a] hover:-translate-y-0.5 transition-all"
              >
                <span className="text-lg">{'\u2728'}</span>
                Explore Features
              </a>
            </div>
            <div className="flex gap-10 justify-center lg:justify-start">
              <div className="text-left">
                <div className="text-2xl font-bold text-[#1a1a1a] mb-1">24/7</div>
                <div className="text-sm text-gray-500 font-medium">Sleep Monitoring</div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-[#1a1a1a] mb-1">AI</div>
                <div className="text-sm text-gray-500 font-medium">Powered Insights</div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-[#1a1a1a] mb-1">100%</div>
                <div className="text-sm text-gray-500 font-medium">Privacy First</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center relative">
            <div className="relative">
              <img
                src="/images/serenight/hero-image.png"
                alt="Serenight App Welcome Screen"
                className={`max-w-[280px] h-auto rounded-3xl shadow-[0_25px_50px_rgba(0,0,0,0.15)] transition-all duration-700 ease-out ${
                  isVisible('hero-phone')
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              />
              <div className="absolute -inset-5 bg-gradient-to-br from-blue-500 to-violet-500 rounded-[44px] opacity-10 -z-10 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4 leading-snug">
              Everything you need for better sleep
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
              Serenight combines advanced analytics with beautiful design to give you
              unprecedented insights into your sleep patterns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureCards.map((feature, index) => (
              <div
                key={index}
                ref={addRef(`feature-${index}`)}
                className={`bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:border-slate-300 transition-all duration-300 ${
                  isVisible(`feature-${index}`)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isVisible(`feature-${index}`) ? `${(index % 3) * 100}ms` : '0ms' }}
              >
                <span className="text-3xl block mb-5">{feature.icon}</span>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3">{feature.title}</h3>
                <p className="text-base text-gray-500 leading-relaxed mb-5">{feature.description}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.highlights.map((h, i) => (
                    <span key={i} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4 leading-snug">
              See your sleep like never before
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
              From comprehensive dashboards to detailed analytics, every screen is
              designed to help you understand and improve your sleep.
            </p>
          </div>

          <div className="flex flex-col gap-20">
            {screenshots.map((shot, index) => (
              <div
                key={index}
                ref={addRef(`screenshot-${index}`)}
                className={`bg-white rounded-2xl p-8 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-700 ease-out ${
                  isVisible(`screenshot-${index}`)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-center ${
                  shot.reverse ? 'lg:grid-cols-[300px_1fr]' : ''
                }`}>
                  <div className={shot.reverse ? 'lg:order-2 text-center lg:text-left' : 'text-center lg:text-left'}>
                    <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-4">{shot.title}</h3>
                    <p className="text-base text-gray-500 leading-relaxed mb-5">{shot.description}</p>
                    <ul className="list-none p-0">
                      {shot.bullets.map((bullet, i) => (
                        <li key={i} className="text-sm text-gray-500 py-2 border-b border-slate-100 relative pl-5">
                          <span className="absolute left-0 text-emerald-500 font-semibold">{'\u2713'}</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`text-center ${shot.reverse ? 'lg:order-1' : ''}`}>
                    <img
                      src={shot.image}
                      alt={shot.alt}
                      loading="lazy"
                      className="max-w-full h-auto rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4 leading-snug">
              How Serenight works
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
              Getting started is simple. Serenight works with your existing Apple Health data
              to provide instant insights without any setup required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={addRef(`step-${index}`)}
                className={`text-center transition-all duration-700 ease-out ${
                  isVisible(`step-${index}`)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isVisible(`step-${index}`) ? `${index * 150}ms` : '0ms' }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-violet-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-[0_4px_20px_rgba(59,130,246,0.3)]">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3">{step.title}</h3>
                <p className="text-base text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4 leading-snug">
                Your data, your device
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-10">
                Privacy isn&apos;t just a feature&mdash;it&apos;s fundamental to how Serenight works.
                Your sleep data is analyzed locally on your device and never transmitted
                to external servers.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">{'\u{1F4F1}'}</span>
                  <div>
                    <h4 className="text-lg font-semibold text-[#1a1a1a] mb-2">Local Processing</h4>
                    <p className="text-sm text-gray-500 leading-normal">All analysis happens on your device using on-device AI processing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">{'\u{1F510}'}</span>
                  <div>
                    <h4 className="text-lg font-semibold text-[#1a1a1a] mb-2">No Data Collection</h4>
                    <p className="text-sm text-gray-500 leading-normal">We don&apos;t collect, store, or transmit your personal sleep information.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">{'\u26A1'}</span>
                  <div>
                    <h4 className="text-lg font-semibold text-[#1a1a1a] mb-2">HealthKit Integration</h4>
                    <p className="text-sm text-gray-500 leading-normal">Secure access to your data through Apple&apos;s privacy-first HealthKit framework.</p>
                  </div>
                </div>
              </div>

              <Link to="/serenight/privacy" className="text-blue-600 no-underline font-semibold text-base hover:text-blue-700 transition-colors">
                Read our full Privacy Policy &rarr;
              </Link>
            </div>

            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="w-48 h-72 border-[3px] border-slate-200 rounded-2xl bg-white flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
                  <span className="text-5xl animate-bounce">{'\u{1F6E1}\uFE0F'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 bg-gradient-to-br from-slate-800 to-slate-600 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-snug">
            Ready to transform your sleep?
          </h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto leading-relaxed mb-10">
            Join thousands of users who have discovered the power of intelligent sleep tracking.
            Download Serenight and start your journey to better rest tonight.
          </p>

          <div className="my-10">
            <a
              href="https://apps.apple.com/in/app/images/serenight/id6752668596"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-5 rounded-xl no-underline font-semibold text-lg hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-[0_8px_25px_rgba(37,99,235,0.3)]"
            >
              <span className="text-lg">{'\u{1F34E}'}</span>
              Download on App Store
            </a>
          </div>

          <p className="text-sm text-slate-400 mt-8">
            Requires iOS 15.0 or later &bull; Compatible with iPhone and iPad &bull; Apple Health integration required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 pb-10 border-b border-gray-700">
            <div className="flex items-center gap-2 font-semibold text-lg mb-4 sm:mb-0">
              <img src="/images/serenight/logo.png" alt="Serenight Logo" className="w-8 h-8 rounded-lg object-cover" />
              <span>Serenight</span>
            </div>
            <div className="flex gap-8">
              <Link to="/serenight/privacy" className="text-gray-400 no-underline text-sm font-medium hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <a href="#features" className="text-gray-400 no-underline text-sm font-medium hover:text-white transition-colors">Features</a>
              <a href="#screenshots" className="text-gray-400 no-underline text-sm font-medium hover:text-white transition-colors">Screenshots</a>
              <a href="#download" className="text-gray-400 no-underline text-sm font-medium hover:text-white transition-colors">Download</a>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">&copy; 2024 Serenight. Made with love for better sleep.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
