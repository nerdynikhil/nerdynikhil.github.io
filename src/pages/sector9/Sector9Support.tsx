import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'

interface FAQItem {
  question: string
  answer: ReactNode
}

const linkClass = 'text-[#d9431f] no-underline hover:underline'

function FAQAccordion({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-[#eee] py-3.5">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between border-none bg-transparent text-left font-semibold text-[#1a1a1a]"
      >
        <span>{question}</span>
        <span className="text-xl text-[#ff5c39]">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="mt-3 mb-1 text-[#555]">{answer}</div>}
    </div>
  )
}

const faqs: FAQItem[] = [
  {
    question: 'Why does Sector9 ask for Full Disk Access?',
    answer: (
      <>
        <p className="mb-3">
          Some of the biggest space users on a Mac, like app caches, Xcode build
          data and Docker&apos;s disk, live in parts of <code>~/Library</code>{' '}
          and app containers that macOS hides from apps without Full Disk
          Access. With it, Sector9 can measure and explain them. It only reads
          what is there, on your Mac, and nothing is sent anywhere.
        </p>
        <p>
          Without Full Disk Access, Sector9 still scans your home folder and
          tells you which places it could not see.
        </p>
      </>
    ),
  },
  {
    question: 'How do I grant Full Disk Access?',
    answer: (
      <ol className="list-decimal space-y-1.5 pl-6">
        <li>
          Open <strong>System Settings &rarr; Privacy &amp; Security &rarr;
          Full Disk Access</strong>.
        </li>
        <li>
          Turn on the switch next to <strong>Sector9</strong>. If it is not in
          the list, click <strong>+</strong>, choose Sector9 from your
          Applications folder, then turn it on.
        </li>
        <li>Quit and reopen Sector9, then run a new scan.</li>
      </ol>
    ),
  },
  {
    question: 'How do I undo a cleanup?',
    answer: (
      <p>
        Sector9 never deletes anything outright. Everything you clean goes to
        the macOS Trash. Right after a cleanup, use <strong>Undo</strong> in
        Sector9 to put it all back. You can also open the Trash in Finder,
        select the items, and choose <strong>File &rarr; Put Back</strong> (or
        right-click &rarr; Put Back). This works until you empty the Trash.
      </p>
    ),
  },
  {
    question: 'Will Sector9 delete my own files?',
    answer: (
      <p>
        No. Your photos, footage, code and documents are marked &ldquo;Yours,
        kept&rdquo; and are never selected. Anything marked &ldquo;Your
        call&rdquo; is never selected for you either. Nothing moves until you
        review it in the tray and confirm.
      </p>
    ),
  },
  {
    question: 'Which macOS versions does Sector9 support?',
    answer: (
      <p>
        Sector9 runs on macOS 13 Ventura and later, on both Apple silicon and
        Intel Macs.
      </p>
    ),
  },
  {
    question: 'Where is my scan history stored?',
    answer: (
      <p>
        On your Mac only, in the app&apos;s folder inside{' '}
        <code>~/Library/Application Support</code>. Delete that folder to clear
        your history. See the{' '}
        <Link to="/sector9/privacy" className={linkClass}>
          Privacy Policy
        </Link>{' '}
        for details.
      </p>
    ),
  },
  {
    question: 'How do I report a problem?',
    answer: (
      <>
        <p className="mb-3">
          Email{' '}
          <a
            href="mailto:nklmarch17@gmail.com?subject=Sector9%20Bug%20Report"
            className={linkClass}
          >
            nklmarch17@gmail.com
          </a>{' '}
          with:
        </p>
        <ul className="list-disc space-y-1.5 pl-6">
          <li>What happened, and what you expected to happen</li>
          <li>The steps that lead to it, if you can repeat it</li>
          <li>Your macOS version and Sector9 version</li>
          <li>A screenshot, if it helps</li>
        </ul>
        <p className="mt-3">
          Sector9 does not send any reports by itself, so only what you choose
          to include in your email reaches me.
        </p>
      </>
    ),
  },
]

export default function Sector9Support() {
  return (
    <>
      <SEO
        title="Support - Sector9"
        description="Get help with Sector9, the macOS disk space analyzer. Full Disk Access, undoing a cleanup, supported macOS versions and how to report a problem."
        url="https://www.nerdynikhil.com/sector9/support"
        image="https://www.nerdynikhil.com/sector9/og-image.png"
      />

      <div className="mx-auto max-w-[800px] px-5 py-10 font-['-apple-system',BlinkMacSystemFont,'SF_Pro_Display',sans-serif] leading-relaxed text-[#333]">
        <Link to="/sector9" className={`mb-8 inline-block ${linkClass}`}>
          &larr; Back to Sector9
        </Link>

        <h1 className="mb-2.5 text-3xl font-bold text-[#ff5c39]">Support</h1>
        <p className="mb-10 text-[17px] text-[#666]">
          Need help with Sector9? Start with the questions below, or email me.
        </p>

        {/* Contact Card */}
        <div className="my-6 rounded-xl border border-[#ffd9cf] bg-[#fff4f1] p-6">
          <strong>Email Support</strong>
          <br />
          For questions, feedback or bug reports, reach out directly:
          <br />
          <br />
          <a
            href="mailto:nklmarch17@gmail.com?subject=Sector9%20Support"
            className={`font-semibold ${linkClass}`}
          >
            nklmarch17@gmail.com
          </a>
          <br />
          <br />
          I read every email and usually reply within a few days.
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
            Sector9 &mdash; Disk space, explained. &nbsp;|&nbsp;
            <Link to="/sector9/privacy" className={linkClass}>
              Privacy Policy
            </Link>
          </p>
          <p>&copy; 2026 Nikhil Barik</p>
        </footer>
      </div>
    </>
  )
}
