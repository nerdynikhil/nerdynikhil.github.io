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

      <div className="overflow-x-hidden bg-white font-['Inter',-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif] leading-relaxed text-gray-800">
        {/* Navigation */}
        <nav
          className={`fixed top-0 right-0 left-0 z-[1000] border-b border-gray-200 bg-white/95 backdrop-blur-[10px] transition-all duration-300 ${
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
              <span className="text-lg font-bold text-gray-900">TrueHue</span>
            </div>
            <div className="hidden gap-8 md:flex">
              {['features', 'screenshots', 'download'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="relative cursor-pointer border-none bg-transparent font-medium capitalize text-gray-600 transition-colors duration-150 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-[#4ECDC4] after:transition-all after:duration-150 hover:text-[#4ECDC4] hover:after:w-full"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-[#667eea] to-[#764ba2]">
          {/* Animated Orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[10%] left-[10%] h-[300px] w-[300px] animate-[float_6s_ease-in-out_infinite] rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] opacity-30 blur-[40px]" />
            <div className="absolute top-[60%] right-[20%] h-[200px] w-[200px] animate-[float_6s_ease-in-out_infinite_2s] rounded-full bg-gradient-to-br from-[#96CEB4] to-[#FFEAA7] opacity-30 blur-[40px]" />
            <div className="absolute bottom-[20%] left-[60%] h-[150px] w-[150px] animate-[float_6s_ease-in-out_infinite_4s] rounded-full bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] opacity-30 blur-[40px]" />
          </div>

          <div className="relative z-[2] mx-auto max-w-[1200px] px-6">
            <div className="grid items-center gap-16 md:grid-cols-2">
              {/* Hero Text */}
              <div className="text-center text-white md:text-left">
                <h1 className="mb-4 bg-gradient-to-br from-white to-[#f0f0f0] bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl lg:text-6xl">
                  TrueHue
                </h1>
                <h2 className="mb-6 text-2xl font-semibold text-white/90 sm:text-3xl">
                  Master the Art of Color Matching
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-white/80 sm:text-xl">
                  Challenge your perception with this addictive color puzzle game
                </p>
                <div className="flex flex-col items-center gap-4 md:items-start">
                  <a
                    href="https://apps.apple.com/in/app/truehue-color-match/id6751550382"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    <AppleIcon />
                    Download on App Store
                  </a>
                  <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-[10px]">
                    <span className="text-sm font-medium text-white">
                      Free to download and play
                    </span>
                  </div>
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="flex items-center justify-center" style={{ perspective: '1000px' }}>
                <div className="w-[200px] rounded-[2rem] bg-[#1A1A1A] p-2 shadow-2xl transition-all duration-500 hover:rotate-y-[-10deg] hover:rotate-x-[2deg] sm:w-[240px] md:w-[280px] md:h-[560px]" style={{ transform: 'rotateY(-15deg) rotateX(5deg)' }}>
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
        <section id="features" className="bg-gray-50 py-32">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Game Modes
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-gray-600 sm:text-xl">
                Three unique ways to challenge your color perception
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {gameModes.map((mode, i) => (
                <div
                  key={mode.title}
                  id={`feature-${i}`}
                  ref={animateRef}
                  className={`rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    visibleSections.has(`feature-${i}`)
                      ? 'animate-[fadeInUp_0.6s_ease-out]'
                      : 'opacity-0'
                  }`}
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-gray-200 bg-gray-50 text-[2rem] transition-all duration-300 hover:scale-110 hover:border-[#4ECDC4] hover:bg-white hover:shadow-md">
                    {mode.icon}
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                    {mode.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    {mode.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Features Section */}
        <section className="bg-white py-32">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Premium Features
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-gray-600 sm:text-xl">
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
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg border-2 border-gray-200 bg-gray-50 text-2xl transition-all duration-300 hover:scale-110 hover:border-[#4ECDC4] hover:bg-white hover:shadow-md">
                    {feat.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {feat.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section id="screenshots" className="bg-gray-50 py-32">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                See TrueHue in Action
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-gray-600 sm:text-xl">
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
                  <p className="font-semibold text-gray-700">{shot.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Highlights */}
        <section className="bg-white py-32">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Technical Excellence
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-gray-600 sm:text-xl">
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
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg border-2 border-gray-200 bg-gray-50 text-2xl transition-all duration-300 hover:scale-110 hover:border-[#4ECDC4] hover:bg-white hover:shadow-md">
                    {item.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="download"
          className="bg-gradient-to-br from-[#667eea] to-[#764ba2] py-32 text-center text-white"
        >
          <div className="mx-auto max-w-[600px] px-6">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Ready to Master Colors?
            </h2>
            <p className="mb-8 text-lg opacity-90 sm:text-xl">
              Download TrueHue today and start your color matching journey
            </p>
            <div className="flex flex-col items-center gap-6">
              <a
                href="https://apps.apple.com/in/app/truehue-color-match/id6751550382"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 text-xl font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
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
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-[10px] transition-all duration-150 hover:-translate-y-0.5 hover:bg-white/20"
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
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-[10px] transition-all duration-150 hover:-translate-y-0.5 hover:bg-white/20"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 pt-16 pb-8 text-white">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="mb-8 grid gap-16 md:grid-cols-[1fr_2fr]">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <img
                    src="/images/truehue/TrueHue.png"
                    alt="TrueHue Logo"
                    className="h-8 w-8 rounded-lg object-contain brightness-110"
                  />
                  <span className="text-lg font-bold text-white">TrueHue</span>
                </div>
                <p className="leading-relaxed text-gray-400">
                  Master the art of color matching with this addictive puzzle
                  game.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-3">
                <div>
                  <h4 className="mb-4 text-lg font-semibold text-white">
                    Developer
                  </h4>
                  <p className="text-gray-400">
                    Created by <strong className="text-white">Nikhil Barik</strong>
                  </p>
                </div>
                <div>
                  <h4 className="mb-4 text-lg font-semibold text-white">
                    Legal
                  </h4>
                  <Link
                    to="/truehue/privacy"
                    className="mb-2 block text-gray-400 no-underline transition-colors duration-150 hover:text-[#4ECDC4]"
                  >
                    Privacy Policy
                  </Link>
                </div>
                <div>
                  <h4 className="mb-4 text-lg font-semibold text-white">
                    Contact
                  </h4>
                  <a
                    href="mailto:nikhilbarik@icloud.com"
                    className="block text-gray-400 no-underline transition-colors duration-150 hover:text-[#4ECDC4]"
                  >
                    nikhilbarik@icloud.com
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
              <p>&copy; 2024 TrueHue. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Keyframe animations via style tag */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
