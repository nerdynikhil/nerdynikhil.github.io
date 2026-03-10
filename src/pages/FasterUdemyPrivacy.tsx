import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function FasterUdemyPrivacy() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-[system-ui,'-apple-system','Segoe_UI','Roboto','Helvetica_Neue','Arial',sans-serif] leading-relaxed antialiased">
      <SEO
        title="Privacy Policy - Faster Udemy"
        description="Privacy Policy for Faster Udemy Chrome Extension - Learn how we protect your privacy with our local-first, no-tracking approach."
        url="https://www.nerdynikhil.com/faster-udemy/privacy"
      />

      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/faster-udemy" className="font-bold text-xl text-gray-900 no-underline flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
            Faster Udemy
          </Link>
          <nav>
            <Link to="/faster-udemy" className="text-gray-500 no-underline text-sm font-medium hover:text-gray-900 transition-colors">
              Home
            </Link>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link to="/faster-udemy" className="inline-flex items-center gap-2 text-gray-500 no-underline text-sm font-medium mb-8 hover:text-gray-900 transition-colors">
            &larr; Back to Home
          </Link>

          <h1 className="text-4xl font-bold mb-2 tracking-tight">Privacy Policy</h1>
          <div className="text-gray-500 text-sm mb-12 pb-8 border-b border-gray-200">
            <p>Effective Date: January 2025 &bull; Last Updated: January 2025</p>
          </div>

          <div className="space-y-0">
            <p className="text-gray-500 mb-4">
              Faster Udemy (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you use our Chrome browser extension Faster Udemy (the &ldquo;Extension&rdquo;).
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Information We Collect</h2>

            <h3 className="text-lg font-semibold mt-6 mb-3">Information We DO NOT Collect</h3>
            <ul className="list-disc pl-6 mb-6 space-y-1 text-gray-500">
              <li>Personal identification information (name, email, phone number)</li>
              <li>Browsing history or website data</li>
              <li>Video content or course information</li>
              <li>Usage analytics or tracking data</li>
              <li>Any information transmitted to external servers</li>
              <li>Location data</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-3">Information Stored Locally</h3>
            <p className="text-gray-500 mb-4">Faster Udemy stores the following data locally using Chrome&apos;s sync storage:</p>

            <div className="bg-gray-100 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold mb-3 mt-0">Playback Speed Preference</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-500">
                <li>Your preferred video playback speed (e.g., 1.5x, 2x)</li>
                <li>This setting is stored in Chrome&apos;s sync storage</li>
                <li>Data is synced across your Chrome browsers if you&apos;re signed into Chrome</li>
                <li>No personal information is associated with this data</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-4">How We Use Information</h2>
            <p className="text-gray-500 mb-4">The stored playback speed preference is used solely to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-1 text-gray-500">
              <li>Remember your preferred playback speed setting</li>
              <li>Apply your preferred speed when you open the extension</li>
              <li>Provide a consistent experience across browser sessions</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Data Storage and Security</h2>
            <ul className="list-disc pl-6 mb-6 space-y-1 text-gray-500">
              <li>All data is stored locally using Chrome&apos;s built-in storage API (chrome.storage.sync)</li>
              <li>No data is transmitted to external servers or third parties</li>
              <li>Your playback speed preference remains under your complete control</li>
              <li>All data is automatically deleted when you uninstall the extension</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Third-Party Services</h2>
            <p className="text-gray-500 mb-4">
              Faster Udemy does not integrate with any third-party analytics, advertising, or data collection services. The extension operates entirely locally and does not communicate with any external servers.
            </p>

            <div className="bg-gray-900 text-gray-100 rounded-lg p-8 my-12">
              <h3 className="text-lg font-semibold mb-3 mt-0 text-gray-100">Contact Us</h3>
              <p className="text-gray-100/90 mb-2">If you have any questions about this Privacy Policy or Faster Udemy, please contact us at:</p>
              <p className="text-gray-100/90">
                <strong>Email:</strong>{' '}
                <a href="mailto:nikhilbarik@icloud.com" className="text-white underline">nikhilbarik@icloud.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8 px-6">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-500">
          <p>&copy; 2025 Faster Udemy. Built by nerdynikhil.</p>
        </div>
      </footer>
    </div>
  )
}
