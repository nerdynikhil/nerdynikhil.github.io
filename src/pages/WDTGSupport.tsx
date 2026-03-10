import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

interface FAQItem {
  question: string
  answer: string
}

function FAQAccordion({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-[#eee] py-3.5">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-center justify-between border-none bg-transparent text-left font-semibold text-[#1a1a1a]"
      >
        <span>{question}</span>
        <span className="text-xl text-[#6366F1]">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <p
          className="mt-3 mb-1 text-[#555]"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      )}
    </div>
  )
}

export default function WDTGSupport() {
  const faqs: FAQItem[] = [
    {
      question: 'How do I log a time entry?',
      answer:
        'Tap the <strong>Add</strong> tab (+ icon) at the bottom of the screen. Select a category, set the duration using hours and minutes, and tap Save.',
    },
    {
      question: 'Where is my data stored?',
      answer:
        'All your time entries and categories are stored locally on your device using SwiftData. No data is sent to external servers. Your data stays private.',
    },
    {
      question: 'Can I edit or delete a time entry?',
      answer:
        'Yes. Go to the <strong>History</strong> tab, find the entry you want to change, and swipe left to delete or tap to edit.',
    },
    {
      question: 'What is the backfill feature?',
      answer:
        'After logging at least one day of data, WDTG can estimate and fill in historical days based on your averages. This helps populate the Year Dots view. Backfilled entries are marked as estimated and can be removed at any time from Settings.',
    },
    {
      question: 'How do I create a custom category?',
      answer:
        'Go to the <strong>Categories</strong> tab and tap the + button in the top right. Give your category a name, pick a color, and choose an icon.',
    },
    {
      question: "The app crashed or isn't working as expected.",
      answer:
        'Try force-quitting the app and reopening it. If the problem persists, please email us at <a href="mailto:nikhilbarik@icloud.com?subject=WDTG%20Bug%20Report" class="text-[#6366F1] no-underline hover:underline">nikhilbarik@icloud.com</a> with a description of what happened and your iOS version.',
    },
    {
      question: 'How do I delete all my data?',
      answer:
        'Go to <strong>Settings → Delete All Data</strong>. This permanently removes all time entries and resets categories to defaults.',
    },
  ]

  return (
    <>
      <SEO
        title="Support - WDTG"
        description="Get help with Where Did The Time Go? - FAQ, contact information, and troubleshooting."
        url="https://www.nerdynikhil.com/wdtg/support"
      />

      <div className="mx-auto max-w-[800px] px-5 py-10 font-['-apple-system',BlinkMacSystemFont,'SF_Pro_Display',sans-serif] leading-relaxed text-[#333]">
        <Link
          to="/wdtg"
          className="mb-8 inline-block text-[#6366F1] no-underline hover:underline"
        >
          &larr; Back to WDTG
        </Link>

        <h1 className="mb-2.5 text-3xl font-bold text-[#6366F1]">Support</h1>
        <p className="mb-10 text-[17px] text-[#666]">
          Need help with Where Did The Time Go? We're here for you.
        </p>

        {/* Contact Card */}
        <div className="my-6 rounded-xl border border-[#e0e0ff] bg-[#f5f5ff] p-6">
          <strong>Email Support</strong>
          <br />
          For questions, feedback, or bug reports, reach out directly:
          <br />
          <br />
          <a
            href="mailto:nikhilbarik@icloud.com?subject=WDTG%20Support"
            className="font-semibold text-[#6366F1] no-underline hover:underline"
          >
            nikhilbarik@icloud.com
          </a>
          <br />
          <br />
          We typically respond within 1&ndash;2 business days.
        </div>

        <h2 className="mt-9 mb-3 text-xl font-semibold text-[#444]">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq) => (
          <FAQAccordion
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
          />
        ))}

        {/* Footer */}
        <footer className="mt-15 border-t border-[#eee] pt-5 text-[13px] text-[#999]">
          <p>
            WDTG &mdash; Where Did The Time Go? &nbsp;|&nbsp;
            <Link
              to="/wdtg/privacy"
              className="text-[#6366F1] no-underline hover:underline"
            >
              Privacy Policy
            </Link>{' '}
            &nbsp;|&nbsp;
            <Link
              to="/wdtg/terms"
              className="text-[#6366F1] no-underline hover:underline"
            >
              Terms of Service
            </Link>
          </p>
          <p>&copy; 2025 Nikhil Barik</p>
        </footer>
      </div>
    </>
  )
}
