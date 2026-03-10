import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const saasProjects = [
  {
    name: 'QuickDevTools',
    url: 'https://quickdevtools.com',
    description: 'Fast, free developer utilities — JSON, Base64, JWT & more.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    name: 'EasyN8N',
    url: 'https://easyn8n.com',
    description: 'Deploy n8n in one click — no DevOps needed.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    name: 'EasyYClaw',
    url: 'https://easyyclaw.com',
    description: 'Monitor Y Combinator companies & jobs effortlessly.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    name: 'PetrolheadX',
    url: 'https://petrolheadx.com',
    description: 'The ultimate car enthusiast community & marketplace.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2.7-3.6A2 2 0 0 0 13.7 5H8.3a2 2 0 0 0-1.6.9L4 9.5 1.5 11.1C.7 11.3 0 12.1 0 13v3c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
  },
  {
    name: 'Postrr',
    url: 'https://postrr.com',
    description: 'Beautiful social media post generator for developers.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
]

const apps = [
  {
    name: 'ChatterCards',
    path: '/chattercards',
    description: 'AI-powered conversation starter cards.',
    icon: '/images/chattercards/app-icon.webp',
  },
  {
    name: 'LingoDuel',
    path: '/lingoduel',
    description: 'Competitive language learning game.',
    icon: '/images/lingoduel/lingoduel-logo.png',
  },
  {
    name: 'Serenight',
    path: '/serenight',
    description: 'Calm your mind with ambient sounds.',
    icon: '/images/serenight/logo.png',
  },
  {
    name: 'TrueHue',
    path: '/truehue',
    description: 'Test your color perception skills.',
    icon: '/images/truehue/TrueHue.png',
  },
  {
    name: 'Subscriptionly',
    path: '/subscriptionly',
    description: 'Track and manage all your subscriptions.',
    icon: '/images/subscriptionly/360x360ia.png',
  },
]

const chromeExtensions = [
  {
    name: 'Behance2PDF',
    url: 'https://github.com/nerdynikhil/Behance2PDF',
    description: 'Export Behance projects as PDF.',
    icon: 'https://github.com/nerdynikhil/Behance2PDF/blob/main/assets/icons/icon1024.png?raw=true',
  },
  {
    name: 'Faster Udemy',
    url: 'https://chromewebstore.google.com/detail/faster-udemy/pjieandepjpjmlbomkmlbchiafcblfig',
    description: 'Speed up Udemy videos beyond 2x.',
    icon: 'https://github.com/nerdynikhil/faster-udemy/blob/main/faster-udemy-128.png?raw=true',
  },
  {
    name: 'ETA Tube',
    url: 'https://chromewebstore.google.com/detail/eta-tube/kaeamhgoiipmkbhhjcopginimaedlapo',
    description: 'See remaining time for YouTube playlists.',
    icon: '/images/eta-tube/store-icon-128x128.png',
  },
]

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nikhil Barik',
  alternateName: 'nerdynikhil',
  url: 'https://www.nerdynikhil.com',
  image: 'https://www.nerdynikhil.com/images/profilepic.png',
  jobTitle: 'Software Developer',
  sameAs: [
    'https://github.com/nerdynikhil',
    'https://twitter.com/nerdynikhil',
    'https://linkedin.com/in/nerdynikhil',
    'https://instagram.com/nerdynikhil',
  ],
}

export default function Home() {
  return (
    <div className="terminal-theme">
      <SEO
        title="nerdynikhil — Developer, Builder, Creator"
        description="Nikhil Barik — Software developer building SaaS products, apps, Chrome extensions, and open-source tools."
        url="https://www.nerdynikhil.com/"
        jsonLd={personJsonLd}
      />

      <div className="terminal-container">
        {/* Header */}
        <header className="flex items-center justify-between py-6 border-b border-[var(--border-color)] mb-12">
          <Link
            to="/"
            className="text-xl font-semibold text-[var(--accent-color)] !border-b-0"
          >
            <span className="text-[var(--text-secondary)]">./</span>nerdynikhil
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link to="/blog" className="!border-b-0 hover:text-[var(--accent-color)]">
              <span className="text-[var(--text-secondary)]">[</span>
              blog
              <span className="text-[var(--text-secondary)]">]</span>
            </Link>
            <Link to="/thehustlerdev" className="!border-b-0 hover:text-[var(--accent-color)]">
              <span className="text-[var(--text-secondary)]">[</span>
              thehustlerdev
              <span className="text-[var(--text-secondary)]">]</span>
            </Link>
          </nav>
        </header>

        {/* Intro Section */}
        <section className="mb-16 flex flex-col sm:flex-row items-start gap-8">
          <img
            src="/images/profilepic.png"
            alt="Nikhil Barik"
            className="w-24 h-24 rounded-full border-2 border-[var(--accent-color)] shadow-[var(--terminal-shadow)]"
          />
          <div>
            <h1 className="text-3xl font-bold text-[var(--accent-color)] mb-2">
              Nikhil Barik
              <span className="cursor" />
            </h1>
            <p className="text-[var(--text-secondary)] mb-1">
              Developer &middot; Builder &middot; Creator
            </p>
            <p className="text-[var(--text-secondary)] text-sm">
              Currently working on:{' '}
              <a
                href="https://mvpfy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent-color)]"
              >
                Building MVPFy
              </a>
            </p>
          </div>
        </section>

        {/* SaaS Section */}
        <section className="mb-16">
          <div className="text-xs text-[var(--text-secondary)] mb-1 font-mono">
            ls -la ./saas/
          </div>
          <h2 className="text-xl font-bold text-[var(--accent-color)] mb-6">
            SaaS Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {saasProjects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 border border-[var(--border-color)] rounded hover:border-[var(--accent-color)] transition-colors"
              >
                <span className="text-[var(--text-secondary)] shrink-0 mt-0.5">
                  {project.icon}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">
                    {project.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-snug">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* My Apps Section */}
        <section className="mb-16">
          <div className="text-xs text-[var(--text-secondary)] mb-1 font-mono">
            ls -la ./apps/
          </div>
          <h2 className="text-xl font-bold text-[var(--accent-color)] mb-6">
            My Apps
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {apps.map((app) => (
              <Link
                key={app.name}
                to={app.path}
                className="flex items-start gap-4 p-4 border border-[var(--border-color)] rounded hover:border-[var(--accent-color)] transition-colors !border-b-[var(--border-color)] hover:!border-b-[var(--accent-color)]"
              >
                <img
                  src={app.icon}
                  alt={app.name}
                  className="w-10 h-10 rounded shrink-0"
                />
                <div>
                  <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">
                    {app.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-snug">
                    {app.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Chrome Extensions Section */}
        <section className="mb-16">
          <div className="text-xs text-[var(--text-secondary)] mb-1 font-mono">
            ls -la ./chrome-extensions/
          </div>
          <h2 className="text-xl font-bold text-[var(--accent-color)] mb-6">
            Chrome Extensions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {chromeExtensions.map((ext) => (
              <a
                key={ext.name}
                href={ext.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 border border-[var(--border-color)] rounded hover:border-[var(--accent-color)] transition-colors"
              >
                <img
                  src={ext.icon}
                  alt={ext.name}
                  className="w-10 h-10 rounded shrink-0"
                />
                <div>
                  <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">
                    {ext.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-snug">
                    {ext.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* VS Code Extensions Section */}
        <section className="mb-16">
          <div className="text-xs text-[var(--text-secondary)] mb-1 font-mono">
            ls -la ./vscode-extensions/
          </div>
          <h2 className="text-xl font-bold text-[var(--accent-color)] mb-6">
            VS Code Extensions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=nerdynikhil.meme-sounds"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 border border-[var(--border-color)] rounded hover:border-[var(--accent-color)] transition-colors"
            >
              <img
                src="/images/meme-sounds.png"
                alt="Meme Sounds"
                className="w-10 h-10 rounded shrink-0"
              />
              <div>
                <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">
                  Meme Sounds
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-snug">
                  Play meme sound effects while coding.
                </p>
              </div>
            </a>
          </div>
        </section>

        {/* Claude Skills Section */}
        <section className="mb-16">
          <div className="text-xs text-[var(--text-secondary)] mb-1 font-mono">
            ls -la ./claude-skills/
          </div>
          <h2 className="text-xl font-bold text-[var(--accent-color)] mb-6">
            Claude Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://skills.sh/skill/claude-ping-me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 border border-[var(--border-color)] rounded hover:border-[var(--accent-color)] transition-colors"
            >
              <span className="text-[var(--text-secondary)] shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </span>
              <div>
                <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">
                  claude-ping-me
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-snug">
                  Plays a notification sound when Claude Code is waiting for input.
                </p>
              </div>
            </a>
            <Link
              to="/claude-narrator"
              className="flex items-start gap-4 p-4 border border-[var(--border-color)] rounded hover:border-[var(--accent-color)] transition-colors !border-b-[var(--border-color)] hover:!border-b-[var(--accent-color)]"
            >
              <span className="text-[var(--text-secondary)] shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="23" />
                  <line x1="8" y1="23" x2="16" y2="23" />
                </svg>
              </span>
              <div>
                <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">
                  claude-narrator
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-snug">
                  Narrates Claude Code actions with text-to-speech.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Blog Section */}
        <section className="mb-16">
          <div className="text-xs text-[var(--text-secondary)] mb-1 font-mono">
            cat ./thoughts/latest.md
          </div>
          <h2 className="text-xl font-bold text-[var(--accent-color)] mb-4">
            Latest Thoughts
          </h2>
          <p className="text-[var(--text-secondary)] mb-4">
            Writing about code, building products, and the indie hacker journey.
          </p>
          <Link
            to="/blog"
            className="inline-block text-[var(--accent-color)] border border-[var(--accent-color)] px-4 py-2 text-sm hover:bg-[var(--accent-color)] hover:text-[var(--bg-color)] transition-colors !border-b-[var(--accent-color)]"
          >
            cd ./blog &rarr;
          </Link>
        </section>

        {/* Footer */}
        <footer className="border-t border-[var(--border-color)] pt-8 pb-12 text-sm text-[var(--text-secondary)]">
          <div className="mb-4">
            <span className="text-[var(--text-secondary)]">echo </span>
            <a
              href="mailto:nerdynikhil@outlook.com"
              className="text-[var(--text-primary)]"
            >
              nerdynikhil@outlook.com
            </a>
          </div>
          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/nerdynikhil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[var(--text-secondary)]">&lt;</span>
              LinkedIn
              <span className="text-[var(--text-secondary)]">&gt;</span>
            </a>
            <a
              href="https://github.com/nerdynikhil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[var(--text-secondary)]">&lt;</span>
              GitHub
              <span className="text-[var(--text-secondary)]">&gt;</span>
            </a>
            <a
              href="https://twitter.com/nerdynikhil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[var(--text-secondary)]">&lt;</span>
              Twitter
              <span className="text-[var(--text-secondary)]">&gt;</span>
            </a>
            <a
              href="https://instagram.com/nerdynikhil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[var(--text-secondary)]">&lt;</span>
              Instagram
              <span className="text-[var(--text-secondary)]">&gt;</span>
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
