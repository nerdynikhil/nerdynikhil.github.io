import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const titleWords = [
  { text: 'Master', italic: false },
  { text: 'languages', italic: false },
  { text: 'through', italic: false },
  { text: 'AI-powered', italic: true },
  { text: 'conversations', italic: false },
]

const features = [
  { icon: '\u{1F916}', title: 'AI Conversation Partner', description: 'Practice with intelligent AI that adapts to your skill level' },
  { icon: '\u{1F3AD}', title: 'Real-World Scenarios', description: "Master conversations you'll actually use in daily life" },
  { icon: '\u{1F4C8}', title: 'Progress Tracking', description: 'Monitor your improvement with detailed analytics' },
  { icon: '\u{1F30D}', title: 'Multiple Languages', description: 'Practice Spanish, French, German, Italian, and more' },
]

const techLogos = [
  { src: '/images/lingoduel/appleintelligence.png', alt: 'Apple Intelligence', title: 'Apple Intelligence' },
  { src: '/images/lingoduel/foundation_model.png', alt: 'Foundation Models', title: 'Foundation Models' },
  { src: '/images/lingoduel/widgetkit.webp', alt: 'WidgetKit', title: 'WidgetKit' },
  { src: '/images/lingoduel/intents.png', alt: 'Siri Shortcuts', title: 'Siri Shortcuts' },
  { src: '/images/lingoduel/mlkit.png', alt: 'CoreML Vision', title: 'CoreML Vision' },
  { src: '/images/lingoduel/swift.png', alt: 'Swift & Xcode', title: 'Swift & Xcode' },
  { src: '/images/lingoduel/adapty.png', alt: 'Adapty', title: 'Adapty' },
]

export default function LingoDuel() {
  const [visibleWords, setVisibleWords] = useState<number[]>([])
  const [heroVisible, setHeroVisible] = useState(false)
  const [badgesVisible, setBadgesVisible] = useState(false)
  const [downloadVisible, setDownloadVisible] = useState(false)

  const videoRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const techRef = useRef<HTMLDivElement>(null)

  const [videoVisible, setVideoVisible] = useState(false)
  const [featuresVisible, setFeaturesVisible] = useState(false)
  const [techVisible, setTechVisible] = useState(false)

  // Title word animation
  useEffect(() => {
    titleWords.forEach((_, index) => {
      setTimeout(() => {
        setVisibleWords((prev) => [...prev, index])
      }, index * 200 + 500)
    })

    // Hero image
    setTimeout(() => setHeroVisible(true), 1500)
    // Badges
    setTimeout(() => setBadgesVisible(true), 2000)
    // Download button
    setTimeout(() => setDownloadVisible(true), 2500)
  }, [])

  // Scroll-triggered animations
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === videoRef.current) setVideoVisible(true)
          if (entry.target === featuresRef.current) setFeaturesVisible(true)
          if (entry.target === techRef.current) setTechVisible(true)
        }
      })
    }, observerOptions)

    if (videoRef.current) observer.observe(videoRef.current)
    if (featuresRef.current) observer.observe(featuresRef.current)
    if (techRef.current) observer.observe(techRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#1d1d1f] font-[system-ui,'-apple-system','BlinkMacSystemFont','SF_Pro_Display',sans-serif] leading-normal">
      <SEO
        title="LingoDuel - Master languages through AI-powered conversations"
        description="Practice real-world language scenarios with AI. Restaurant visits, job interviews, shopping - master conversations that matter. Featured in IndieHub Hackathon."
        url="https://www.nerdynikhil.com/lingoduel"
        image="https://www.nerdynikhil.com/images/lingoduel/hero-image.png"
      />

      <main>
        <div className="max-w-3xl mx-auto px-5 py-20 text-center">
          {/* Animated Title */}
          <h1 className="text-5xl sm:text-7xl font-normal tracking-tight mb-6 text-[#1d1d1f]">
            {titleWords.map((word, index) => (
              <span
                key={index}
                className={`inline-block mr-[0.2em] transition-all duration-700 ease-out ${
                  visibleWords.includes(index)
                    ? 'opacity-100 blur-0 translate-y-0'
                    : 'opacity-0 blur-md translate-y-5'
                }`}
              >
                {word.italic ? (
                  <em className="italic text-[#007aff]">{word.text}</em>
                ) : (
                  word.text
                )}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-[#6e6e73] mb-20 max-w-xl mx-auto font-normal">
            Practice real-world scenarios like restaurant visits, job interviews, and shopping with intelligent AI that adapts to your skill level.
          </p>

          {/* Hero Image */}
          <div className="my-20">
            <img
              src="/images/lingoduel/hero-image.png"
              alt="LingoDuel App Interface"
              className={`max-w-full h-auto max-h-[600px] mx-auto rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-1000 ease-out ${
                heroVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
            />
          </div>

          {/* Recognition Badges */}
          <div className={`flex justify-center gap-8 my-16 flex-wrap transition-all duration-600 ease-out ${
            badgesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#e5e5e7]">
              <img src="/images/lingoduel/IHlogo.png" alt="IndieHub" className="w-8 h-8 rounded-md" />
              <span className="text-sm font-medium text-[#1d1d1f]">Featured in IndieHub Hackathon</span>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#e5e5e7]">
              <img src="/images/lingoduel/swiftdelhi-logo.png" alt="Swift Delhi" className="w-8 h-8 rounded-md" />
              <span className="text-sm font-medium text-[#1d1d1f]">Regional Winner - Swift Delhi</span>
            </div>
          </div>

          {/* Video Section */}
          <div
            ref={videoRef}
            className={`my-24 transition-all duration-700 ease-out ${
              videoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1d1d1f] mb-10 tracking-tight">
              See LingoDuel in Action
            </h2>
            <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] bg-black">
              <iframe
                src="https://www.youtube.com/embed/sBkrGFva0lM?autoplay=0&mute=1&controls=1&rel=0&modestbranding=1&playsinline=1"
                title="LingoDuel Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>

          {/* Features Section */}
          <div
            ref={featuresRef}
            className={`my-24 transition-all duration-700 ease-out ${
              featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1d1d1f] mb-16 tracking-tight">
              Why Choose LingoDuel?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#e5e5e7] text-center transition-all duration-600 ease-out ${
                    featuresVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: featuresVisible ? `${index * 100}ms` : '0ms' }}
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">{feature.title}</h3>
                  <p className="text-base text-[#6e6e73] leading-snug">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Section */}
          <div
            ref={techRef}
            className={`mt-24 mb-10 transition-all duration-700 ease-out ${
              techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1d1d1f] mb-10 tracking-tight">
              Built with Cutting-Edge Technology
            </h2>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-6 max-w-xl mx-auto">
              {techLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className={`w-12 h-12 rounded-xl justify-self-center cursor-pointer transition-all duration-600 ease-out hover:scale-110 hover:-translate-y-1 ${
                    techVisible
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 scale-75 translate-y-5'
                  }`}
                  style={{ transitionDelay: techVisible ? `${index * 50}ms` : '0ms' }}
                />
              ))}
            </div>
          </div>

          {/* Download Button */}
          <a
            href="#"
            className={`inline-block bg-[#007aff] text-white px-8 py-4 rounded-full no-underline text-lg font-semibold mt-16 hover:bg-[#0056cc] hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(0,122,255,0.3)] transition-all duration-200 ease-out ${
              downloadVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }`}
          >
            Coming Soon
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white px-5 py-16 text-center border-t border-[#e5e5e7]">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src="/images/lingoduel/lingoduel-logo.png" alt="LingoDuel Logo" className="w-8 h-8 rounded-lg" />
            <span className="text-xl font-semibold text-[#1d1d1f]">LingoDuel</span>
          </div>

          <div className="my-6 space-y-2">
            <p className="text-sm text-[#6e6e73]"><strong>Nikhil Barik</strong> - Software Engineer @Deutsche Telekom</p>
            <p className="text-sm text-[#6e6e73]"><strong>Saanica Gupta</strong> - Software Engineer @Gojek</p>
          </div>

          <p className="text-xs text-[#6e6e73] max-w-xl mx-auto leading-snug">
            Master languages through AI-powered conversations in realistic scenarios.
          </p>
          <p className="mt-5 text-xs">
            <Link to="/lingoduel/privacy" className="text-[#007aff] no-underline hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
