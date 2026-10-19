import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'

export default function Sector9Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy - Sector9"
        description="Privacy Policy for Sector9, the macOS disk space analyzer. Scans run on your Mac. No account, no analytics, and your file names never leave your Mac."
        url="https://www.nerdynikhil.com/sector9/privacy"
        image="https://www.nerdynikhil.com/sector9/og-image.png"
      />

      <div className="mx-auto max-w-[800px] px-5 py-10 font-['-apple-system',BlinkMacSystemFont,'SF_Pro_Display',sans-serif] leading-relaxed text-[#333]">
        <Link
          to="/sector9"
          className="mb-8 inline-block text-[#d9431f] no-underline hover:underline"
        >
          &larr; Back to Sector9
        </Link>

        <h1 className="mb-5 text-3xl font-bold text-[#ff5c39]">
          Privacy Policy
        </h1>
        <p className="mb-4">
          <strong>Effective date:</strong> October 19, 2026
        </p>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#444]">
          Overview
        </h2>
        <p className="mb-4">
          Sector9 is a disk space analyzer for macOS. It looks at what is on
          your disk so it can tell you what each thing is and what it would cost
          to get back. That is personal information, so the short version is
          this: Sector9 does all of its work on your Mac, and what it finds
          stays there.
        </p>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#444]">
          What Sector9 looks at
        </h2>
        <p className="mb-4">
          To build its picture of your disk, Sector9 reads:
        </p>
        <ul className="my-2.5 list-disc pl-6">
          <li className="my-2">
            File and folder names, paths, sizes and dates
          </li>
          <li className="my-2">
            Which apps are installed, so it knows which caches and leftovers to
            look for
          </li>
          <li className="my-2">
            Basic project details, such as when you last opened a project
          </li>
        </ul>
        <p className="mb-4">
          All of this is read and processed on your Mac. None of it is sent to
          me or to anyone else.
        </p>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#444]">
          What Sector9 does not collect
        </h2>
        <ul className="my-2.5 list-disc pl-6">
          <li className="my-2">
            No account. There is nothing to sign up for, and no name or email is
            needed to use the app.
          </li>
          <li className="my-2">
            No analytics or telemetry. Sector9 does not report how you use it or
            what it finds.
          </li>
          <li className="my-2">
            No file names, paths or scan results ever leave your Mac.
          </li>
          <li className="my-2">No advertising and no tracking.</li>
        </ul>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#444]">
          Full Disk Access
        </h2>
        <p className="mb-4">
          Sector9 works best with Full Disk Access, because macOS hides some of
          the largest caches and app containers from apps that do not have it.
          If you grant it, Sector9 uses it only to measure and explain what is
          on your disk, on your Mac. You can turn it off at any time in System
          Settings &rarr; Privacy &amp; Security &rarr; Full Disk Access.
        </p>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#444]">
          Ask Sector9
        </h2>
        <p className="mb-4">
          When you ask Sector9 a question, the answer is built from your own
          scan, on your Mac. Your questions and the answers are not sent
          anywhere.
        </p>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#444]">
          Data Storage
        </h2>
        <p className="mb-4">
          Sector9 keeps a history of your scans so it can show you what grew
          over time. This history is stored locally, in the app&apos;s folder
          inside <code>~/Library/Application Support</code> on your Mac. It is
          not synced or uploaded.
        </p>
        <p className="mb-4">
          When you clean something up, Sector9 moves it to the macOS Trash. It
          stays on your Mac until you empty the Trash yourself.
        </p>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#444]">
          When Sector9 uses the network
        </h2>
        <p className="mb-4">
          Scanning, explaining and cleaning all work offline. Sector9 only
          connects to the internet for two things, if and when they are enabled:
        </p>
        <ul className="my-2.5 list-disc pl-6">
          <li className="my-2">Checking for and downloading app updates</li>
          <li className="my-2">Checking a Pro licence</li>
        </ul>
        <p className="mb-4">
          These requests carry only what that check needs. They never include
          your file names, paths or scan results.
        </p>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#444]">
          The waitlist on this website
        </h2>
        <p className="mb-4">
          The waitlist form on the Sector9 page does not send your email
          address anywhere yet. It stays in your browser tab and is gone when
          you leave the page.
        </p>
        <p className="mb-4">
          The Sector9 page is part of my personal website, nerdynikhil.com,
          which uses standard page-view analytics (Vercel Analytics and Google
          Analytics). That only covers visits to the website. It has nothing to
          do with the Sector9 app.
        </p>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#444]">
          Data Sharing
        </h2>
        <p className="mb-4">
          I do not share, sell or disclose your data to anyone. Your scan data
          never reaches me in the first place, so there is nothing to share.
        </p>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#444]">
          Your Control
        </h2>
        <ul className="my-2.5 list-disc pl-6">
          <li className="my-2">
            Remove Full Disk Access at any time in System Settings
          </li>
          <li className="my-2">
            Delete Sector9&apos;s folder in{' '}
            <code>~/Library/Application Support</code> to clear your scan
            history
          </li>
          <li className="my-2">
            Restore anything you cleaned from the Trash with Undo or
            Finder&apos;s &ldquo;Put Back&rdquo;
          </li>
          <li className="my-2">
            Uninstall the app and delete its folder to remove everything
          </li>
        </ul>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#444]">
          Children&apos;s Privacy
        </h2>
        <p className="mb-4">
          Sector9 does not collect personal data from anyone, including children
          under 13.
        </p>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#444]">
          Changes to This Policy
        </h2>
        <p className="mb-4">
          If this policy changes, the new version will be posted on this page
          with a new effective date.
        </p>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#444]">
          Contact
        </h2>
        <p className="mb-4">
          If you have questions about this policy or how Sector9 handles your
          data, email me:
        </p>
        <p className="mb-4">
          <strong>Email:</strong>{' '}
          <a
            href="mailto:nklmarch17@gmail.com?subject=Sector9%20Privacy"
            className="text-[#d9431f] no-underline hover:underline"
          >
            nklmarch17@gmail.com
          </a>
        </p>

        <h2 className="mt-8 mb-4 text-xl font-semibold text-[#444]">Legal</h2>
        <p className="mb-4">
          This privacy policy is governed by the laws of India. By using
          Sector9, you agree to this privacy policy.
        </p>
      </div>
    </>
  )
}
