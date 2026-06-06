import React, { useState, useEffect, Component } from 'react'
import { Link } from 'react-router-dom'
import { Spinner } from '@/components/ui/spinner'
import { Tweet } from 'react-tweet'
import { FlipWords } from '@/components/ui/flip-words'

class TweetErrorBoundary extends Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() { return { hasError: true } }
  render() {
    if (this.state.hasError) return null
    return this.props.children
  }
}

// ─── Types ───────────────────────────────────────────────────────────────────

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

const BADGE_LABEL: Record<Exclude<Category, 'all'>, string> = {
  saas: 'SaaS',
  ios: 'iOS',
  chrome: 'Chrome',
  claude: 'Claude',
}

// ─── Fonts ────────────────────────────────────────────────────────────────────

const F_DISPLAY = "'Inter Tight', 'Inter', system-ui, sans-serif"
const F_EDITORIAL = "'Newsreader', Georgia, serif"
const F_CODE = "'JetBrains Mono', 'Fira Code', monospace"

// ─── Link wrapper ─────────────────────────────────────────────────────────────

function ProjectLink({ project, children }: { project: Project; children: React.ReactNode }) {
  const base: React.CSSProperties = {
    display: 'block',
    textDecoration: 'none',
    border: '1px solid rgba(255,255,255,0.08)',
    transition: 'border-color 0.2s ease, background 0.2s ease',
    cursor: 'pointer',
  }
  if (project.external) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        style={base}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.22)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.025)' }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLElement).style.background = 'transparent' }}
      >
        {children}
      </a>
    )
  }
  return (
    <Link
      to={project.href}
      style={base}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.22)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.025)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLElement).style.background = 'transparent' }}
    >
      {children}
    </Link>
  )
}

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false)
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const isImageIcon = typeof project.icon === 'object' && 'src' in project.icon
  const showThumb = project.category === 'saas'

  const SCALE = 0.25
  const DISPLAY_W = 232
  const DISPLAY_H = 145
  const IFRAME_W = DISPLAY_W / SCALE
  const IFRAME_H = DISPLAY_H / SCALE

  return (
    <div
      style={{ position: 'relative', zIndex: hovered ? 10 : 'auto' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* iframe thumbnail tooltip */}
      {showThumb && (
        <div
          style={{
            position: 'absolute',
            bottom: 'calc(100% + 8px)',
            left: '50%',
            transform: hovered ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(8px)',
            width: `${DISPLAY_W}px`,
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 24px 64px rgba(0,0,0,0.85)',
            zIndex: 200,
            pointerEvents: 'none',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.2s ease, transform 0.2s ease',
          }}
        >
          <div style={{ width: DISPLAY_W, height: DISPLAY_H, position: 'relative', overflow: 'hidden', background: '#080808' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#080808', zIndex: 1, opacity: iframeLoaded ? 0 : 1, transition: 'opacity 0.3s ease', pointerEvents: 'none' }}>
              <Spinner size="md" style={{ color: 'rgba(255,255,255,0.25)' }} />
            </div>
            <iframe
              src={hovered ? project.href : undefined}
              title={`${project.name} preview`}
              style={{ width: IFRAME_W, height: IFRAME_H, transform: `scale(${SCALE})`, transformOrigin: 'top left', border: 'none', pointerEvents: 'none', opacity: iframeLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
              sandbox="allow-scripts allow-same-origin"
              onLoad={() => setIframeLoaded(true)}
            />
          </div>
          <div style={{ padding: '5px 8px', background: '#050505', fontFamily: F_CODE, fontSize: '0.57rem', color: 'rgba(255,255,255,0.2)', borderTop: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {project.href.replace(/https?:\/\//, '').replace(/\/$/, '')}
          </div>
        </div>
      )}

      <ProjectLink project={project}>
        <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          {/* Icon + badge */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            {isImageIcon ? (
              <img
                src={(project.icon as { src: string }).src}
                alt={project.name}
                style={{ width: '2.25rem', height: '2.25rem', objectFit: 'cover', flexShrink: 0 }}
              />
            ) : (
              <span style={{ fontSize: '1.6rem', lineHeight: 1, flexShrink: 0 }}>{project.icon as string}</span>
            )}
            <span style={{ fontFamily: F_CODE, fontSize: '0.57rem', letterSpacing: '0.12em', padding: '2px 6px', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.25)', flexShrink: 0 }}>
              {BADGE_LABEL[project.category]}
            </span>
          </div>
          {/* Name */}
          <p style={{ fontFamily: F_DISPLAY, fontWeight: 400, fontSize: '0.9rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.25, margin: 0 }}>
            {project.name}
          </p>
          {/* Description */}
          <p style={{ fontFamily: F_DISPLAY, fontWeight: 300, fontSize: '0.78rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.55, flex: 1, margin: 0 }}>
            {project.description}
          </p>
          {/* CTA */}
          <span style={{ fontFamily: F_CODE, fontSize: '0.62rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.28)' }}>
            {project.external ? 'VISIT →' : 'VIEW →'}
          </span>
        </div>
      </ProjectLink>
    </div>
  )
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeader({ label, heading, italic, sub }: { label: string; heading: string; italic: string; sub: string }) {
  return (
    <div style={{ marginBottom: '3.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
        <span style={{ display: 'inline-block', width: '2rem', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
        <span style={{ fontFamily: F_CODE, fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
          {label}
        </span>
      </div>
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', marginBottom: '1.5rem' }} />
      <h2 style={{ fontFamily: F_DISPLAY, fontWeight: 300, fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', color: '#ffffff', lineHeight: 1.06, letterSpacing: '-0.025em', margin: '0 0 0.5rem 0' }}>
        {heading}{' '}
        <em style={{ fontFamily: F_EDITORIAL, fontStyle: 'italic', fontWeight: 400 }}>{italic}</em>
      </h2>
      <p style={{ fontFamily: F_EDITORIAL, fontStyle: 'italic', fontSize: '0.95rem', color: 'rgba(255,255,255,0.38)', margin: 0 }}>
        {sub}
      </p>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Category>('all')

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://w.behold.so/widget.js'
    script.type = 'module'
    document.body.appendChild(script)
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script)
    }
  }, [])

  const filteredProjects = activeTab === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === activeTab)

  const sectionStyle: React.CSSProperties = {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '5rem 1.5rem',
    borderTop: '1px solid rgba(255,255,255,0.07)',
  }

  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', fontFamily: F_DISPLAY }}>

      {/* ── Nav ── */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: F_CODE, fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500, letterSpacing: '0.02em' }}>
            nerdynikhil
          </span>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            {[
              { label: 'builds', href: '#builds', external: false },
              { label: 'notes', href: '#notes', external: false },
              { label: 'activity', href: '#activity', external: false },
              { label: 'github', href: 'https://github.com/nerdynikhil', external: true },
              { label: 'connect', href: '#connect', external: false },
            ].map(link =>
              link.external ? (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: F_CODE, fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
                >
                  {link.label}
                </a>
              ) : (
                <a key={link.label} href={link.href}
                  style={{ fontFamily: F_CODE, fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '4.5rem 1.5rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'flex-start' }}>

          {/* Left */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <span style={{ display: 'inline-block', width: '2rem', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
              <span style={{ fontFamily: F_CODE, fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
                Developer · Builder · Creator
              </span>
            </div>

            <h1 style={{ fontFamily: F_DISPLAY, fontWeight: 300, fontSize: 'clamp(3.5rem, 9vw, 7rem)', lineHeight: 0.92, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 1.5rem 0' }}>
              Nikhil<br />
              <em style={{ fontFamily: F_EDITORIAL, fontStyle: 'italic', fontWeight: 400 }}>Barik</em>
            </h1>

            <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', maxWidth: '380px', marginBottom: '1.5rem' }} />

            <div style={{ fontFamily: F_DISPLAY, fontWeight: 300, fontSize: '1rem', color: 'rgba(255,255,255,0.48)', lineHeight: 1.7, maxWidth: '440px', margin: '0 0 2rem 0', position: 'relative' }}>
              I build
              <FlipWords
                words={["iOS apps,", "web tools,", "Chrome extensions,", "AI utilities,"]}
                duration={2500}
                className="!px-2 font-light text-white/80"
              />
              that people actually use.
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {[
                { label: 'GitHub', href: 'https://github.com/nerdynikhil' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/nerdynikhil' },
                { label: 'Twitter', href: 'https://twitter.com/nerdynikhil' },
                { label: 'Instagram', href: 'https://www.instagram.com/thehustlerdev/' },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 0.9rem', fontFamily: F_CODE, fontSize: '0.65rem', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.1)', textDecoration: 'none', transition: 'border-color 0.15s, color 0.15s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.75)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)' }}
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Right — profile photo */}
          <div style={{ flexShrink: 0 }}>
            <div style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
              <img
                src="/images/profilepic.png"
                alt="Nikhil Barik"
                style={{ width: '160px', height: '160px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Build Log ── */}
      <section id="builds" style={sectionStyle}>
        <SectionHeader label="Build Log" heading="Build" italic="Log" sub="The full archive. Everything shipped." />

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {TABS.map(tab => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '0.35rem 0.85rem',
                  fontFamily: F_CODE,
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  border: isActive ? '1px solid rgba(255,255,255,0.4)' : '1px solid rgba(255,255,255,0.1)',
                  background: isActive ? 'rgba(255,255,255,0.06)' : 'transparent',
                  color: isActive ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Grid — gap-px technique from theaibuildrs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.07)' }}>
          {filteredProjects.map(project => (
            <div key={project.name} style={{ background: '#000' }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Field Notes ── */}
      <section id="notes" style={sectionStyle}>
        <SectionHeader label="Field Notes" heading="Field" italic="Notes" sub="Product thinking. Teardowns. Strategy." />

        <div style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
          {BLOG_POSTS.map((post, i) => (
            <Link
              key={post.href}
              to={post.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.875rem 1.25rem',
                borderBottom: i < BLOG_POSTS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                textDecoration: 'none',
                transition: 'background 0.15s ease',
                background: 'transparent',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.025)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <span style={{ fontFamily: F_CODE, fontSize: '0.57rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '3px 7px', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.22)', flexShrink: 0, minWidth: '5.5rem', textAlign: 'center' }}>
                {post.type}
              </span>
              <span style={{ fontFamily: F_DISPLAY, fontWeight: 300, fontSize: '0.88rem', color: 'rgba(255,255,255,0.58)', flex: 1 }}>
                {post.title}
              </span>
              <span style={{ fontFamily: F_CODE, fontSize: '0.7rem', color: 'rgba(255,255,255,0.2)', flexShrink: 0 }}>→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Activity Feed ── */}
      <section id="activity" style={sectionStyle}>
        <SectionHeader label="Activity Feed" heading="Activity" italic="Feed" sub="Recent updates, thoughts, and behind-the-scenes." />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          {/* Twitter / X */}
          <div>
            <p style={{ fontFamily: F_CODE, fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '1.25rem' }}>
              Latest on X
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '700px', overflowY: 'auto', paddingRight: '8px' }}>
              {[
                '2033295611467034829',
                '2007933833954652456',
                '2035759121442721831',
                '2035752805512946139',
                '2035344623405854958',
                '2034294493055447054',
                '2033453219964150260',
                '2030392612050645145',
              ].map(id => (
                <TweetErrorBoundary key={id}>
                  <div className="dark">
                    <Tweet id={id} />
                  </div>
                </TweetErrorBoundary>
              ))}
            </div>
          </div>

          {/* Instagram (Behold.so) */}
          <div>
            <p style={{ fontFamily: F_CODE, fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '1.25rem' }}>
              Instagram Feed
            </p>
            <figure data-behold-id="tmMPJq7BrnHtNOTFTouD"></figure>
          </div>
        </div>
      </section>

      {/* ── Connect ── */}
      <section id="connect" style={{ ...sectionStyle, paddingBottom: '8rem' }}>
        <SectionHeader label="Connect" heading="Let's" italic="Connect" sub="Find me on the internet." />

        <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/nerdynikhil' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/nerdynikhil' },
            { label: 'Twitter', href: 'https://twitter.com/nerdynikhil' },
            { label: 'Instagram', href: 'https://www.instagram.com/thehustlerdev/' },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.6rem 1.5rem', fontFamily: F_DISPLAY, fontWeight: 300, fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.1)', textDecoration: 'none', transition: 'border-color 0.15s, color 0.15s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.85)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)' }}
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ fontFamily: F_CODE, fontSize: '0.65rem', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.08em' }}>nerdynikhil.com</span>
          <span style={{ fontFamily: F_CODE, fontSize: '0.65rem', color: 'rgba(255,255,255,0.12)', letterSpacing: '0.08em' }}>built with ♥ + claude</span>
        </div>
      </footer>

    </div>
  )
}
