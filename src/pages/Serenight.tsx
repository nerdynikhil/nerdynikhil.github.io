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
    <div style={{ minHeight: '100vh', background: 'var(--cream)', color: 'var(--text)' }}>
      <SEO
        title="Serenight - Your Sleep Tracking Companion"
        description="Transform your sleep with intelligent tracking and insights. Analyze patterns, track quality, and unlock better rest with Apple Health integration."
        url="https://www.nerdynikhil.com/serenight"
        image="https://www.nerdynikhil.com/images/serenight/hero-image.png"
      />

      {/* Navigation */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, background: 'rgba(254,252,248,0.9)', backdropFilter: 'blur(16px)', borderBottom: '1px solid var(--border)', zIndex: 50 }}>
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
          <div style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-muted)' }} className="flex items-center gap-2 text-lg">
            <img src="/images/serenight/logo.png" alt="Serenight Logo" className="w-8 h-8 rounded-lg object-cover" />
            <span>Serenight</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" style={{ color: 'var(--text-faint)' }} className="text-sm font-medium no-underline">Features</a>
            <a href="#screenshots" style={{ color: 'var(--text-faint)' }} className="text-sm font-medium no-underline">Screenshots</a>
            <a href="#privacy" style={{ color: 'var(--text-faint)' }} className="text-sm font-medium no-underline">Privacy</a>
            <a
              href="#download"
              style={{ background: 'var(--text-muted)', borderRadius: 'var(--radius-btn)' }}
              className="text-sm font-semibold text-white no-underline px-4 py-2 hover:-translate-y-px transition-all"
            >
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ paddingTop: '8rem' }} className="pb-20">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="text-center lg:text-left">
            <p className="section-label mb-4">iOS App</p>
            <h1
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: 'var(--text-muted)' }}
              className="text-4xl sm:text-5xl leading-tight mb-6"
            >
              Sleep smart, live bright with <em className="italic">Serenight</em>
            </h1>
            <p style={{ color: 'var(--text-faint)' }} className="text-xl mb-10 leading-relaxed">
              Transform your sleep with intelligent tracking and personalized insights.
              Analyze your patterns, understand your quality, and unlock the secrets
              to better rest using your Apple Health data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center lg:justify-start">
              <a
                href="https://apps.apple.com/in/app/images/serenight/id6752668596"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: 'var(--text-muted)', borderRadius: 'var(--radius-btn)', boxShadow: '0 4px 20px rgba(28,25,23,0.12)' }}
                className="inline-flex items-center gap-2 text-white px-6 py-4 no-underline font-semibold text-base hover:-translate-y-0.5 transition-all"
              >
                <span className="text-lg">{'\u{1F4F1}'}</span>
                Download on App Store
              </a>
              <a
                href="#features"
                style={{ background: '#fff', color: 'var(--text-muted)', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-btn)' }}
                className="inline-flex items-center gap-2 px-6 py-4 no-underline font-semibold text-base hover:-translate-y-0.5 transition-all"
              >
                <span className="text-lg">{'✨'}</span>
                Explore Features
              </a>
            </div>
            <div className="flex gap-10 justify-center lg:justify-start">
              <div className="text-left">
                <div style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-heading)' }} className="text-2xl mb-1">24/7</div>
                <div style={{ color: 'var(--text-faint)' }} className="text-sm font-medium">Sleep Monitoring</div>
              </div>
              <div className="text-left">
                <div style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-heading)' }} className="text-2xl mb-1">AI</div>
                <div style={{ color: 'var(--text-faint)' }} className="text-sm font-medium">Powered Insights</div>
              </div>
              <div className="text-left">
                <div style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-heading)' }} className="text-2xl mb-1">100%</div>
                <div style={{ color: 'var(--text-faint)' }} className="text-sm font-medium">Privacy First</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center relative">
            <div className="relative">
              <img
                src="/images/serenight/hero-image.png"
                alt="Serenight App Welcome Screen"
                className={`max-w-[280px] h-auto rounded-3xl shadow-[0_25px_50px_rgba(28,25,23,0.15)] transition-all duration-700 ease-out ${
                  isVisible('hero-phone')
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="section-label mb-4">What It Does</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: 'var(--text-muted)' }} className="text-3xl sm:text-4xl mb-4 leading-snug">
              Everything you need for <em className="italic">better sleep</em>
            </h2>
            <p style={{ color: 'var(--text-faint)' }} className="text-lg max-w-xl mx-auto leading-relaxed">
              Serenight combines advanced analytics with beautiful design to give you
              unprecedented insights into your sleep patterns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureCards.map((feature, index) => (
              <div
                key={index}
                ref={addRef(`feature-${index}`)}
                style={{ background: 'var(--cream-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-card)' }}
                className={`p-8 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,25,23,0.08)] transition-all duration-300 ${
                  isVisible(`feature-${index}`)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <span className="text-3xl block mb-5">{feature.icon}</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: 'var(--text-muted)' }} className="text-xl mb-3">{feature.title}</h3>
                <p style={{ color: 'var(--text-faint)' }} className="text-base leading-relaxed mb-5">{feature.description}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.highlights.map((h, i) => (
                    <span
                      key={i}
                      style={{ border: '1px solid var(--border-strong)', color: 'var(--text-faint)' }}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                    >
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
      <section id="screenshots" style={{ background: 'var(--cream-dark)' }} className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="section-label mb-4">A Closer Look</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: 'var(--text-muted)' }} className="text-3xl sm:text-4xl mb-4 leading-snug">
              See your sleep <em className="italic">like never before</em>
            </h2>
            <p style={{ color: 'var(--text-faint)' }} className="text-lg max-w-xl mx-auto leading-relaxed">
              From comprehensive dashboards to detailed analytics, every screen is
              designed to help you understand and improve your sleep.
            </p>
          </div>

          <div className="flex flex-col gap-20">
            {screenshots.map((shot, index) => (
              <div
                key={index}
                ref={addRef(`screenshot-${index}`)}
                style={{ background: 'var(--cream-card)', borderRadius: 'var(--radius-card)', border: '1px solid var(--border)' }}
                className={`p-8 sm:p-10 transition-all duration-700 ease-out ${
                  isVisible(`screenshot-${index}`)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-center ${
                  shot.reverse ? 'lg:grid-cols-[300px_1fr]' : ''
                }`}>
                  <div className={shot.reverse ? 'lg:order-2 text-center lg:text-left' : 'text-center lg:text-left'}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: 'var(--text-muted)' }} className="text-2xl mb-4">{shot.title}</h3>
                    <p style={{ color: 'var(--text-faint)' }} className="text-base leading-relaxed mb-5">{shot.description}</p>
                    <ul className="list-none p-0">
                      {shot.bullets.map((bullet, i) => (
                        <li key={i} style={{ color: 'var(--text-faint)', borderBottom: '1px solid var(--border)' }} className="text-sm py-2 relative pl-5">
                          <span style={{ position: 'absolute', left: 0, color: 'var(--text-muted)', fontWeight: 600 }}>{'✓'}</span>
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
                      className="max-w-full h-auto rounded-2xl shadow-[0_8px_30px_rgba(28,25,23,0.12)]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="section-label mb-4">How It Works</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: 'var(--text-muted)' }} className="text-3xl sm:text-4xl mb-4 leading-snug">
              How <em className="italic">Serenight</em> works
            </h2>
            <p style={{ color: 'var(--text-faint)' }} className="text-lg max-w-xl mx-auto leading-relaxed">
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
                <div style={{ background: 'var(--text-muted)', fontFamily: 'var(--font-heading)' }} className="w-16 h-16 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                  {step.number}
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: 'var(--text-muted)' }} className="text-xl mb-3">{step.title}</h3>
                <p style={{ color: 'var(--text-faint)' }} className="text-base leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" style={{ background: 'var(--cream-dark)' }} className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="text-center lg:text-left">
              <p className="section-label mb-4">Privacy</p>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: 'var(--text-muted)' }} className="text-3xl sm:text-4xl mb-4 leading-snug">
                Your data, <em className="italic">your device</em>
              </h2>
              <p style={{ color: 'var(--text-faint)' }} className="text-lg leading-relaxed mb-10">
                Privacy isn&apos;t just a feature&mdash;it&apos;s fundamental to how Serenight works.
                Your sleep data is analyzed locally on your device and never transmitted
                to external servers.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">{'\u{1F4F1}'}</span>
                  <div>
                    <h4 style={{ color: 'var(--text-muted)' }} className="text-lg font-semibold mb-2">Local Processing</h4>
                    <p style={{ color: 'var(--text-faint)' }} className="text-sm leading-normal">All analysis happens on your device using on-device AI processing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">{'\u{1F510}'}</span>
                  <div>
                    <h4 style={{ color: 'var(--text-muted)' }} className="text-lg font-semibold mb-2">No Data Collection</h4>
                    <p style={{ color: 'var(--text-faint)' }} className="text-sm leading-normal">We don&apos;t collect, store, or transmit your personal sleep information.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">{'⚡'}</span>
                  <div>
                    <h4 style={{ color: 'var(--text-muted)' }} className="text-lg font-semibold mb-2">HealthKit Integration</h4>
                    <p style={{ color: 'var(--text-faint)' }} className="text-sm leading-normal">Secure access to your data through Apple&apos;s privacy-first HealthKit framework.</p>
                  </div>
                </div>
              </div>

              <Link to="/serenight/privacy" style={{ color: 'var(--text-muted)' }} className="no-underline font-semibold text-base hover:underline">
                Read our full Privacy Policy &rarr;
              </Link>
            </div>

            <div className="flex justify-center items-center">
              <div style={{ border: '3px solid var(--border-strong)', background: 'var(--cream-card)', borderRadius: 'var(--radius-card)' }} className="w-48 h-72 flex items-center justify-center">
                <span className="text-5xl">{'\u{1F6E1}️'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: 'var(--text-muted)' }} className="text-3xl sm:text-4xl mb-4 leading-snug">
            Ready to transform <em className="italic">your sleep?</em>
          </h2>
          <p style={{ color: 'var(--text-faint)' }} className="text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Join thousands of users who have discovered the power of intelligent sleep tracking.
            Download Serenight and start your journey to better rest tonight.
          </p>

          <div className="my-10">
            <a
              href="https://apps.apple.com/in/app/images/serenight/id6752668596"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: 'var(--text-muted)', borderRadius: 'var(--radius-btn)', boxShadow: '0 4px 20px rgba(28,25,23,0.15)' }}
              className="inline-flex items-center gap-2 text-white px-8 py-5 no-underline font-semibold text-lg hover:-translate-y-0.5 transition-all"
            >
              <span className="text-lg">{'\u{1F34E}'}</span>
              Download on App Store
            </a>
          </div>

          <p style={{ color: 'var(--text-faint)' }} className="text-sm mt-8">
            Requires iOS 15.0 or later &bull; Compatible with iPhone and iPad &bull; Apple Health integration required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border)' }} className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ borderBottom: '1px solid var(--border)' }} className="flex flex-col sm:flex-row justify-between items-center mb-10 pb-10">
            <div style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-muted)' }} className="flex items-center gap-2 text-lg mb-4 sm:mb-0">
              <img src="/images/serenight/logo.png" alt="Serenight Logo" className="w-8 h-8 rounded-lg object-cover" />
              <span>Serenight</span>
            </div>
            <div className="flex gap-8">
              <Link to="/serenight/privacy" style={{ color: 'var(--text-faint)' }} className="no-underline text-sm font-medium">
                Privacy Policy
              </Link>
              <a href="#features" style={{ color: 'var(--text-faint)' }} className="no-underline text-sm font-medium">Features</a>
              <a href="#screenshots" style={{ color: 'var(--text-faint)' }} className="no-underline text-sm font-medium">Screenshots</a>
              <a href="#download" style={{ color: 'var(--text-faint)' }} className="no-underline text-sm font-medium">Download</a>
            </div>
          </div>
          <div className="text-center">
            <p style={{ color: 'var(--text-faint)' }} className="text-sm">&copy; 2024 Serenight. Made with love for better sleep.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
