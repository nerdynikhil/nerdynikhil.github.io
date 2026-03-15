import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Subscriptionly() {
  const [visibleWords, setVisibleWords] = useState<number[]>([])
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [showScreenshot, setShowScreenshot] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (hasAnimated.current) return
    hasAnimated.current = true

    const words = [0, 1, 2, 3]
    words.forEach((index) => {
      setTimeout(() => {
        setVisibleWords((prev) => [...prev, index])
      }, index * 300 + 500)
    })

    setTimeout(() => setShowSubtitle(true), 2000)
    setTimeout(() => setShowScreenshot(true), 2400)
    setTimeout(() => setShowButton(true), 2800)
  }, [])

  return (
    <>
      <SEO
        title="Subscriptionly - Simple Subscription Management"
        description="A clean and simple subscription management app for iOS. Track all your recurring subscriptions and see your total monthly spending at a glance."
        url="https://www.nerdynikhil.com/subscriptionly"
        image="https://www.nerdynikhil.com/images/subscriptionly/360x360ia.png"
      />

      <div className="min-h-screen bg-white font-['-apple-system',BlinkMacSystemFont,'SF_Pro_Display',sans-serif] text-[#1d1d1f] leading-relaxed">
        <main>
          <div className="mx-auto max-w-[1200px] px-5 pt-20">
            <div className="grid min-h-[70vh] grid-cols-1 items-center md:grid-cols-2">
              {/* Left Column */}
              <div className="text-center md:text-left">
                <a
                  href="https://peerlist.io/nerdynikhil/project/subscriptionly"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://peerlist.io/api/v1/projects/embed/PRJHA9ERKJ8AN6B9K1R8PENNLMLKQQ?showUpvote=false&theme=light"
                    alt="subscriptionly"
                    className="mb-4 h-[72px] w-auto"
                  />
                </a>

                <div className="mb-10">
                  <img
                    src="/images/subscriptionly/360x360ia.png"
                    alt="Subscriptionly Logo"
                    className="h-16 w-16 opacity-90 transition-opacity duration-300 hover:opacity-100"
                  />
                </div>

                <h1 className="mb-6 text-[42px] font-normal tracking-tight text-[#1d1d1f] sm:text-[56px] md:text-[72px]">
                  {['Manage', 'your', 'subscriptions', 'effortlessly'].map(
                    (word, index) => (
                      <span
                        key={index}
                        className={`mr-[0.2em] inline-block transition-all duration-[800ms] ease-out ${
                          visibleWords.includes(index)
                            ? 'translate-y-0 opacity-100 blur-0'
                            : 'translate-y-5 opacity-0 blur-[8px]'
                        }`}
                      >
                        {word === 'subscriptions' ? (
                          <em className="italic text-[#007aff]">{word}</em>
                        ) : (
                          word
                        )}
                      </span>
                    )
                  )}
                </h1>

                <p
                  className={`mx-auto mb-2.5 max-w-[500px] text-base font-normal text-[#6e6e73] transition-all duration-[800ms] ease-out sm:text-lg md:mx-0 md:text-xl ${
                    showSubtitle
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-5 opacity-0'
                  }`}
                >
                  Track all your recurring subscriptions in one place and see
                  your total monthly spending at a glance. Stay organized with
                  your digital spending.
                </p>

                <a
                  href="https://apps.apple.com/in/app/subscriptionly/id6752491328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-10 inline-block rounded-full bg-[#007aff] px-8 py-4 text-base font-semibold text-white no-underline transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#0056cc] hover:shadow-[0_15px_35px_rgba(0,122,255,0.3)] sm:text-lg ${
                    showButton
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-5 opacity-0'
                  }`}
                >
                  Download on the App Store
                </a>
              </div>

              {/* Right Column */}
              <div className="flex items-center justify-center">
                <div className="flex h-full w-full items-center justify-center">
                  <img
                    src="/images/subscriptionly/hero-image.png"
                    alt="Subscriptionly App Screenshot"
                    className={`h-full w-full object-cover transition-all duration-1000 ease-out ${
                      showScreenshot
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-[50px] opacity-0'
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="border-t border-[#e5e5e7] bg-white px-5 py-15 text-center">
          <p className="mx-auto max-w-[600px] text-xs leading-snug text-[#6e6e73]">
            A clean and simple subscription management app for iOS. Features
            include tracking recurring subscriptions, viewing monthly spending
            totals, managing existing subscriptions, and pausing/resuming
            services as needed.
          </p>
          <p className="mt-5 text-xs">
            <Link
              to="/subscriptionly/privacy"
              className="text-[#007aff] no-underline hover:underline"
            >
              Privacy Policy
            </Link>
          </p>
        </footer>
      </div>
    </>
  )
}
