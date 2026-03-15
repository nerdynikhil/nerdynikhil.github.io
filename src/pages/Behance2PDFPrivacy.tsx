import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Behance2PDFPrivacy() {
  return (
    <div className="min-h-screen bg-[#0066ff] text-white font-['Inter',sans-serif]">
      <SEO
        title="Privacy Policy - Behance2PDF"
        description="Privacy policy for the Behance2PDF Chrome extension. We do not collect any user data."
        url="https://www.nerdynikhil.com/behance2pdf/privacy"
      />

      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Back Link */}
        <Link
          to="/behance2pdf"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
        >
          <span>&larr;</span>
          <span>Back to Behance2PDF</span>
        </Link>

        {/* Icon */}
        <div className="text-center mb-8">
          <img
            src="/images/behance2pdf/icon1024.png"
            alt="Behance2PDF Icon"
            className="w-20 h-20 mx-auto rounded-2xl shadow-lg mb-6"
          />
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </div>

        {/* Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6 text-white/90 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-2">Overview</h2>
            <p>
              Behance2PDF is a Chrome extension that converts Behance project pages
              into PDF files. Your privacy is important to us, and this policy
              explains how we handle your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">
              Data Collection
            </h2>
            <p>
              Behance2PDF does <strong>not</strong> collect, store, or transmit any
              personal data. The extension operates entirely within your browser and
              processes Behance project pages locally on your device.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">
              How It Works
            </h2>
            <p>
              When you click the extension button on a Behance project page, it reads
              the images and content displayed on that page and generates a PDF file
              locally in your browser. No data is sent to any external server.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">Permissions</h2>
            <p>
              The extension requires access to Behance.net pages to read project
              content for PDF generation. This access is used solely for the purpose
              of creating the PDF and nothing else.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">
              Third-Party Services
            </h2>
            <p>
              Behance2PDF does not use any third-party analytics, tracking, or
              advertising services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">
              Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. Any changes will
              be reflected on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">Contact</h2>
            <p>
              If you have any questions about this privacy policy, please contact us
              at{' '}
              <a
                href="mailto:nickhil.sethi@icloud.com"
                className="underline hover:text-white transition-colors"
              >
                nickhil.sethi@icloud.com
              </a>
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer className="text-center text-white/60 text-sm mt-12">
          <p>Made by Nikhil Sethi</p>
        </footer>
      </div>
    </div>
  )
}
