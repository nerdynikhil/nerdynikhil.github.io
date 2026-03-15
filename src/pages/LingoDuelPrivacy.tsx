import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function LingoDuelPrivacy() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1d1d1f] font-[system-ui,'-apple-system','BlinkMacSystemFont','SF_Pro_Display',sans-serif] leading-normal">
      <SEO
        title="Privacy Policy - LingoDuel"
        description="Privacy Policy for LingoDuel - Learn how we protect your privacy while you master languages through AI-powered conversations."
        url="https://www.nerdynikhil.com/lingoduel/privacy"
      />

      {/* Navigation */}
      <nav className="bg-white border-b border-[#e5e5e7]">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
          <Link to="/lingoduel" className="text-xl font-semibold text-[#1d1d1f] no-underline">
            LingoDuel
          </Link>
          <div className="flex items-center gap-8">
            <Link to="/lingoduel" className="text-sm font-medium text-[#6b7280] no-underline hover:text-[#1d1d1f] transition-colors">
              Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Privacy Content */}
      <section className="py-28 min-h-screen">
        <div className="max-w-3xl mx-auto px-5 text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1d1d1f] mb-4">Privacy Policy</h1>
          <p className="text-[#6e6e73]">Last updated: December 2024</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-12 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.05)]">
          <h2 className="text-xl font-semibold text-[#1f2937] mb-4">Information We Collect</h2>
          <p className="text-[#6b7280] mb-6">
            LingoDuel is committed to protecting your privacy. We collect minimal information necessary to provide our language learning services:
          </p>
          <ul className="list-disc pl-5 mb-8 space-y-2 text-[#6b7280]">
            <li>Practice session data to track your progress</li>
            <li>Language preferences and learning goals</li>
            <li>Basic app usage statistics for improvement</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#1f2937] mb-4">How We Use Your Information</h2>
          <p className="text-[#6b7280] mb-6">Your information is used solely to:</p>
          <ul className="list-disc pl-5 mb-8 space-y-2 text-[#6b7280]">
            <li>Personalize your learning experience</li>
            <li>Track and display your progress</li>
            <li>Improve our AI conversation technology</li>
            <li>Provide customer support when needed</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#1f2937] mb-4">Data Security</h2>
          <p className="text-[#6b7280] mb-8">
            We implement industry-standard security measures to protect your personal information. All data is encrypted in transit and at rest.
          </p>

          <h2 className="text-xl font-semibold text-[#1f2937] mb-4">Third-Party Services</h2>
          <p className="text-[#6b7280] mb-8">
            LingoDuel may use third-party services for analytics and app functionality. These services operate under their own privacy policies.
          </p>

          <h2 className="text-xl font-semibold text-[#1f2937] mb-4">Your Rights</h2>
          <p className="text-[#6b7280] mb-6">You have the right to:</p>
          <ul className="list-disc pl-5 mb-8 space-y-2 text-[#6b7280]">
            <li>Access your personal data</li>
            <li>Request data deletion</li>
            <li>Opt out of data collection</li>
            <li>Export your learning progress</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#1f2937] mb-4">Contact Us</h2>
          <p className="text-[#6b7280] mb-4">If you have questions about this privacy policy, please contact us:</p>
          <p className="text-[#3b82f6] font-medium">
            <a href="mailto:nikhilbarik@icloud.com" className="text-[#3b82f6] no-underline hover:underline">
              nikhilbarik@icloud.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#e5e5e7] py-12">
        <div className="max-w-3xl mx-auto px-5">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 pb-10 border-b border-[#e5e5e7]">
            <span className="text-xl font-semibold text-[#1d1d1f] mb-4 sm:mb-0">LingoDuel</span>
            <p className="text-sm text-[#6e6e73]">
              Master languages through AI-powered conversations in realistic scenarios.
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-[#6b7280]">&copy; 2024 LingoDuel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
