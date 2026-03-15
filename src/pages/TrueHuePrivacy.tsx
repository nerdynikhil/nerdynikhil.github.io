import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function TrueHuePrivacy() {
  return (
    <>
      <SEO
        title="Privacy Policy - TrueHue"
        description="Privacy Policy for TrueHue - Learn how we protect your privacy with our local-first, no-tracking approach to mobile gaming."
        url="https://www.nerdynikhil.com/truehue/privacy"
        image="https://www.nerdynikhil.com/images/truehue/TrueHue.png"
      />

      <div className="overflow-x-hidden bg-white font-['Inter',-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif] leading-relaxed text-gray-800">
        {/* Navigation */}
        <nav className="fixed top-0 right-0 left-0 z-[1000] border-b border-gray-200 bg-white/95 backdrop-blur-[10px]">
          <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
            <div className="flex items-center gap-3">
              <img
                src="/images/truehue/TrueHue.png"
                alt="TrueHue Logo"
                className="h-8 w-8 rounded-lg object-contain transition-transform duration-150 hover:scale-105"
              />
              <span className="text-lg font-bold text-gray-900">TrueHue</span>
            </div>
            <div className="hidden gap-8 md:flex">
              <Link
                to="/truehue"
                className="font-medium text-gray-600 no-underline transition-colors duration-150 hover:text-[#4ECDC4]"
              >
                Home
              </Link>
            </div>
          </div>
        </nav>

        {/* Privacy Content */}
        <div className="mx-auto max-w-[800px] px-6 py-8 leading-[1.7] md:px-4">
          <Link
            to="/truehue"
            className="mb-8 inline-flex items-center gap-2 font-medium text-[#4ECDC4] no-underline transition-colors duration-150 before:content-['←'] before:text-lg hover:text-[#FF6B6B]"
          >
            Back to Home
          </Link>

          <div className="mb-12 pt-24 text-center md:pt-16">
            <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mb-2 text-lg text-gray-600">for TrueHue</p>
            <p className="text-sm text-gray-500">
              Effective Date: August 27, 2025
              <br />
              Last Updated: August 27, 2025
            </p>
          </div>

          <div className="text-gray-700">
            <h2 className="mt-8 mb-4 pt-4 text-2xl font-semibold text-gray-900">
              Introduction
            </h2>
            <p className="mb-4">
              TrueHue ("we," "our," or "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, and
              safeguard information when you use our iOS mobile application
              TrueHue (the "App").
            </p>

            <h2 className="mt-8 mb-4 pt-4 text-2xl font-semibold text-gray-900">
              Information We Collect
            </h2>

            <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-900">
              Information We DO NOT Collect
            </h3>
            <ul className="my-4 list-disc pl-6">
              <li className="mb-2">
                Personal identification information (name, email, phone number)
              </li>
              <li className="mb-2">
                Device identifiers for advertising purposes
              </li>
              <li className="mb-2">Location data</li>
              <li className="mb-2">Usage analytics or tracking data</li>
              <li className="mb-2">
                Any information transmitted to external servers
              </li>
            </ul>

            <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-900">
              Information Stored Locally on Your Device
            </h3>
            <p className="mb-4">
              TrueHue stores the following data locally on your device only:
            </p>

            {/* Highlight Box - Game Data */}
            <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-6">
              <h3 className="mt-0 text-xl font-semibold text-[#4ECDC4]">
                Game Data:
              </h3>
              <ul className="my-4 list-disc pl-6">
                <li className="mb-2">High scores for each game mode</li>
                <li className="mb-2">
                  Local leaderboard entries with player names you choose
                </li>
                <li className="mb-2">
                  Achievement unlock status and dates
                </li>
                <li className="mb-2">Game preferences and settings</li>
              </ul>
            </div>

            {/* Highlight Box - Game Center Data */}
            <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-6">
              <h3 className="mt-0 text-xl font-semibold text-[#4ECDC4]">
                Game Center Data:
              </h3>
              <ul className="my-4 list-disc pl-6">
                <li className="mb-2">
                  When you authenticate with Game Center, Apple handles your Game
                  Center profile according to Apple's Privacy Policy
                </li>
                <li className="mb-2">
                  We do not access or store your Game Center personal information
                </li>
              </ul>
            </div>

            <h2 className="mt-8 mb-4 pt-4 text-2xl font-semibold text-gray-900">
              How We Use Information
            </h2>
            <p className="mb-4">
              The locally stored game data is used solely to:
            </p>
            <ul className="my-4 list-disc pl-6">
              <li className="mb-2">Track your progress and high scores</li>
              <li className="mb-2">Display local leaderboards</li>
              <li className="mb-2">Show achievement progress</li>
              <li className="mb-2">
                Provide a personalized gaming experience
              </li>
            </ul>

            <h2 className="mt-8 mb-4 pt-4 text-2xl font-semibold text-gray-900">
              Data Storage and Security
            </h2>
            <ul className="my-4 list-disc pl-6">
              <li className="mb-2">
                All game data is stored locally on your device using iOS
                UserDefaults
              </li>
              <li className="mb-2">
                No data is transmitted to external servers or third parties
              </li>
              <li className="mb-2">
                Your data remains under your control at all times
              </li>
              <li className="mb-2">
                Data is automatically deleted when you uninstall the app
              </li>
            </ul>

            <h2 className="mt-8 mb-4 pt-4 text-2xl font-semibold text-gray-900">
              Game Center Integration
            </h2>
            <p className="mb-4">
              TrueHue integrates with Apple's Game Center service. When you
              choose to authenticate with Game Center:
            </p>
            <ul className="my-4 list-disc pl-6">
              <li className="mb-2">
                Authentication is handled entirely by Apple
              </li>
              <li className="mb-2">
                We only receive confirmation of successful authentication
              </li>
              <li className="mb-2">
                Your Game Center profile and data are governed by Apple's Privacy
                Policy
              </li>
              <li className="mb-2">
                You can opt out of Game Center at any time through iOS Settings
              </li>
            </ul>

            <h2 className="mt-8 mb-4 pt-4 text-2xl font-semibold text-gray-900">
              Third-Party Services
            </h2>
            <p className="mb-4">
              TrueHue does not integrate with any third-party analytics,
              advertising, or data collection services.
            </p>

            <h2 className="mt-8 mb-4 pt-4 text-2xl font-semibold text-gray-900">
              Children's Privacy
            </h2>
            <p className="mb-4">
              TrueHue is suitable for all ages. We do not knowingly collect any
              personal information from children or adults. All game data remains
              local to the device.
            </p>

            <h2 className="mt-8 mb-4 pt-4 text-2xl font-semibold text-gray-900">
              Your Privacy Rights
            </h2>
            <p className="mb-4">
              Since we don't collect personal data, you have complete control
              over your information:
            </p>
            <ul className="my-4 list-disc pl-6">
              <li className="mb-2">All data stays on your device</li>
              <li className="mb-2">
                You can reset game data through the app or by deleting and
                reinstalling
              </li>
              <li className="mb-2">
                No account creation or data sharing required
              </li>
            </ul>

            <h2 className="mt-8 mb-4 pt-4 text-2xl font-semibold text-gray-900">
              Changes to This Privacy Policy
            </h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy in the App
              Store and updating the "Last Updated" date.
            </p>

            {/* Contact Info Box */}
            <div className="my-8 rounded-lg bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] p-6 text-white">
              <h3 className="mt-0 text-xl font-semibold text-white">
                Contact Us
              </h3>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or TrueHue,
                please contact us at:
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:nikhilbarik@icloud.com"
                  className="text-white underline hover:no-underline"
                >
                  nikhilbarik@icloud.com
                </a>
                <br />
                <strong>Developer:</strong> Nikhil Barik
              </p>
            </div>

            <h2 className="mt-8 mb-4 pt-4 text-2xl font-semibold text-gray-900">
              Data Protection Compliance
            </h2>
            <p className="mb-4">This app is designed to comply with:</p>
            <ul className="my-4 list-disc pl-6">
              <li className="mb-2">
                Apple's App Store Review Guidelines
              </li>
              <li className="mb-2">General privacy best practices</li>
              <li className="mb-2">Minimal data collection principles</li>
            </ul>

            {/* Final Highlight Box */}
            <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-6">
              <p>
                <strong className="text-gray-900">
                  This Privacy Policy reflects TrueHue's commitment to user
                  privacy through a local-first, no-tracking approach to mobile
                  gaming.
                </strong>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 pt-16 pb-8 text-white">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="mb-8 grid gap-16 md:grid-cols-[1fr_2fr]">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <img
                    src="/images/truehue/TrueHue.png"
                    alt="TrueHue Logo"
                    className="h-8 w-8 rounded-lg object-contain brightness-110"
                  />
                  <span className="text-lg font-bold text-white">TrueHue</span>
                </div>
                <p className="leading-relaxed text-gray-400">
                  Master the art of color matching with this addictive puzzle
                  game.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-3">
                <div>
                  <h4 className="mb-4 text-lg font-semibold text-white">
                    Developer
                  </h4>
                  <p className="text-gray-400">
                    Created by{' '}
                    <strong className="text-white">Nikhil Barik</strong>
                  </p>
                </div>
                <div>
                  <h4 className="mb-4 text-lg font-semibold text-white">
                    Legal
                  </h4>
                  <Link
                    to="/truehue/privacy"
                    className="mb-2 block text-gray-400 no-underline transition-colors duration-150 hover:text-[#4ECDC4]"
                  >
                    Privacy Policy
                  </Link>
                </div>
                <div>
                  <h4 className="mb-4 text-lg font-semibold text-white">
                    Contact
                  </h4>
                  <a
                    href="mailto:nikhilbarik@icloud.com"
                    className="block text-gray-400 no-underline transition-colors duration-150 hover:text-[#4ECDC4]"
                  >
                    nikhilbarik@icloud.com
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
              <p>&copy; 2024 TrueHue. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
