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
          <p className="text-[#6e6e73]">Last updated: 1 November 2026</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-12 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.05)]">
          <p className="text-[#6b7280] mb-8">
            LingoDuel is a language app where you practise real conversations with an AI partner. There are no accounts,
            no ads and no tracking. This policy explains exactly what leaves your device and why.
          </p>

          <h2 className="text-xl font-semibold text-[#1f2937] mb-4">What stays on your device</h2>
          <ul className="list-disc pl-5 mb-8 space-y-2 text-[#6b7280]">
            <li>Your progress: duels played, scores, XP, streak and saved phrases</li>
            <li>Your settings: language, level, daily goal and reminder time</li>
            <li>Daily reminders are scheduled locally on your device</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#1f2937] mb-4">What is sent to our server during a duel</h2>
          <p className="text-[#6b7280] mb-6">
            To reply to you and score your lines, the app sends the following to the LingoDuel API, hosted on Vercel:
          </p>
          <ul className="list-disc pl-5 mb-8 space-y-2 text-[#6b7280]">
            <li>The lines you type or say in the duel, and the conversation so far</li>
            <li>The scene, the roles, the language you are practising and your level</li>
            <li>A random identifier created when you install the app, used only for rate limits and abuse prevention</li>
            <li>An Apple App Attest signature that proves the request came from the genuine app</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#1f2937] mb-4">AI providers</h2>
          <p className="text-[#6b7280] mb-8">
            Our server passes your duel lines to third-party AI models through the Vercel AI Gateway, currently DeepSeek and
            Anthropic, to generate your partner&apos;s reply, your score and feedback. The app asks for your permission before
            your first duel. We don&apos;t sell this data or use it for advertising, and we don&apos;t store your conversations:
            our logs keep only the random identifier, the request type and token counts, for up to 30 days. The AI providers
            process the text under their own terms and privacy policies.
          </p>

          <h2 className="text-xl font-semibold text-[#1f2937] mb-4">Voice</h2>
          <p className="text-[#6b7280] mb-8">
            When you hold the mic, Apple&apos;s speech recognition turns your voice into text. Where your device supports it,
            this happens entirely on your device; otherwise Apple processes it under Apple&apos;s privacy policy. We never
            receive or store audio, only the resulting text when you send it.
          </p>

          <h2 className="text-xl font-semibold text-[#1f2937] mb-4">Purchases</h2>
          <p className="text-[#6b7280] mb-8">
            LingoDuel Plus is sold through the App Store. Apple handles payment; we never see your payment details.
            RevenueCat manages subscription status using an anonymous app user ID and your purchase history.
          </p>

          <h2 className="text-xl font-semibold text-[#1f2937] mb-4">Camera</h2>
          <p className="text-[#6b7280] mb-8">
            The optional &ldquo;What&apos;s around me&rdquo; scanner uses the camera to recognise objects on your device so
            you can learn their names. Images are not uploaded; only the recognised word is sent to our server to translate it.
          </p>

          <h2 className="text-xl font-semibold text-[#1f2937] mb-4">Children</h2>
          <p className="text-[#6b7280] mb-8">
            LingoDuel is not directed at children under 13 and we don&apos;t knowingly collect personal information from them.
          </p>

          <h2 className="text-xl font-semibold text-[#1f2937] mb-4">Your choices</h2>
          <ul className="list-disc pl-5 mb-8 space-y-2 text-[#6b7280]">
            <li>Reset all progress in Settings, or delete the app to remove everything stored on your device</li>
            <li>Ask us to delete any server logs linked to your install identifier by emailing us</li>
            <li>Turn reminders off at any time in Settings</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#1f2937] mb-4">Contact</h2>
          <p className="text-[#6b7280] mb-4">Questions about this policy or your data:</p>
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
            <p className="text-sm text-[#6b7280]">&copy; 2026 Nikhil Kumar Barik. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
