import SEO from '../components/SEO'

export default function EtaTube() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-[system-ui,'-apple-system','Segoe_UI',sans-serif]">
      <SEO
        title="EtaTube - Know When Your Video Ends"
        description="A lightweight Chrome extension that shows you exactly when your YouTube video will finish. No tracking, no bloat."
        url="https://www.nerdynikhil.com/eta-tube"
        image="https://www.nerdynikhil.com/images/eta-tube/store-icon-128x128.png"
      />

      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-3">
          <img
            src="/images/eta-tube/store-icon-128x128.png"
            alt="EtaTube Icon"
            className="w-8 h-8 rounded-lg"
          />
          <span className="font-semibold text-lg">EtaTube</span>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <span className="inline-block bg-gray-100 text-gray-600 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          Chrome Extension 1.0
        </span>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4">
          Know when your video ends.
        </h1>
        <p className="text-xl text-gray-500 max-w-xl mx-auto mb-10">
          A lightweight Chrome extension that shows you exactly when your YouTube
          video will finish. No tracking, no bloat.
        </p>
        <a
          href="https://chromewebstore.google.com/detail/eta-tube/labblkecjdmhohoionjhcbjohjnpifck"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-900 text-white font-semibold text-lg px-10 py-4 rounded-full hover:bg-gray-800 transition-colors shadow-lg"
        >
          Add to Chrome
        </a>
      </section>

      {/* Screenshot */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
          <img
            src="/images/eta-tube/screenshot-1280x800.png"
            alt="EtaTube Screenshot showing end time on YouTube"
            className="w-full"
          />
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="border border-gray-200 rounded-2xl p-8">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Real-Time Updates</h3>
            <p className="text-gray-500 leading-relaxed">
              Dynamically recalculates the end time whenever you play, pause, seek,
              or change playback speed.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="border border-gray-200 rounded-2xl p-8">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Clean & Unobtrusive</h3>
            <p className="text-gray-500 leading-relaxed">
              Displays the end time neatly below the video player. No popups, no
              distractions — just the info you need.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="border border-gray-200 rounded-2xl p-8">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Privacy First</h3>
            <p className="text-gray-500 leading-relaxed">
              Zero data collection. No analytics, no tracking, no external
              requests. Everything runs locally in your browser.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>Made by Nikhil Sethi</p>
          <div className="flex items-center gap-6">
            <a
              href="/eta-tube/privacy"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://github.com/nickhil-sethi/eta-tube"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              Source Code
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
