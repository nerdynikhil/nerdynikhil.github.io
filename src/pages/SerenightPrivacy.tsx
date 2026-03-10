import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function SerenightPrivacy() {
  return (
    <div className="min-h-screen bg-white text-gray-700 font-[system-ui,'-apple-system','BlinkMacSystemFont','SF_Pro_Display',sans-serif] leading-relaxed">
      <SEO
        title="Privacy Policy - Serenight"
        description="Privacy Policy for Serenight sleep tracking app. Your sleep data stays on your device."
        url="https://www.nerdynikhil.com/serenight/privacy"
      />

      <div className="max-w-3xl mx-auto px-5 py-10">
        <Link
          to="/serenight"
          className="text-[#5ac8fa] no-underline mb-8 inline-block hover:underline transition-colors"
        >
          &larr; Back to Serenight
        </Link>

        <h1 className="text-4xl font-bold text-[#5ac8fa] mb-5">Privacy Policy</h1>
        <p className="mb-8">
          <strong>Last updated:</strong> October 15, 2025
        </p>

        <h2 className="text-2xl font-semibold text-gray-600 mt-8 mb-4">Data Collection</h2>
        <p className="mb-4">
          Serenight accesses your sleep data through Apple HealthKit with your explicit permission. We only collect sleep-related information necessary to provide our service.
        </p>

        <h2 className="text-2xl font-semibold text-gray-600 mt-8 mb-4">Data Storage</h2>
        <p className="mb-4">
          All your sleep data remains on your device. We do not transmit, store, or share your personal health information on external servers.
        </p>

        <h2 className="text-2xl font-semibold text-gray-600 mt-8 mb-4">Data Usage</h2>
        <p className="mb-4">Your sleep data is used solely to:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Generate personalized sleep insights</li>
          <li>Display sleep quality metrics</li>
          <li>Provide sleep trend analysis</li>
          <li>Offer sleep improvement recommendations</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-600 mt-8 mb-4">Third-Party Services</h2>
        <p className="mb-4">
          Serenight may use AI services to generate insights about your sleep patterns. When using these features, anonymized data may be processed, but no personally identifiable information is shared.
        </p>

        <h2 className="text-2xl font-semibold text-gray-600 mt-8 mb-4">Data Security</h2>
        <p className="mb-4">
          We implement industry-standard security measures to protect your data. Since data remains on your device, it&apos;s protected by your device&apos;s security features.
        </p>

        <h2 className="text-2xl font-semibold text-gray-600 mt-8 mb-4">Your Rights</h2>
        <p className="mb-4">
          You can revoke HealthKit permissions at any time through your device&apos;s Settings app. You can also delete the app to remove all associated data.
        </p>

        <h2 className="text-2xl font-semibold text-gray-600 mt-8 mb-4">Contact</h2>
        <p className="mb-4">
          If you have questions about this privacy policy, please contact us through the App Store.
        </p>
      </div>
    </div>
  )
}
