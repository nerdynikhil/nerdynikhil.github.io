import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function EtaTubePrivacy() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-[system-ui,'-apple-system','Segoe_UI',sans-serif]">
      <SEO
        title="Privacy Policy - EtaTube"
        description="Privacy policy for EtaTube Chrome extension. We do not collect any user data."
        url="https://www.nerdynikhil.com/eta-tube/privacy"
      />

      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Back Link */}
        <Link
          to="/eta-tube"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-700 transition-colors mb-10"
        >
          <span>&larr;</span>
          <span>Back to EtaTube</span>
        </Link>

        <h1 className="text-4xl font-bold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-10">EtaTube - YouTube End Time Extension</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          {/* Introduction */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Introduction</h2>
            <p>
              EtaTube ("we", "our", or "the extension") is a Chrome extension that
              displays the estimated end time of YouTube videos. This Privacy Policy
              explains how we handle your information.
            </p>
          </section>

          {/* Information We DO NOT Collect */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Information We DO NOT Collect
            </h2>
            <p>EtaTube does not collect, store, or transmit:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Personal identification information</li>
              <li>Browsing history or video watch history</li>
              <li>Device identifiers or advertising IDs</li>
              <li>Usage analytics or behavioral data</li>
              <li>Any data to external servers</li>
            </ul>
          </section>

          {/* How It Works */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              How It Works
            </h2>
            <p>
              EtaTube reads the current playback position, duration, and playback
              speed of the YouTube video you're watching to calculate and display the
              estimated end time. All calculations happen locally in your browser. No
              data is sent anywhere.
            </p>
          </section>

          {/* Permissions */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Permissions</h2>
            <p>
              The extension requires access to YouTube pages to read video playback
              information. This permission is used solely for calculating the end time
              and nothing else.
            </p>
          </section>

          {/* Data Storage */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Data Storage
            </h2>
            <p>
              EtaTube does not store any data, locally or remotely. It computes the
              end time in real-time and displays it on the page. When you navigate
              away, nothing persists.
            </p>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Third-Party Services
            </h2>
            <p>
              EtaTube does not integrate with any third-party analytics, advertising,
              or tracking services. The extension makes no external network requests.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Children's Privacy
            </h2>
            <p>
              EtaTube does not collect personal information from anyone, including
              children under 13. The extension is safe for users of all ages.
            </p>
          </section>

          {/* Open Source */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Open Source</h2>
            <p>
              EtaTube is open source. You can review the complete source code on{' '}
              <a
                href="https://github.com/nickhil-sethi/eta-tube"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800 transition-colors"
              >
                GitHub
              </a>{' '}
              to verify our privacy practices.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be
              posted on this page.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us
              at{' '}
              <a
                href="mailto:nickhil.sethi@icloud.com"
                className="text-blue-600 underline hover:text-blue-800 transition-colors"
              >
                nickhil.sethi@icloud.com
              </a>
            </p>
          </section>

          {/* Data Protection Compliance */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Data Protection Compliance
            </h2>
            <p>
              As EtaTube does not collect, process, or store any personal data, it is
              inherently compliant with data protection regulations including GDPR,
              CCPA, and other applicable privacy laws.
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-100 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>Made by Nikhil Sethi</p>
        </footer>
      </div>
    </div>
  )
}
