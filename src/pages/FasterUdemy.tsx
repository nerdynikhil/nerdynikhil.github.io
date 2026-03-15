import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function FasterUdemy() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-[system-ui,'-apple-system','Segoe_UI','Roboto','Helvetica_Neue','Arial',sans-serif] leading-relaxed antialiased">
      <SEO
        title="Faster Udemy - Chrome Extension"
        description="Speed up your Udemy video playback. Adjust playback rate from 0.25x to 5x. Because time is precious."
        url="https://www.nerdynikhil.com/faster-udemy"
      />

      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/faster-udemy" className="font-bold text-xl text-gray-900 no-underline flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
            Faster Udemy
          </Link>
          <nav>
            <a href="https://github.com/nerdynikhil" target="_blank" rel="noopener noreferrer" className="text-gray-500 no-underline text-sm font-medium hover:text-gray-900 transition-colors">
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 px-6 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-800 mb-6">
            Chrome Extension 1.0
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight mb-6 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-500 bg-clip-text text-transparent">
            Take control of your learning speed.
          </h1>
          <p className="text-xl text-gray-500 mb-10 max-w-xl mx-auto">
            Stop wasting time on slow explanations. Adjust Udemy playback speed from 0.25x up to 5x with a simple, private extension.
          </p>
          <a
            href="https://chromewebstore.google.com/category/extensions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg text-base font-medium h-12 px-8 bg-gray-900 text-gray-100 no-underline hover:opacity-90 transition-opacity shadow-md"
          >
            Add to Chrome
          </a>
        </section>

        {/* Features */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto px-6 pb-16">
          {/* Precision Control */}
          <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4 text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Precision Control</h3>
            <p className="text-gray-500 text-sm">Fine-tune video speed from 0.25x all the way up to 5x. Find the perfect pace for every instructor.</p>
          </div>

          {/* Set & Forget */}
          <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4 text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Set &amp; Forget</h3>
            <p className="text-gray-500 text-sm">Your preferred speed is saved automatically. Open any video, and it plays exactly how you like it.</p>
          </div>

          {/* Private & Secure */}
          <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4 text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Private &amp; Secure</h3>
            <p className="text-gray-500 text-sm">No tracking, no analytics, no data collection. Your viewing habits stay on your device.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; 2025 Faster Udemy. Built by nerdynikhil.</p>
          <div className="flex gap-6">
            <Link to="/faster-udemy/privacy" className="text-gray-500 no-underline hover:text-gray-900 hover:underline transition-colors">
              Privacy Policy
            </Link>
            <a href="https://github.com/nerdynikhil/faster-udemy" target="_blank" rel="noopener noreferrer" className="text-gray-500 no-underline hover:text-gray-900 hover:underline transition-colors">
              Source Code
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
