import SEO from '../components/SEO'

const faqs = [
  {
    q: 'How do I save a Behance project as a PDF?',
    a: 'Install the Behance2PDF Chrome extension, open any project on behance.net, and click the floating "Save as PDF" button. The PDF downloads automatically with the project name.',
  },
  {
    q: 'Is Behance2PDF free?',
    a: 'Yes. Behance2PDF is completely free and open source, with no account, sign-up, or subscription required.',
  },
  {
    q: 'Can I download all the images from a Behance project?',
    a: 'Yes. Alongside PDF export, Behance2PDF can bulk-download every image in a project as a ZIP archive, in its original resolution.',
  },
  {
    q: 'Does it work with all Behance project layouts?',
    a: 'Yes. Behance2PDF is built to handle every Behance project type and layout, including image galleries, text sections, and embedded media.',
  },
  {
    q: 'Does Behance2PDF track my data?',
    a: 'No. Behance2PDF is privacy-first: it runs entirely in your browser, collects no data, and includes no analytics or tracking.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Behance2PDF',
  applicationCategory: 'BrowserApplication',
  operatingSystem: 'Chrome',
  description:
    'Free Chrome extension to save any Behance project as a high-quality PDF or download all its images in one click. No account, no tracking.',
  url: 'https://www.nerdynikhil.com/behance2pdf',
  image: 'https://www.nerdynikhil.com/images/behance2pdf/icon1024.png',
  author: {
    '@type': 'Person',
    name: 'Nikhil Barik',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
}

export default function Behance2PDF() {
  return (
    <div className="min-h-screen bg-[#0066ff] text-white font-['Inter',sans-serif]">
      <SEO
        title="Behance2PDF — Save Behance Projects as PDF & Download Images (Free Chrome Extension)"
        description="Free Chrome extension to save any Behance project as a high-quality PDF or download all its images in one click. No account, no tracking."
        url="https://www.nerdynikhil.com/behance2pdf"
        image="https://www.nerdynikhil.com/images/behance2pdf/og-image.png"
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [softwareAppJsonLd, faqJsonLd],
        }}
      />

      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        {/* Icon */}
        <img
          src="/images/behance2pdf/icon1024.png"
          alt="Behance2PDF Icon"
          className="w-32 h-32 mx-auto rounded-3xl shadow-lg mb-8"
        />

        {/* Title */}
        <h1 className="text-5xl font-bold mb-4">Behance2PDF</h1>
        <p className="text-xl text-white/80 mb-12">
          Save any Behance project as a high-quality PDF — or download every image in one click.
        </p>

        {/* Features */}
        <div className="text-left bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="space-y-3 text-white/90">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 bg-white rounded-full shrink-0" />
              <span>One-click PDF export from any Behance project page</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 bg-white rounded-full shrink-0" />
              <span>Bulk image download as a ZIP, in original resolution</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 bg-white rounded-full shrink-0" />
              <span>High-quality image preservation with original resolution</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 bg-white rounded-full shrink-0" />
              <span>Automatic page layout optimized for project content</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 bg-white rounded-full shrink-0" />
              <span>Works with all Behance project types and layouts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 bg-white rounded-full shrink-0" />
              <span>No account or sign-up required — and no tracking</span>
            </li>
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <a
            href="https://chromewebstore.google.com/detail/behance2pdf/njmohlbacnpeglflbcfikkkmdpabeoil"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#0066ff] font-semibold text-lg px-10 py-4 rounded-full hover:bg-white/90 transition-colors shadow-lg"
          >
            Add to Chrome
          </a>
          <a
            href="https://github.com/nerdynikhil/Behance2PDF"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white/40 text-white font-semibold text-lg px-10 py-4 rounded-full hover:bg-white/10 transition-colors"
          >
            View on GitHub
          </a>
        </div>
        <p className="text-white/60 text-sm mb-12">
          Free to install — no account or sign-up required.
        </p>

        {/* How it works */}
        <div className="text-left bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-4">How it works</h2>
          <ol className="space-y-3 text-white/90 list-decimal list-inside">
            <li>Install the Behance2PDF extension from the Chrome Web Store (or load it from GitHub).</li>
            <li>Open any project on behance.net.</li>
            <li>Click the floating "Save as PDF" or "Download Images" button — your file downloads instantly.</li>
          </ol>
        </div>

        {/* Download all images */}
        <div className="text-left bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Download all images from a Behance project</h2>
          <p className="text-white/90">
            Beyond PDF export, Behance2PDF can bulk-download every image in a Behance project as a single
            ZIP archive — at the highest resolution available. It's the fastest way to save a project's
            visual assets for offline reference, moodboards, or client presentations.
          </p>
        </div>

        {/* Install walkthrough */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Installation Walkthrough</h2>
          <video
            src="/images/behance2pdf/install-steps.mp4"
            controls
            muted
            loop
            playsInline
            preload="none"
            poster="/images/behance2pdf/icon1024.png"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* FAQ */}
        <div className="text-left bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Frequently asked questions</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-semibold text-white mb-1">{faq.q}</h3>
                <p className="text-white/80">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feedback */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-3">Feedback</h2>
          <p className="text-white/80">
            Have a suggestion or found a bug? Feel free to reach out at{' '}
            <a
              href="mailto:nerdynikhil@hotmail.com"
              className="underline hover:text-white transition-colors"
            >
              nerdynikhil@hotmail.com
            </a>
          </p>
        </div>

        {/* Footer */}
        <footer className="text-white/60 text-sm space-y-2">
          <p>
            <a
              href="/behance2pdf/privacy"
              className="underline hover:text-white transition-colors"
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
