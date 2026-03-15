import { useEffect, useState } from 'react'
import SEO from '../components/SEO'

const words = ['Master', 'your', 'IELTS', 'speaking']

export default function ChatterCards() {
  const [visibleWords, setVisibleWords] = useState<number[]>([])

  useEffect(() => {
    words.forEach((_, index) => {
      setTimeout(() => {
        setVisibleWords((prev) => [...prev, index])
      }, 300 * (index + 1))
    })
  }, [])

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-900 font-[system-ui,'-apple-system','SF_Pro_Display','SF_Pro_Text','Helvetica_Neue',sans-serif]">
      <SEO
        title="ChatterCards - Master your IELTS Speaking"
        description="Practice IELTS speaking with smart flashcards. Build confidence and fluency for your IELTS exam."
        url="https://www.nerdynikhil.com/chattercards"
        image="https://www.nerdynikhil.com/images/chattercards/phone-hero.png"
      />

      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        {/* Animated Title */}
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 flex flex-wrap justify-center gap-x-4">
          {words.map((word, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-700 ease-out ${
                visibleWords.includes(index)
                  ? 'opacity-100 blur-0 translate-y-0'
                  : 'opacity-0 blur-sm translate-y-5'
              }`}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-500 max-w-lg mx-auto mb-12">
          Practice IELTS speaking with smart flashcards. Build confidence and
          fluency for your exam.
        </p>

        {/* Hero Image */}
        <div className="mb-12">
          <img
            src="/images/chattercards/phone-hero.png"
            alt="ChatterCards App Preview"
            className="max-w-xs mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Download Button */}
        <a
          href="https://apps.apple.com/app/chattercards-ielts-speaking/id6740497874"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-900 text-white font-semibold text-lg px-10 py-4 rounded-full hover:bg-gray-800 transition-colors shadow-lg mb-20"
        >
          Download on the App Store
        </a>

        {/* Footer */}
        <footer className="border-t border-gray-200 pt-8 text-sm text-gray-400 space-y-2">
          <p>
            IELTS is a registered trademark of University of Cambridge ESOL, the
            British Council, and IDP Education Australia. This app is not
            affiliated with or endorsed by any of these organizations.
          </p>
          <p>
            <a
              href="/chattercards/privacy"
              className="text-gray-500 underline hover:text-gray-700 transition-colors"
            >
              Privacy Policy
            </a>
          </p>
          <p className="text-gray-400">Made by Nikhil Sethi</p>
        </footer>
      </div>
    </div>
  )
}
