import { useState } from 'react'
import { Link } from 'react-router-dom'

// ─── Types ──────────────────────────────────────────────────────────────────

type Category = 'all' | 'saas' | 'ios' | 'chrome' | 'claude'

interface Project {
  name: string
  description: string
  category: Exclude<Category, 'all'>
  icon: string | { src: string }
  href: string
  external: boolean
}

interface BlogPost {
  title: string
  type: string
  href: string
}

// ─── Data ────────────────────────────────────────────────────────────────────

const PROJECTS: Project[] = [
  // SaaS
  { name: 'QuickDevTools', description: 'Fast, free developer utilities', category: 'saas', icon: '🔧', href: 'https://quickdevtools.online/', external: true },
  { name: 'EasyN8N', description: 'Deploy n8n in one click', category: 'saas', icon: '💻', href: 'https://easyn8n.online/', external: true },
  { name: 'EasyClaw', description: 'Monitor YC companies & jobs', category: 'saas', icon: '🔍', href: 'https://easyyclaw.cloud/', external: true },
  { name: 'PetrolheadX', description: 'Car enthusiast community', category: 'saas', icon: '🚗', href: 'http://petrolheadx.autos/', external: true },
  { name: 'Postrr', description: 'Social media post generator', category: 'saas', icon: '🖼️', href: 'https://postrr.online/', external: true },
  { name: 'ResizeForForms', description: 'Resize images for forms', category: 'saas', icon: '📐', href: 'https://resizeforforms.online/', external: true },
  { name: 'EraseMyBackground', description: 'Remove image backgrounds', category: 'saas', icon: '🎨', href: 'https://erasemybackground.online/', external: true },
  // iOS
  { name: 'ChatterCards', description: 'AI conversation starter cards', category: 'ios', icon: { src: '/images/chattercards/app-icon.webp' }, href: '/chattercards', external: false },
  { name: 'LingoDuel', description: 'Competitive language learning', category: 'ios', icon: { src: '/images/lingoduel/lingoduel-logo.png' }, href: '/lingoduel', external: false },
  { name: 'Serenight', description: 'Calm mind with ambient sounds', category: 'ios', icon: { src: '/images/serenight/logo.png' }, href: '/serenight', external: false },
  { name: 'TrueHue', description: 'Test your color perception', category: 'ios', icon: { src: '/images/truehue/TrueHue.png' }, href: '/truehue', external: false },
  { name: 'Subscriptionly', description: 'Track all your subscriptions', category: 'ios', icon: { src: '/images/subscriptionly/360x360ia.png' }, href: '/subscriptionly', external: false },
  { name: 'WDTG', description: "What Did That Guy say?", category: 'ios', icon: '⏰', href: '/wdtg', external: false },
  // Chrome
  { name: 'Behance2PDF', description: 'Export Behance projects as PDF', category: 'chrome', icon: { src: 'https://github.com/nerdynikhil/Behance2PDF/blob/main/assets/icons/icon1024.png?raw=true' }, href: '/behance2pdf', external: false },
  { name: 'Faster Udemy', description: 'Speed up Udemy videos beyond 2x', category: 'chrome', icon: { src: 'https://github.com/nerdynikhil/faster-udemy/blob/main/faster-udemy-128.png?raw=true' }, href: '/faster-udemy', external: false },
  { name: 'ETA Tube', description: 'YouTube playlist time remaining', category: 'chrome', icon: { src: '/images/eta-tube/store-icon-128x128.png' }, href: '/eta-tube', external: false },
  // Claude
  { name: 'Meme Sounds', description: 'Play meme sounds while coding', category: 'claude', icon: { src: '/images/meme-sounds.png' }, href: 'https://marketplace.visualstudio.com/items?itemName=nerdynikhil.meme-sounds', external: true },
  { name: 'claude-ping-me', description: 'Notify when Claude is waiting', category: 'claude', icon: '🔔', href: 'https://skills.sh/nerdynikhil/claude-ping-me/claude-ping-me', external: true },
  { name: 'Claude Narrator', description: 'Narrates Claude Code actions', category: 'claude', icon: '🎙️', href: '/claude-narrator', external: false },
]

const BLOG_POSTS: BlogPost[] = [
  { title: 'PRD: Increasing Zomato Text Reviews', type: 'PRD', href: '/blog/prd-increasing-zomato-text-reviews' },
  { title: 'Growing Zomato with Quality Reviews', type: 'Case Study', href: '/blog/case-study-growing-zomato-quality-reviews' },
  { title: 'Smytten Referral Teardown', type: 'Teardown', href: '/blog/smytten-referral-program-teardown' },
  { title: 'Blinkit Notification Teardown', type: 'Teardown', href: '/blog/blinkit-app-notification-product-teardown' },
  { title: 'Swiggy Play Store Rating Drop', type: 'Root Cause', href: '/blog/swiggy-root-cause-analysis-play-store-rating-drop' },
  { title: 'Swiggy Customer Loyalty', type: 'Strategy', href: '/blog/swiggy-enhancing-customer-loyalty-retention' },
  { title: 'Food Delivery Industry Research', type: 'Research', href: '/blog/secondary-research-food-delivery-industry-india' },
  { title: 'Google Smart Shoes Metrics', type: 'Metrics', href: '/blog/google-smart-shoes-product-metrics-goals' },
  { title: 'Swiggy Dabba Meal Plans', type: 'Feature', href: '/blog/swiggy-dabba-customized-meal-plans' },
]

const TABS: { id: Category; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'saas', label: 'SaaS' },
  { id: 'ios', label: 'iOS' },
  { id: 'chrome', label: 'Chrome' },
  { id: 'claude', label: 'Claude' },
]

const BADGE: Record<Exclude<Category, 'all'>, { bg: string; color: string; label: string }> = {
  saas:   { bg: 'rgba(59,130,246,0.12)',  color: '#60a5fa', label: 'SAAS' },
  ios:    { bg: 'rgba(16,185,129,0.12)',  color: '#34d399', label: 'iOS' },
  chrome: { bg: 'rgba(245,158,11,0.12)',  color: '#fbbf24', label: 'CHROME' },
  claude: { bg: 'rgba(139,92,246,0.12)',  color: '#a78bfa', label: 'CLAUDE' },
}

// ─── Link wrapper ─────────────────────────────────────────────────────────────

function ProjectLink({
  project,
  children,
  style,
}: {
  project: Project
  children: React.ReactNode
  style?: React.CSSProperties
}) {
  if (project.external) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card"
        style={style}
      >
        {children}
      </a>
    )
  }
  return (
    <Link to={project.href} className="project-card" style={style}>
      {children}
    </Link>
  )
}

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
  const isImageIcon = typeof project.icon === 'object' && 'src' in project.icon
  const badge = BADGE[project.category]

  return (
    <ProjectLink
      project={project}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.875rem',
        padding: '1.25rem',
        background: 'var(--surface)',
        border: '1px solid var(--border-dark)',
        borderRadius: '8px',
        textDecoration: 'none',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease',
        cursor: 'pointer',
      }}
    >
      {/* Icon + badge row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        {isImageIcon ? (
          <img
            src={(project.icon as { src: string }).src}
            alt={project.name}
            style={{ width: '2.5rem', height: '2.5rem', borderRadius: '8px', objectFit: 'cover', flexShrink: 0 }}
          />
        ) : (
          <span style={{ fontSize: '1.75rem', lineHeight: 1, flexShrink: 0 }}>
            {project.icon as string}
          </span>
        )}
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.58rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            padding: '2px 7px',
            borderRadius: '3px',
            background: badge.bg,
            color: badge.color,
            flexShrink: 0,
            marginTop: '3px',
          }}
        >
          {badge.label}
        </span>
      </div>

      {/* Name */}
      <div
        style={{
          fontFamily: 'var(--font-space)',
          fontWeight: 600,
          fontSize: '0.95rem',
          color: 'var(--text-primary)',
          lineHeight: 1.2,
        }}
      >
        {project.name}
      </div>

      {/* Description */}
      <div
        style={{
          fontFamily: 'var(--font-space)',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          lineHeight: 1.5,
          flex: 1,
        }}
      >
        {project.description}
      </div>

      {/* CTA */}
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          color: 'var(--accent)',
          letterSpacing: '0.08em',
        }}
      >
        {project.external ? 'VISIT →' : 'VIEW →'}
      </div>
    </ProjectLink>
  )
}

// ─── Section header ───────────────────────────────────────────────────────────

function SectionHeader({ label, heading, sub }: { label: string; heading: string; sub: string }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          color: 'var(--accent)',
          letterSpacing: '0.08em',
          marginBottom: '0.5rem',
        }}
      >
        {label}
      </div>
      <div style={{ height: '1px', background: 'var(--border-dark)', marginBottom: '1.25rem' }} />
      <h2
        style={{
          fontFamily: 'var(--font-bebas)',
          fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
          color: 'var(--text-primary)',
          letterSpacing: '0.02em',
          margin: '0 0 0.5rem 0',
          lineHeight: 1,
        }}
      >
        {heading}
      </h2>
      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: '0.95rem',
          color: 'var(--text-muted)',
          margin: 0,
        }}
      >
        {sub}
      </p>
    </div>
  )
}

// ─── Main Portfolio ───────────────────────────────────────────────────────────

const SECTION_STYLE: React.CSSProperties = {
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '5.5rem 1.5rem',
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Category>('all')

  const filteredProjects =
    activeTab === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === activeTab)

  return (
    <div style={{ background: 'var(--bg-dark)', minHeight: '100vh', color: 'var(--text-primary)' }}>

      {/* ── Nav ── */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          borderBottom: '1px solid var(--border-dark)',
          background: 'rgba(8,8,8,0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 1.5rem',
            height: '52px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              color: 'var(--accent)',
              fontWeight: 600,
              letterSpacing: '0.03em',
            }}
          >
            nerdynikhil
          </span>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            {[
              { label: 'builds', href: '#builds', external: false },
              { label: 'notes', href: '#notes', external: false },
              { label: 'github', href: 'https://github.com/nerdynikhil', external: true },
              { label: 'connect', href: '#connect', external: false },
            ].map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                  style={{
                    fontFamily: 'var(--font-space)',
                    fontSize: '0.82rem',
                    color: '#666',
                    textDecoration: 'none',
                    transition: 'color 0.15s',
                  }}
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link"
                  style={{
                    fontFamily: 'var(--font-space)',
                    fontSize: '0.82rem',
                    color: '#666',
                    textDecoration: 'none',
                    transition: 'color 0.15s',
                  }}
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '3.5rem 1.5rem 3.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          {/* Left column */}
          <div style={{ flex: '1', minWidth: '260px' }}>
            {/* Eyebrow */}
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--accent)',
                letterSpacing: '0.12em',
                marginBottom: '1.25rem',
              }}
            >
              // PLAYER_ONE
            </div>

            {/* Name */}
            <h1
              style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: 'clamp(3.75rem, 10vw, 8rem)',
                lineHeight: 0.88,
                letterSpacing: '0.01em',
                color: 'var(--text-primary)',
                margin: '0 0 1.25rem 0',
              }}
            >
              NIKHIL
              <br />
              BARIK
            </h1>

            {/* Rule */}
            <div
              style={{
                height: '1px',
                background: 'var(--border-dark)',
                maxWidth: '400px',
                marginBottom: '1.25rem',
              }}
            />

            {/* Tagline — Instrument Serif italic */}
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                color: '#999',
                lineHeight: 1.65,
                maxWidth: '420px',
                margin: '0 0 1.75rem 0',
              }}
            >
              Developer. Builder. Creator. I ship things people actually
              use — iOS apps, web tools, Chrome extensions, and AI
              utilities.
            </p>

            {/* Inline social links */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {[
                { label: 'GitHub', href: 'https://github.com/nerdynikhil' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/nerdynikhil' },
                { label: 'Twitter', href: 'https://twitter.com/nerdynikhil' },
                { label: 'Instagram', href: 'https://www.instagram.com/thehustlerdev/' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0.35rem 0.875rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.67rem',
                    fontWeight: 600,
                    color: '#777',
                    background: 'var(--surface)',
                    border: '1px solid var(--border-dark)',
                    borderRadius: '20px',
                    textDecoration: 'none',
                    letterSpacing: '0.04em',
                    transition: 'border-color 0.15s, color 0.15s',
                  }}
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Right column — profile photo */}
          <div style={{ flexShrink: 0 }}>
            <img
              src="/images/profilepic.png"
              alt="Nikhil Barik"
              style={{
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid var(--border-dark)',
                display: 'block',
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Build Log ── */}
      <section id="builds" style={SECTION_STYLE}>
        <SectionHeader
          label="// BUILD_LOG"
          heading="BUILD LOG"
          sub="The full archive. Everything shipped."
        />

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '0.38rem 0.9rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  borderRadius: '4px',
                  border: `1px solid ${isActive ? 'var(--accent)' : '#2a2a2a'}`,
                  background: isActive ? 'var(--accent-dim)' : 'transparent',
                  color: isActive ? 'var(--accent)' : '#555',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {tab.label.toUpperCase()}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '0.875rem',
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      {/* ── Field Notes ── */}
      <section id="notes" style={SECTION_STYLE}>
        <SectionHeader
          label="// FIELD_NOTES"
          heading="FIELD NOTES"
          sub="Product thinking. Teardowns. Strategy."
        />

        <div
          style={{
            border: '1px solid var(--border-dark)',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          {BLOG_POSTS.map((post, i) => (
            <Link
              key={post.href}
              to={post.href}
              className="blog-row"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.9rem 1.25rem',
                background: 'var(--surface)',
                borderBottom: i < BLOG_POSTS.length - 1 ? '1px solid var(--border-dark)' : 'none',
                textDecoration: 'none',
                transition: 'background 0.15s ease',
              }}
            >
              {/* Type badge */}
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.58rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  padding: '3px 7px',
                  borderRadius: '3px',
                  background: 'var(--surface-2)',
                  color: '#444',
                  flexShrink: 0,
                  minWidth: '5.5rem',
                  textAlign: 'center',
                }}
              >
                {post.type.toUpperCase()}
              </span>

              {/* Title */}
              <span
                style={{
                  fontFamily: 'var(--font-space)',
                  fontSize: '0.88rem',
                  color: '#bbb',
                  flex: 1,
                }}
              >
                {post.title}
              </span>

              {/* Arrow */}
              <span
                className="blog-arrow"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: '#333',
                  flexShrink: 0,
                  transition: 'color 0.15s',
                }}
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Spawn Point ── */}
      <section id="connect" style={{ ...SECTION_STYLE, paddingBottom: '8rem' }}>
        <SectionHeader
          label="// SPAWN_POINT"
          heading="LET'S CONNECT"
          sub="Find me on the internet."
        />

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/nerdynikhil' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/nerdynikhil' },
            { label: 'Twitter', href: 'https://twitter.com/nerdynikhil' },
            { label: 'Instagram', href: 'https://www.instagram.com/thehustlerdev/' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="connect-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.6rem 1.25rem',
                fontFamily: 'var(--font-space)',
                fontWeight: 600,
                fontSize: '0.82rem',
                color: 'var(--text-primary)',
                background: 'var(--surface)',
                border: '1px solid #2a2a2a',
                borderRadius: '6px',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'border-color 0.15s, color 0.15s',
              }}
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: '1px solid var(--border-dark)', padding: '1.5rem' }}>
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#2a2a2a' }}>
            nerdynikhil.com
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#2a2a2a' }}>
            built with ♥ + claude
          </span>
        </div>
      </footer>
    </div>
  )
}
