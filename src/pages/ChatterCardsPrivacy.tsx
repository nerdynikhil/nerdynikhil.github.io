import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function ChatterCardsPrivacy() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-900 font-[system-ui,'-apple-system','SF_Pro_Display','SF_Pro_Text','Helvetica_Neue',sans-serif]">
      <SEO
        title="Privacy Policy - ChatterCards"
        description="Privacy policy for ChatterCards IELTS Speaking practice app. We respect your privacy and do not collect personal data."
        url="https://www.nerdynikhil.com/chattercards/privacy"
      />

      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Back Link */}
        <Link
          to="/chattercards"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-700 transition-colors mb-10"
        >
          <span>&larr;</span>
          <span>Back to ChatterCards</span>
        </Link>

        <h1 className="text-4xl font-bold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-10">ChatterCards - IELTS Speaking Practice</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          {/* Introduction */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Introduction</h2>
            <p>
              ChatterCards ("we", "our", or "the app") is committed to protecting your
              privacy. This Privacy Policy explains how we handle information when you
              use our iOS application.
            </p>
          </section>

          {/* Information We DO NOT Collect */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Information We DO NOT Collect
            </h2>
            <p>ChatterCards does not collect, store, or transmit:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Personal identification information</li>
              <li>Email addresses or contact information</li>
              <li>Location data</li>
              <li>Device identifiers or advertising IDs</li>
              <li>Usage analytics or behavioral data</li>
              <li>Any form of user-generated content</li>
            </ul>
          </section>

          {/* Information Stored Locally */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Information Stored Locally
            </h2>
            <p>
              The app stores your progress and preferences (such as completed cards and
              favorite topics) locally on your device using on-device storage. This
              data never leaves your device and is not accessible to us or any third
              party.
            </p>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              How We Use Information
            </h2>
            <p>
              Since we do not collect any data, there is no information for us to use,
              share, or sell. The app functions entirely offline and does not require an
              internet connection.
            </p>
          </section>

          {/* Data Storage and Security */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Data Storage and Security
            </h2>
            <p>
              All app data is stored locally on your device and protected by your
              device's built-in security features. If you delete the app, all locally
              stored data is permanently removed.
            </p>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Third-Party Services
            </h2>
            <p>
              ChatterCards does not integrate with any third-party analytics,
              advertising, or tracking services. We do not share any data with third
              parties.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Children's Privacy
            </h2>
            <p>
              Our app does not collect personal information from anyone, including
              children under 13. The app is safe for users of all ages.
            </p>
          </section>

          {/* Your Privacy Rights */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Your Privacy Rights
            </h2>
            <p>
              Since we don't collect any data, there is no personal data to access,
              modify, or delete from our end. You can clear all locally stored app data
              by deleting the app from your device.
            </p>
          </section>

          {/* IELTS Trademark */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              IELTS Trademark
            </h2>
            <p>
              IELTS is a registered trademark of University of Cambridge ESOL, the
              British Council, and IDP Education Australia. ChatterCards is not
              affiliated with or endorsed by any of these organizations.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be
              posted on this page. We encourage you to review this page periodically.
            </p>
          </section>

          {/* Contact */}
          <section>
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
              <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy, please
                contact us at{' '}
                <a
                  href="mailto:nickhil.sethi@icloud.com"
                  className="underline hover:text-blue-100 transition-colors"
                >
                  nickhil.sethi@icloud.com
                </a>
              </p>
            </div>
          </section>

          {/* Data Protection Compliance */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Data Protection Compliance
            </h2>
            <p>
              As ChatterCards does not collect, process, or store any personal data, it
              is inherently compliant with data protection regulations including GDPR,
              CCPA, and other applicable privacy laws.
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>Made by Nikhil Sethi</p>
        </footer>
      </div>
    </div>
  )
}
