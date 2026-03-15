import SEO from '../components/SEO'

export default function Behance2PDF() {
  return (
    <div className="min-h-screen bg-[#0066ff] text-white font-['Inter',sans-serif]">
      <SEO
        title="Behance2PDF - Save Behance Projects as PDF"
        description="A Chrome extension that lets you save any Behance project as a high-quality PDF with one click."
        url="https://www.nerdynikhil.com/behance2pdf"
        image="https://www.nerdynikhil.com/images/behance2pdf/icon1024.png"
      />

      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        {/* Icon */}
        <img
          src="/images/behance2pdf/icon1024.png"
          alt="Behance2PDF Icon"
          className="w-32 h-32 mx-auto rounded-3xl shadow-lg mb-8"
        />

        {/* Title */}
        <h1 className="text-5xl font-bold mb-4">Behance2PDF</h1>
        <p className="text-xl text-white/80 mb-12">
          Save any Behance project as a high-quality PDF with one click.
        </p>

        {/* Features */}
        <div className="text-left bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="space-y-3 text-white/90">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 bg-white rounded-full shrink-0" />
              <span>One-click PDF export from any Behance project page</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 bg-white rounded-full shrink-0" />
              <span>High-quality image preservation with original resolution</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 bg-white rounded-full shrink-0" />
              <span>Automatic page layout optimized for project content</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 bg-white rounded-full shrink-0" />
              <span>Works with all Behance project types and layouts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 bg-white rounded-full shrink-0" />
              <span>No account or sign-up required</span>
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <a
          href="https://chromewebstore.google.com/detail/behance2pdf/pagnlaabjkkhpfmgoaabjnmcbdfpmoli"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#0066ff] font-semibold text-lg px-10 py-4 rounded-full hover:bg-white/90 transition-colors shadow-lg mb-12"
        >
          Add to Chrome
        </a>

        {/* Feedback */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-3">Feedback</h2>
          <p className="text-white/80">
            Have a suggestion or found a bug? Feel free to reach out at{' '}
            <a
              href="mailto:nickhil.sethi@icloud.com"
              className="underline hover:text-white transition-colors"
            >
              nickhil.sethi@icloud.com
            </a>
          </p>
        </div>

        {/* Footer */}
        <footer className="text-white/60 text-sm space-y-2">
          <p>
            <a
              href="/behance2pdf/privacy"
              className="underline hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </p>
          <p>Made by Nikhil Sethi</p>
        </footer>
      </div>
    </div>
  )
}
