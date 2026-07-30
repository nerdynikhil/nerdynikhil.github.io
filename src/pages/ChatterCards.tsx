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
    <div style={{ minHeight: '100vh', background: 'var(--cream)', color: 'var(--text)' }}>
      <SEO
        title="ChatterCards - Master your IELTS Speaking"
        description="Practice IELTS speaking with smart flashcards. Build confidence and fluency for your IELTS exam."
        url="https://www.nerdynikhil.com/chattercards"
        image="https://www.nerdynikhil.com/images/chattercards/phone-hero.png"
      />

      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        {/* Animated Title */}
        <h1
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: 'var(--text-muted)' }}
          className="text-5xl sm:text-6xl tracking-tight mb-6 flex flex-wrap justify-center gap-x-4"
        >
          {words.map((word, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-700 ease-out ${
                visibleWords.includes(index)
                  ? 'opacity-100 blur-0 translate-y-0'
                  : 'opacity-0 blur-sm translate-y-5'
              }`}
            >
              {word === 'IELTS' ? <em className="italic">{word}</em> : word}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p style={{ color: 'var(--text-faint)' }} className="text-xl max-w-lg mx-auto mb-12">
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
          style={{ background: 'var(--text-muted)', borderRadius: 'var(--radius-btn)', boxShadow: '0 4px 20px rgba(28,25,23,0.12)' }}
          className="inline-block text-white font-semibold text-lg px-10 py-4 hover:-translate-y-0.5 transition-transform mb-20"
        >
          Download on the App Store
        </a>

        {/* Footer */}
        <footer style={{ borderTop: '1px solid var(--border)', color: 'var(--text-faint)' }} className="pt-8 text-sm space-y-2">
          <p>
            IELTS is a registered trademark of University of Cambridge ESOL, the
            British Council, and IDP Education Australia. This app is not
            affiliated with or endorsed by any of these organizations.
          </p>
          <p>
            <a
              href="/chattercards/privacy"
              style={{ color: 'var(--text-muted)' }}
              className="underline"
            >
              Privacy Policy
            </a>
          </p>
          <p>Made by Nikhil Barik</p>
        </footer>
      </div>
    </div>
  )
}
