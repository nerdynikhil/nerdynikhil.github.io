import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const AppleIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
)

export default function TrueHue() {
  const [navShadow, setNavShadow] = useState(false)
  const [navHidden, setNavHidden] = useState(false)
  const lastScrollY = useRef(0)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY
    setNavShadow(currentY > 100)
    setNavHidden(currentY > lastScrollY.current && currentY > 200)
    lastScrollY.current = currentY
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Intersection Observer for fade-in animations
  const observerRef = useRef<IntersectionObserver | null>(null)
  const animateRef = useCallback((node: HTMLDivElement | null) => {
    if (!node) return
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => new Set([...prev, entry.target.id]))
              observerRef.current?.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )
    }
    observerRef.current.observe(node)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.offsetTop - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const gameModes = [
    {
      icon: '🎯',
      title: 'Classic Mode',
      description: 'Match colors until you make a mistake - test your precision',
    },
    {
      icon: '⏱️',
      title: 'Chrono Mode',
      description: '30-second speed challenges - race against time',
    },
    {
      icon: '🔍',
      title: 'Find Color Mode',
      description: 'Tap the correct color from a grid - sharpen your skills',
    },
  ]

  const techFeatures = [
    {
      icon: '🏆',
      title: 'Game Center Integration',
      description: 'Compete on leaderboards and unlock achievements',
    },
    {
      icon: '📳',
      title: 'Haptic Feedback',
      description: 'Immersive tactile responses for every interaction',
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Clean, modern interface that adapts to light/dark mode',
    },
    {
      icon: '📱',
      title: 'Offline Gameplay',
      description: 'No internet required - play anywhere, anytime',
    },
  ]

  const screenshots = [
    { src: '/images/truehue/classic-mode.png', alt: 'TrueHue Classic Mode gameplay showing color matching challenge', caption: 'Classic Mode Gameplay' },
    { src: '/images/truehue/chrono-mode.png', alt: 'TrueHue Chrono Mode with 30-second speed challenge', caption: 'Chrono Mode Challenge' },
    { src: '/images/truehue/find-color-mode.png', alt: 'TrueHue Find Color Mode with color grid selection', caption: 'Find Color Mode' },
    { src: '/images/truehue/gameplay-detail.png', alt: 'TrueHue detailed gameplay showing scoring and achievements', caption: 'Game Details & Scoring' },
  ]

  const techHighlights = [
    { icon: '⚡', title: 'SwiftUI', description: 'Built with SwiftUI for iOS 15+' },
    { icon: '📐', title: 'Universal App', description: 'Optimized for all iPhone and iPad sizes' },
    { icon: '💾', title: 'Offline First', description: 'Local score tracking and achievements' },
  ]

  return (
    <>
      <SEO
        title="TrueHue - Master the Art of Color Matching"
        description="Challenge your perception with this addictive color puzzle game. Download TrueHue on the App Store today!"
        url="https://www.nerdynikhil.com/truehue"
        image="https://www.nerdynikhil.com/images/truehue/TrueHue.png"
      />

      <div style={{ background: 'var(--cream)', color: 'var(--text)' }} className="overflow-x-hidden">
        {/* Navigation */}
        <nav
          style={{ background: 'rgba(254,252,248,0.95)', borderBottom: '1px solid var(--border)', backdropFilter: 'blur(10px)' }}
          className={`fixed top-0 right-0 left-0 z-[1000] transition-all duration-300 ${
            navShadow ? 'shadow-md' : ''
          } ${navHidden ? '-translate-y-full' : 'translate-y-0'}`}
        >
          <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
            <div className="flex items-center gap-3">
              <img
                src="/images/truehue/TrueHue.png"
                alt="TrueHue Logo"
                className="h-8 w-8 rounded-lg object-contain transition-transform duration-150 hover:scale-105"
              />
              <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-muted)' }} className="text-lg">TrueHue</span>
            </div>
            <div className="hidden gap-8 md:flex">
              {['features', 'screenshots', 'download'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  style={{ color: 'var(--text-faint)' }}
                  className="relative cursor-pointer border-none bg-transparent font-medium capitalize transition-colors duration-150 hover:opacity-70"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section style={{ paddingTop: '8rem' }} className="relative flex min-h-[80vh] items-center overflow-hidden pb-20">
          <div className="relative z-[2] mx-auto max-w-[1200px] px-6">
            <div className="grid items-center gap-16 md:grid-cols-2">
              {/* Hero Text */}
              <div className="text-center md:text-left">
                <p className="section-label mb-4">iOS App</p>
                <h1
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: 'var(--text-muted)' }}
                  className="mb-4 text-4xl leading-tight sm:text-5xl lg:text-6xl"
                >
                  True<em className="italic">Hue</em>
                </h1>
                <h2 style={{ color: 'var(--text-muted)' }} className="mb-6 text-xl font-medium sm:text-2xl">
                  Master the Art of Color Matching
                </h2>
                <p style={{ color: 'var(--text-faint)' }} className="mb-8 text-lg leading-relaxed sm:text-xl">
                  Challenge your perception with this addictive color puzzle game
                </p>
                <div className="flex flex-col items-center gap-4 md:items-start">
                  <a
                    href="https://apps.apple.com/in/app/truehue-color-match/id6751550382"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: 'var(--text-muted)', color: '#fff', borderRadius: 'var(--radius-btn)', boxShadow: '0 4px 20px rgba(28,25,23,0.12)' }}
                    className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <AppleIcon />
                    Download on App Store
                  </a>
                  <div style={{ border: '1px solid var(--border-strong)', background: 'var(--cream-card)' }} className="rounded-full px-4 py-2">
                    <span style={{ color: 'var(--text-faint)' }} className="text-sm font-medium">
                      Free to download and play
                    </span>
                  </div>
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="flex items-center justify-center" style={{ perspective: '1000px' }}>
                <div className="w-[200px] rounded-[2rem] bg-[#1A1A1A] p-2 shadow-2xl transition-all duration-500 sm:w-[240px] md:w-[280px] md:h-[560px]" style={{ transform: 'rotateY(-15deg) rotateX(5deg)' }}>
                  <div className="h-full w-full overflow-hidden rounded-3xl bg-white">
                    <img
                      src="/images/truehue/main-menu.png"
                      alt="TrueHue main menu showing game modes"
                      className="h-full w-full rounded-3xl object-cover object-[center_3px]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features / Game Modes Section */}
        <section id="features" style={{ background: 'var(--cream-dark)' }} className="py-32">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="mb-16 text-center">
              <p className="section-label mb-4">Game Modes</p>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: 'var(--text-muted)' }} className="mb-4 text-3xl sm:text-4xl">
                Three ways to <em className="italic">play</em>
              </h2>
              <p style={{ color: 'var(--text-faint)' }} className="mx-auto max-w-[600px] text-lg sm:text-xl">
                Three unique ways to challenge your color perception
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {gameModes.map((mode, i) => (
                <div
                  key={mode.title}
                  id={`feature-${i}`}
                  ref={animateRef}
                  style={{ background: 'var(--cream-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-card)' }}
                  className={`p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,25,23,0.08)] ${
                    visibleSections.has(`feature-${i}`)
                      ? 'animate-[fadeInUp_0.6s_ease-out]'
                      : 'opacity-0'
                  }`}
                >
                  <div style={{ border: '1px solid var(--border-strong)', background: 'var(--cream)' }} className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-[2rem] transition-all duration-300 hover:scale-110">
                    {mode.icon}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: 'var(--text-muted)' }} className="mb-4 text-2xl">
                    {mode.title}
                  </h3>
                  <p style={{ color: 'var(--text-faint)' }} className="leading-relaxed">
                    {mode.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Features Section */}
        <section className="py-32">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="mb-16 text-center">
              <p className="section-label mb-4">Why You'll Love It</p>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: 'var(--text-muted)' }} className="mb-4 text-3xl sm:text-4xl">
                Premium <em className="italic">features</em>
              </h2>
              <p style={{ color: 'var(--text-faint)' }} className="mx-auto max-w-[600px] text-lg sm:text-xl">
                Built for the ultimate gaming experience
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {techFeatures.map((feat, i) => (
                <div
                  key={feat.title}
                  id={`tech-${i}`}
                  ref={animateRef}
                  className={`p-6 text-center ${
                    visibleSections.has(`tech-${i}`)
                      ? 'animate-[fadeInUp_0.6s_ease-out]'
                      : 'opacity-0'
                  }`}
                >
                  <div style={{ border: '1px solid var(--border-strong)', background: 'var(--cream-card)' }} className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg text-2xl transition-all duration-300 hover:scale-110">
                    {feat.icon}
                  </div>
                  <h3 style={{ color: 'var(--text-muted)' }} className="mb-3 text-xl font-semibold">
                    {feat.title}
                  </h3>
                  <p style={{ color: 'var(--text-faint)' }} className="leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section id="screenshots" style={{ background: 'var(--cream-dark)' }} className="py-32">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="mb-16 text-center">
              <p className="section-label mb-4">A Closer Look</p>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: 'var(--text-muted)' }} className="mb-4 text-3xl sm:text-4xl">
                See TrueHue <em className="italic">in action</em>
              </h2>
              <p style={{ color: 'var(--text-faint)' }} className="mx-auto max-w-[600px] text-lg sm:text-xl">
                Experience the vibrant world of color matching
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {screenshots.map((shot, i) => (
                <div
                  key={shot.caption}
                  id={`screenshot-${i}`}
                  ref={animateRef}
                  className={`text-center ${
                    visibleSections.has(`screenshot-${i}`)
                      ? 'animate-[fadeInUp_0.6s_ease-out]'
                      : 'opacity-0'
                  }`}
                >
                  <div className="mx-auto mb-4 h-[400px] w-[200px] rounded-3xl bg-[#1A1A1A] p-1 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      className="h-full w-full rounded-[1.25rem] object-cover object-[center_2px]"
                      loading="lazy"
                    />
                  </div>
                  <p style={{ color: 'var(--text-muted)' }} className="font-semibold">{shot.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Highlights */}
        <section className="py-32">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="mb-16 text-center">
              <p className="section-label mb-4">Under the Hood</p>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: 'var(--text-muted)' }} className="mb-4 text-3xl sm:text-4xl">
                Technical <em className="italic">excellence</em>
              </h2>
              <p style={{ color: 'var(--text-faint)' }} className="mx-auto max-w-[600px] text-lg sm:text-xl">
                Built with modern iOS technologies
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {techHighlights.map((item, i) => (
                <div
                  key={item.title}
                  id={`highlight-${i}`}
                  ref={animateRef}
                  className={`p-6 text-center ${
                    visibleSections.has(`highlight-${i}`)
                      ? 'animate-[fadeInUp_0.6s_ease-out]'
                      : 'opacity-0'
                  }`}
                >
                  <div style={{ border: '1px solid var(--border-strong)', background: 'var(--cream-card)' }} className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg text-2xl transition-all duration-300 hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 style={{ color: 'var(--text-muted)' }} className="mb-3 text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--text-faint)' }} className="leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="download" className="py-24 text-center">
          <div className="mx-auto max-w-[640px] px-6">
            <div style={{ background: 'var(--cream-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-card)' }} className="p-10 sm:p-12">
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: 'var(--text-muted)' }} className="mb-4 text-3xl sm:text-4xl">
                Ready to master <em className="italic">colors?</em>
              </h2>
              <p style={{ color: 'var(--text-faint)' }} className="mb-8 text-lg">
                Download TrueHue today and start your color matching journey
              </p>
              <div className="flex flex-col items-center gap-6">
                <a
                  href="https://apps.apple.com/in/app/truehue-color-match/id6751550382"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: 'var(--text-muted)', color: '#fff', borderRadius: 'var(--radius-btn)', boxShadow: '0 4px 20px rgba(28,25,23,0.12)' }}
                  className="inline-flex items-center gap-3 px-10 py-5 text-xl font-semibold transition-all duration-300 hover:-translate-y-0.5"
                >
                  <AppleIcon />
                  Download on App Store
                </a>
                <div className="flex gap-4">
                  <a
                    href="https://twitter.com/intent/tweet?text=Check%20out%20TrueHue%20-%20Master%20the%20Art%20of%20Color%20Matching!&url=https://truehue.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Twitter"
                    style={{ border: '1px solid var(--border-strong)', color: 'var(--text-muted)' }}
                    className="flex h-12 w-12 items-center justify-center rounded-full transition-all duration-150 hover:-translate-y-0.5"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https://truehue.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                    style={{ border: '1px solid var(--border-strong)', color: 'var(--text-muted)' }}
                    className="flex h-12 w-12 items-center justify-center rounded-full transition-all duration-150 hover:-translate-y-0.5"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ borderTop: '1px solid var(--border)' }} className="pt-16 pb-8">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="mb-8 grid gap-16 md:grid-cols-[1fr_2fr]">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <img
                    src="/images/truehue/TrueHue.png"
                    alt="TrueHue Logo"
                    className="h-8 w-8 rounded-lg object-contain"
                  />
                  <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-muted)' }} className="text-lg">TrueHue</span>
                </div>
                <p style={{ color: 'var(--text-faint)' }} className="leading-relaxed">
                  Master the art of color matching with this addictive puzzle
                  game.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-3">
                <div>
                  <h4 style={{ color: 'var(--text-muted)' }} className="mb-4 text-lg font-semibold">
                    Developer
                  </h4>
                  <p style={{ color: 'var(--text-faint)' }}>
                    Created by <strong style={{ color: 'var(--text-muted)' }}>Nikhil Barik</strong>
                  </p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-muted)' }} className="mb-4 text-lg font-semibold">
                    Legal
                  </h4>
                  <Link
                    to="/truehue/privacy"
                    style={{ color: 'var(--text-faint)' }}
                    className="mb-2 block no-underline transition-colors duration-150 hover:opacity-70"
                  >
                    Privacy Policy
                  </Link>
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-muted)' }} className="mb-4 text-lg font-semibold">
                    Contact
                  </h4>
                  <a
                    href="mailto:nikhilbarik@icloud.com"
                    style={{ color: 'var(--text-faint)' }}
                    className="block no-underline transition-colors duration-150 hover:opacity-70"
                  >
                    nikhilbarik@icloud.com
                  </a>
                </div>
              </div>
            </div>
            <div style={{ borderTop: '1px solid var(--border)', color: 'var(--text-faint)' }} className="pt-8 text-center">
              <p>&copy; 2024 TrueHue. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Keyframe animations via style tag */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
