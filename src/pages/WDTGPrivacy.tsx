import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function WDTGPrivacy() {
  return (
    <>
      <SEO
        title="Privacy Policy - WDTG"
        description="Privacy Policy for WDTG (Where Did The Time Go?) - Learn how we handle your data with our privacy-first approach."
        url="https://www.nerdynikhil.com/wdtg/privacy"
      />

      <div className="mx-auto max-w-[800px] px-5 py-10 font-['-apple-system',BlinkMacSystemFont,'SF_Pro_Display',sans-serif] leading-relaxed text-[#333]">
        <Link
          to="/wdtg"
          className="mb-8 inline-block text-[#6366F1] no-underline hover:underline"
        >
          &larr; Back to WDTG
        </Link>

        <h1 className="mb-5 text-3xl font-bold text-[#6366F1]">
          Privacy Policy
        </h1>
        <p className="mb-4">
          <strong>Last updated:</strong> December 11, 2024
        </p>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#444]">
          Overview
        </h2>
        <p className="mb-4">
          WDTG (Where Did The Time Go?) is committed to protecting your privacy.
          This policy explains how we handle your data.
        </p>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#444]">
          Data Collection
        </h2>
        <p className="mb-4">
          WDTG collects only the information you choose to log:
        </p>
        <ul className="my-2.5 list-disc pl-6">
          <li className="my-2">
            Time entries (activity type, duration, date, optional notes)
          </li>
          <li className="my-2">Categories you create or modify</li>
          <li className="my-2">App preferences and settings</li>
        </ul>
        <p className="mb-4">
          <strong>We do not collect:</strong>
        </p>
        <ul className="my-2.5 list-disc pl-6">
          <li className="my-2">
            Personal information (name, email, phone number)
          </li>
          <li className="my-2">Location data</li>
          <li className="my-2">Device identifiers</li>
          <li className="my-2">Usage analytics or tracking data</li>
        </ul>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#444]">
          Data Storage
        </h2>
        <p className="mb-4">
          All your data is stored in your private iCloud account using Apple's
          CloudKit framework:
        </p>
        <ul className="my-2.5 list-disc pl-6">
          <li className="my-2">Data is encrypted and secured by Apple</li>
          <li className="my-2">Stored in your private iCloud database</li>
          <li className="my-2">Only accessible by you and your devices</li>
          <li className="my-2">We have no access to your data</li>
        </ul>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#444]">
          Data Sync
        </h2>
        <p className="mb-4">
          WDTG uses iCloud to automatically sync your data across your devices:
        </p>
        <ul className="my-2.5 list-disc pl-6">
          <li className="my-2">Sync requires an active iCloud account</li>
          <li className="my-2">
            App works offline and syncs when connected
          </li>
          <li className="my-2">
            You can disable iCloud in your device Settings
          </li>
          <li className="my-2">All sync is end-to-end encrypted</li>
        </ul>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#444]">
          Data Usage
        </h2>
        <p className="mb-4">
          Your time tracking data is used solely within the app to:
        </p>
        <ul className="my-2.5 list-disc pl-6">
          <li className="my-2">
            Display your time entries and visualizations
          </li>
          <li className="my-2">Generate insights and statistics</li>
          <li className="my-2">Create charts and reports</li>
          <li className="my-2">Sync across your devices</li>
        </ul>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#444]">
          Third-Party Services
        </h2>
        <p className="mb-4">
          WDTG does not use any third-party analytics, advertising, or tracking
          services. The only external service used is Apple's iCloud for data
          sync, which is governed by Apple's privacy policy.
        </p>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#444]">
          Data Sharing
        </h2>
        <p className="mb-4">
          We do not share, sell, or disclose your data to anyone. Your time
          tracking information remains private to you.
        </p>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#444]">
          Data Retention
        </h2>
        <p className="mb-4">Your data is retained:</p>
        <ul className="my-2.5 list-disc pl-6">
          <li className="my-2">
            Locally on your device until you delete the app
          </li>
          <li className="my-2">
            In your iCloud account as long as you have the app installed
          </li>
          <li className="my-2">
            You can delete individual entries or all data at any time
          </li>
        </ul>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#444]">
          Your Rights
        </h2>
        <p className="mb-4">
          You have complete control over your data:
        </p>
        <ul className="my-2.5 list-disc pl-6">
          <li className="my-2">Access: View all your data within the app</li>
          <li className="my-2">Modify: Edit or delete any time entry</li>
          <li className="my-2">
            Export: Delete individual entries or categories
          </li>
          <li className="my-2">
            Delete: Uninstall the app to remove all local data
          </li>
          <li className="my-2">
            Disable Sync: Turn off iCloud in device Settings
          </li>
        </ul>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#444]">
          Children's Privacy
        </h2>
        <p className="mb-4">
          WDTG does not knowingly collect data from children under 13. The app is
          designed for general audiences and does not target children.
        </p>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#444]">
          Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this privacy policy from time to time. Any changes will
          be reflected in the app and on this page with an updated "Last updated"
          date.
        </p>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#444]">
          Contact
        </h2>
        <p className="mb-4">
          If you have questions about this privacy policy or how your data is
          handled, please contact:
        </p>
        <p className="mb-4">
          <strong>Email:</strong> hello@nerdynikhil.com
        </p>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#444]">Legal</h2>
        <p className="mb-4">
          This privacy policy is governed by the laws of India. By using WDTG,
          you agree to this privacy policy.
        </p>
      </div>
    </>
  )
}
