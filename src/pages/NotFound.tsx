import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <div className="terminal-theme">
      <SEO
        title="404 — Page Not Found | nerdynikhil"
        description="The page you are looking for does not exist."
      />

      <div className="terminal-container flex flex-col items-center justify-center min-h-[80vh] text-center">
        <h1 className="text-6xl font-bold text-[var(--accent-color)] mb-4">
          404
        </h1>
        <p className="text-[var(--text-secondary)] mb-2 text-lg">
          Page not found
        </p>
        <p className="text-[var(--text-secondary)] text-sm mb-8">
          bash: page: command not found
        </p>
        <Link
          to="/"
          className="inline-block text-[var(--accent-color)] border border-[var(--accent-color)] px-6 py-2 text-sm hover:bg-[var(--accent-color)] hover:text-[var(--bg-color)] transition-colors !border-b-[var(--accent-color)]"
        >
          cd ~/ &rarr;
        </Link>
      </div>
    </div>
  )
}
