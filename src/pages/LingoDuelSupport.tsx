import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

interface FAQItem {
  question: string
  answer: string
}

const supportEmail = 'nikhilbarik@icloud.com'

function FAQAccordion({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-[#e5e5e7] py-4">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 border-none bg-transparent text-left font-semibold text-[#1d1d1f]"
      >
        <span>{question}</span>
        <span className="text-xl text-[#F28A4B]">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="mt-3 mb-1 text-[#6b7280]" dangerouslySetInnerHTML={{ __html: answer }} />}
    </div>
  )
}

const faqs: FAQItem[] = [
  {
    question: 'How does a duel work?',
    answer:
      'Pick a scene on the Path, such as a restaurant or a taxi. Your AI partner plays the other role and speaks first. Hold the mic to answer out loud, or type your reply. After each line the coach marks your grammar and vocabulary and shows a better way to say it. Reach the pass mark to clear the scene.',
  },
  {
    question: "What's free, and what does LingoDuel Plus add?",
    answer:
      'Free includes 3 duels a day and the first level. <strong>LingoDuel Plus</strong> adds unlimited duels, all four levels, the coach&apos;s note on every line and saved phrases. Plus is available monthly, or yearly with a 1-week free trial.',
  },
  {
    question: 'How do I cancel my subscription?',
    answer:
      'Open the <strong>Settings</strong> app on your iPhone, tap your name, then <strong>Subscriptions</strong>, and choose LingoDuel Plus. You can also get there from LingoDuel: tap the gear on the Path, then <strong>Manage subscription</strong>. Cancel at least 24 hours before the end of the period to avoid the next charge. If you cancel during the free trial, you won&apos;t be charged.',
  },
  {
    question: 'I bought Plus but the app still shows the free plan.',
    answer:
      'Tap the gear on the Path, then <strong>Restore purchases</strong>. Make sure you&apos;re signed in with the same Apple Account you used to buy it. If that doesn&apos;t help, email us with the date of purchase.',
  },
  {
    question: 'How do I get a refund?',
    answer:
      'Apple handles all payments, so refunds are requested from Apple at <a href="https://reportaproblem.apple.com" class="text-[#F28A4B] no-underline hover:underline">reportaproblem.apple.com</a>.',
  },
  {
    question: "The mic isn't working.",
    answer:
      'LingoDuel needs Microphone and Speech Recognition access. Open the iPhone <strong>Settings</strong> app, tap <strong>LingoDuel</strong>, and turn both on. You can always type your reply instead.',
  },
  {
    question: "How do I change the language I'm learning?",
    answer:
      'Tap the gear on the Path, then <strong>Language</strong>. You can also choose the language explanations are written in under <strong>Explanations in</strong>.',
  },
  {
    question: 'An AI reply was offensive, unsafe or wrong.',
    answer:
      'Long-press the reply and tap <strong>Report this reply</strong>. That opens an email to us with the reply already included. We read every report.',
  },
  {
    question: 'How do I add the Word of the Day widget?',
    answer:
      'Touch and hold your Home Screen or Lock Screen, tap <strong>Edit</strong>, then <strong>Add Widget</strong>, and search for LingoDuel. The widget shows a new word each day in the language you&apos;re learning. It updates when you open the app.',
  },
  {
    question: 'Do I need an internet connection?',
    answer:
      'Yes. Your partner&apos;s replies and your scores come from our server, which uses AI models. Your progress is stored on your device.',
  },
  {
    question: 'How do I reset my progress?',
    answer:
      'Tap the gear on the Path, then <strong>Reset progress</strong>. This deletes your duels, XP, streak and saved phrases from this device. Your subscription isn&apos;t affected.',
  },
  {
    question: 'Something else went wrong.',
    answer: `Force-quit LingoDuel and open it again. If the problem continues, email <a href="mailto:${supportEmail}?subject=LingoDuel%20bug%20report" class="text-[#F28A4B] no-underline hover:underline">${supportEmail}</a> with what happened, your iPhone model and your iOS version.`,
  },
]

export default function LingoDuelSupport() {
  return (
    <div className="min-h-screen bg-[#FFFAEE] text-[#1d1d1f] font-[system-ui,'-apple-system','BlinkMacSystemFont','SF_Pro_Display',sans-serif] leading-normal">
      <SEO
        title="Support - LingoDuel"
        description="Get help with LingoDuel: duels, LingoDuel Plus, cancelling or restoring a subscription, the mic, the widget and how to contact us."
        url="https://www.nerdynikhil.com/lingoduel/support"
      />

      <nav className="bg-white border-b border-[#e5e5e7]">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
          <Link to="/lingoduel" className="text-xl font-semibold text-[#1d1d1f] no-underline">
            LingoDuel
          </Link>
          <div className="flex items-center gap-8">
            <Link to="/lingoduel" className="text-sm font-medium text-[#6b7280] no-underline hover:text-[#1d1d1f] transition-colors">
              Home
            </Link>
            <Link to="/lingoduel/privacy" className="text-sm font-medium text-[#6b7280] no-underline hover:text-[#1d1d1f] transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </nav>

      <section className="py-24 min-h-screen">
        <div className="max-w-3xl mx-auto px-5 text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1d1d1f] mb-4">Support</h1>
          <p className="text-[#6e6e73]">Need help with LingoDuel? We&apos;re here for you.</p>
        </div>

        <div className="max-w-3xl mx-auto px-5">
          <div className="rounded-2xl border border-[#FFE6D4] bg-[#FFF7EF] p-8 mb-10">
            <h2 className="text-lg font-semibold text-[#1f2937] mb-2">Email support</h2>
            <p className="text-[#6b7280] mb-4">For questions, feedback, bug reports or subscription help:</p>
            <a
              href={`mailto:${supportEmail}?subject=LingoDuel%20support`}
              className="font-semibold text-[#F28A4B] no-underline hover:underline"
            >
              {supportEmail}
            </a>
            <p className="text-[#6b7280] mt-4 mb-0 text-sm">We usually reply within 1 to 2 business days.</p>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.05)]">
            <h2 className="text-xl font-semibold text-[#1f2937] mb-2">Frequently asked questions</h2>
            {faqs.map((faq) => (
              <FAQAccordion key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <p className="text-center text-sm text-[#6b7280] mt-10">
            <Link to="/lingoduel/privacy" className="text-[#6b7280] hover:underline">Privacy policy</Link>
            {' · '}
            <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" className="text-[#6b7280] hover:underline">
              Terms of use (Apple standard EULA)
            </a>
          </p>
        </div>
      </section>

      <footer className="bg-white border-t border-[#e5e5e7] py-12">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <p className="text-sm text-[#6b7280]">&copy; 2026 Nikhil Kumar Barik. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
