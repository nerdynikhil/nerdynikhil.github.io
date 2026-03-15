import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function SubscriptionlyPrivacy() {
  return (
    <>
      <SEO
        title="Privacy Policy - Subscriptionly"
        description="Privacy Policy for Subscriptionly - A clean and simple subscription management app for iOS."
        url="https://www.nerdynikhil.com/subscriptionly/privacy"
      />

      <div className="mx-auto max-w-[800px] bg-[#f8f9fa] px-5 py-10 font-['-apple-system',BlinkMacSystemFont,'SF_Pro_Display',sans-serif] leading-relaxed text-[#333]">
        <Link
          to="/subscriptionly"
          className="mb-8 inline-block text-[#007aff] no-underline hover:underline"
        >
          &larr; Back to Subscriptionly
        </Link>

        <h1 className="mb-8 text-3xl font-bold text-[#667eea]">
          Privacy Policy
        </h1>

        <p className="mb-4">
          <strong>Last Updated:</strong> September 12, 2025
        </p>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#555]">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          Subscriptionly is designed with privacy in mind. All your subscription
          data is stored locally on your device using Core Data. We do not
          collect, store, or transmit any personal information to external
          servers.
        </p>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#555]">
          2. Data Storage
        </h2>
        <p className="mb-4">
          All subscription information you enter into the app, including:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>Subscription names and descriptions</li>
          <li>Billing amounts and cycles</li>
          <li>Start dates and renewal dates</li>
          <li>Custom app icons and settings</li>
        </ul>
        <p className="mb-4">
          is stored locally on your device and is not shared with any third
          parties.
        </p>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#555]">
          3. iCloud Sync (Future Feature)
        </h2>
        <p className="mb-4">
          If we implement iCloud synchronization in future updates, your data
          will be synced through Apple's iCloud service according to Apple's
          privacy policies. This sync will be optional and can be disabled in the
          app settings.
        </p>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#555]">
          4. Analytics
        </h2>
        <p className="mb-4">
          We do not collect any analytics or usage data. Your usage of the app is
          completely private.
        </p>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#555]">
          5. Third-Party Services
        </h2>
        <p className="mb-4">
          Subscriptionly does not integrate with any third-party services or APIs
          that would have access to your personal data.
        </p>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#555]">
          6. Data Security
        </h2>
        <p className="mb-4">
          Since all data is stored locally on your device, the security of your
          information depends on your device's security measures (such as device
          passcode, Face ID, or Touch ID).
        </p>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#555]">
          7. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this privacy policy from time to time. Any changes will
          be reflected in the app and on this page with an updated "Last Updated"
          date.
        </p>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#555]">
          8. Contact Us
        </h2>
        <p className="mb-4">
          If you have any questions about this privacy policy, please contact us
          through the App Store review system or through our GitHub repository.
        </p>
      </div>
    </>
  )
}
