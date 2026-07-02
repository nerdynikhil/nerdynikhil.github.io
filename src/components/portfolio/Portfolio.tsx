import React, { useState, useEffect, Component } from 'react'
import { Link } from 'react-router-dom'
import { Spinner } from '@/components/ui/spinner'
import { Tweet } from 'react-tweet'

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

const PROJECTS: Project[] = [
  { name: 'QuickDevTools', description: 'Free dev utilities — no signup, no nonsense', category: 'saas', icon: '🔧', href: 'https://quickdevtools.online/', external: true },
  { name: 'EasyN8N', description: 'Self-host n8n workflows in one click', category: 'saas', icon: '💻', href: 'https://easyn8n.online/', external: true },
  { name: 'EasyClaw', description: 'Track YC companies and open roles in real time', category: 'saas', icon: '🔍', href: 'https://easyyclaw.cloud/', external: true },
  { name: 'PetrolheadX', description: 'Car enthusiast community', category: 'saas', icon: '🚗', href: 'http://petrolheadx.autos/', external: true },
  { name: 'Postrr', description: 'Social media post generator', category: 'saas', icon: '🖼️', href: 'https://postrr.online/', external: true },
  { name: 'ResizeForForms', description: 'Resize images for forms', category: 'saas', icon: '📐', href: 'https://resizeforforms.online/', external: true },
  { name: 'EraseMyBackground', description: 'Remove image backgrounds', category: 'saas', icon: '🎨', href: 'https://erasemybackground.online/', external: true },
  { name: 'ChatterCards', description: 'AI-powered cards that kill awkward silences', category: 'ios', icon: { src: '/images/chattercards/app-icon.webp' }, href: '/chattercards', external: false },
  { name: 'LingoDuel', description: 'Language learning, but make it competitive', category: 'ios', icon: { src: '/images/lingoduel/lingoduel-logo.png' }, href: '/lingoduel', external: false },
  { name: 'Serenight', description: 'Calm mind with ambient sounds', category: 'ios', icon: { src: '/images/serenight/logo.png' }, href: '/serenight', external: false },
  { name: 'TrueHue', description: 'Test your color perception', category: 'ios', icon: { src: '/images/truehue/TrueHue.png' }, href: '/truehue', external: false },
  { name: 'Subscriptionly', description: 'Track all your subscriptions', category: 'ios', icon: { src: '/images/subscriptionly/360x360ia.png' }, href: '/subscriptionly', external: false },
  { name: 'WDTG', description: "What Did That Guy say?", category: 'ios', icon: '⏰', href: '/wdtg', external: false },
  { name: 'Behance2PDF', description: 'Export Behance projects as PDF', category: 'chrome', icon: { src: 'https://github.com/nerdynikhil/Behance2PDF/blob/main/assets/icons/icon1024.png?raw=true' }, href: '/behance2pdf', external: false },
  { name: 'Faster Udemy', description: 'Speed up Udemy videos beyond 2x', category: 'chrome', icon: { src: 'https://github.com/nerdynikhil/faster-udemy/blob/main/faster-udemy-128.png?raw=true' }, href: '/faster-udemy', external: false },
  { name: 'ETA Tube', description: 'YouTube playlist time remaining', category: 'chrome', icon: { src: '/images/eta-tube/store-icon-128x128.png' }, href: '/eta-tube', external: false },
  { name: 'Meme Sounds', description: 'Play meme sounds while coding', category: 'claude', icon: { src: '/images/meme-sounds.png' }, href: 'https://marketplace.visualstudio.com/items?itemName=nerdynikhil.meme-sounds', external: true },
  { name: 'claude-ping-me', description: 'Notify when Claude is waiting', category: 'claude', icon: '🔔', href: 'https://skills.sh/nerdynikhil/claude-ping-me/claude-ping-me', external: true },
  { name: 'Claude Narrator', description: 'Hear what Claude Code is doing — out loud', category: 'claude', icon: '🎙️', href: '/claude-narrator', external: false },
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

const FAQ = [
  {
    q: 'What kind of work do you do?',
    a: 'I build and ship products — iOS apps, web tools, Chrome extensions, and AI utilities. Idea to App Store, solo. 18+ shipped and counting.',
  },
  {
    q: 'Are you available for freelance or collabs?',
    a: 'Yes — especially for founders who need a builder, not a team. If you have something worth shipping fast, I\'m interested.',
  },
  {
    q: 'What\'s your edge over an agency?',
    a: 'One person, full stack, zero handoffs. I design, code, ship, and iterate. You talk to the person actually building your product.',
  },
]

const PAIN_POINTS = [
  {
    title: 'Stuck at the prototype.',
    body: 'It demos well in a Loom video. But it never hits the App Store, never gets real users, never becomes a product.',
  },
  {
    title: 'Building alone is brutal.',
    body: 'Design, code, deploy, market — every hat on one head. Most solo builders burn out before v1.',
  },
  {
    title: 'Shipped the wrong thing.',
    body: 'Months of work on a tool that solved your problem, not your users\'. Fast to build, slow to find traction.',
  },
]

function ProjectLink({ project, children }: { project: Project; children: React.ReactNode }) {
  const style: React.CSSProperties = {
    display: 'block',
    textDecoration: 'none',
    color: 'inherit',
    height: '100%',
  }
  if (project.external) {
    return (
      <a href={project.href} target="_blank" rel="noopener noreferrer" style={style}>
        {children}
      </a>
    )
  }
  return <Link to={project.href} style={style}>{children}</Link>
}

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
      {showThumb && (
        <div
          style={{
            position: 'absolute',
            bottom: 'calc(100% + 8px)',
            left: '50%',
            transform: hovered ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(8px)',
            width: `${DISPLAY_W}px`,
            overflow: 'hidden',
            borderRadius: '12px',
            border: '1px solid rgba(90,85,80,0.12)',
            boxShadow: '0 24px 64px rgba(28,25,23,0.18)',
            zIndex: 200,
            pointerEvents: 'none',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.2s ease, transform 0.2s ease',
          }}
        >
          <div style={{ width: DISPLAY_W, height: DISPLAY_H, position: 'relative', overflow: 'hidden', background: '#fcf9f3' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, opacity: iframeLoaded ? 0 : 1, transition: 'opacity 0.3s ease' }}>
              <Spinner size="md" style={{ color: 'rgba(90,85,80,0.3)' }} />
            </div>
            <iframe
              src={hovered ? project.href : undefined}
              title={`${project.name} preview`}
              style={{ width: IFRAME_W, height: IFRAME_H, transform: `scale(${SCALE})`, transformOrigin: 'top left', border: 'none', pointerEvents: 'none', opacity: iframeLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
              sandbox="allow-scripts allow-same-origin"
              onLoad={() => setIframeLoaded(true)}
            />
          </div>
        </div>
      )}

      <ProjectLink project={project}>
        <div
          style={{
            background: 'var(--cream-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-card)',
            padding: '1.5rem',
            height: '100%',
            transition: 'border-color 0.15s, box-shadow 0.15s',
            boxShadow: hovered ? '0 8px 32px rgba(28,25,23,0.06)' : 'none',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
            {isImageIcon ? (
              <img src={(project.icon as { src: string }).src} alt={project.name} style={{ width: '2.5rem', height: '2.5rem', objectFit: 'cover', borderRadius: '8px' }} />
            ) : (
              <span style={{ fontSize: '1.75rem', lineHeight: 1 }}>{project.icon as string}</span>
            )}
            <span style={{ fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '999px', border: '1px solid var(--border-strong)', color: 'var(--text-faint)' }}>
              {BADGE_LABEL[project.category]}
            </span>
          </div>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.125rem', color: 'var(--text-muted)', margin: '0 0 0.5rem', lineHeight: 1.25 }}>
            {project.name}
          </p>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-faint)', lineHeight: 1.55, margin: '0 0 1rem' }}>
            {project.description}
          </p>
          <span style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-muted)' }}>
            {project.external ? 'Visit →' : 'View →'}
          </span>
        </div>
      </ProjectLink>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label" style={{ textAlign: 'center', marginBottom: '1rem' }}>{children}</p>
}

function SectionHeading({ children, italic }: { children: React.ReactNode; italic?: string }) {
  return (
    <h2 style={{
      fontFamily: 'var(--font-heading)',
      fontSize: 'clamp(1.75rem, 4vw, 3.25rem)',
      fontWeight: 400,
      letterSpacing: '-0.02em',
      lineHeight: 1.12,
      color: 'var(--text-muted)',
      textAlign: 'center',
      maxWidth: '640px',
      margin: '0 auto 1rem',
    }}>
      {children}
      {italic && <> <em style={{ fontStyle: 'italic' }}>{italic}</em></>}
    </h2>
  )
}

function SectionLead({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      textAlign: 'center',
      color: 'var(--text-faint)',
      maxWidth: '520px',
      margin: '0 auto 3rem',
      fontSize: '0.9375rem',
      lineHeight: 1.65,
    }}>
      {children}
    </p>
  )
}

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

  const navLinks = [
    { label: 'Builds', href: '#builds' },
    { label: 'Notes', href: '#notes' },
    { label: 'Activity', href: '#activity' },
    { label: 'GitHub', href: 'https://github.com/nerdynikhil', external: true },
  ]

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream)', color: 'var(--text)' }}>

      {/* ── Hero ── */}
      <section style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}>
        {/* Colorful terrain hero background */}
        <img
          src="/images/hero-terrain.jpg"
          alt=""
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
          }}
        />

        {/* Readability overlay for hero text */}
        <div aria-hidden style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'linear-gradient(rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 65%)',
        }} />
        <div aria-hidden style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 45%)',
        }} />
        {/* Fade into cream content below */}
        <div aria-hidden style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          pointerEvents: 'none',
          background: 'linear-gradient(to bottom, transparent, var(--cream))',
        }} />

        {/* Nav */}
        <nav style={{ position: 'relative', zIndex: 10, padding: '0 1.5rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', textShadow: '0 1px 8px rgba(0,0,0,0.25)' }}>
              nerdynikhil
            </span>
            <div className="portfolio-nav-links" style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
              {navLinks.map(link => (
                link.external ? (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="nav-link-item"
                    style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)', textDecoration: 'none', transition: 'color 0.15s', textShadow: '0 1px 4px rgba(0,0,0,0.2)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,1)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                  >{link.label}</a>
                ) : (
                  <a key={link.label} href={link.href} className="nav-link-item"
                    style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)', textDecoration: 'none', transition: 'color 0.15s', textShadow: '0 1px 4px rgba(0,0,0,0.2)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,1)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                  >{link.label}</a>
                )
              ))}
              <a href="#connect" style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#fff',
                background: 'rgba(0,0,0,0.35)',
                border: '1px solid rgba(255,255,255,0.35)',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-btn)',
                textDecoration: 'none',
                backdropFilter: 'blur(8px)',
              }}>
                Get in touch
              </a>
            </div>
          </div>
        </nav>

        {/* Hero content */}
        <div style={{ position: 'relative', zIndex: 10, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem 1.5rem 6rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.625rem',
            marginBottom: '2rem',
            fontSize: '0.8125rem',
            color: 'rgba(255,255,255,0.85)',
            background: 'rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '999px',
            padding: '0.4rem 1rem',
            backdropFilter: 'blur(8px)',
          }}>
            <span>18+ products shipped · iOS, web &amp; AI</span>
          </div>

          <h1 className="hero-headline">
            I Build Things{' '}
            <em>People Use</em>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            color: 'rgba(255,255,255,0.85)',
            maxWidth: '520px',
            margin: '0 auto 2rem',
            lineHeight: 1.65,
            textShadow: '0 1px 12px rgba(0,0,0,0.25)',
          }}>
            Nikhil Barik — solo builder of iOS apps, developer tools, and AI utilities.
            <br />
            From first commit to the App Store. No team required.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#builds" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              background: '#fff',
              color: 'var(--text-muted)',
              padding: '0.75rem 1.5rem',
              borderRadius: 'var(--radius-btn)',
              fontWeight: 500,
              fontSize: '0.875rem',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            }}>
              See the work <span>→</span>
            </a>
            <a href="#connect" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              background: 'rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.95)',
              padding: '0.75rem 1.5rem',
              borderRadius: 'var(--radius-btn)',
              fontWeight: 500,
              fontSize: '0.875rem',
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.35)',
              backdropFilter: 'blur(12px)',
            }}>
              Start a conversation <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── What's Broken ── */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '960px', margin: '0 auto' }}>
        <SectionLabel>The Builder's Gap</SectionLabel>
        <SectionHeading italic="leave the notebook.">Most ideas never</SectionHeading>
        <SectionLead>
          Not because they're bad ideas. Because building solo is hard —
          <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}> and most people stop at the prototype.</em>
        </SectionLead>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {PAIN_POINTS.map(point => (
            <article key={point.title} style={{
              background: 'var(--cream-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-card)',
              padding: '1.5rem',
            }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.0625rem', fontWeight: 400, color: 'var(--text-muted)', margin: '0 0 0.5rem' }}>
                {point.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-faint)', margin: 0, lineHeight: 1.55 }}>
                {point.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── The Solution / Builds ── */}
      <section id="builds" style={{ padding: '5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <SectionLabel>The Work</SectionLabel>
        <SectionHeading italic="not promises.">Proof,</SectionHeading>
        <SectionLead>
          {activeTab === 'all'
            ? 'Every product below started as an idea and shipped to real users.'
            : `${TABS.find(t => t.id === activeTab)?.label} — built solo, shipped live.`}{' '}
          SaaS, App Store, Chrome Web Store, and beyond.
        </SectionLead>

        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {TABS.map(tab => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '0.4rem 1rem',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  borderRadius: '999px',
                  border: isActive ? '1px solid var(--text-muted)' : '1px solid var(--border-strong)',
                  background: isActive ? 'var(--text-muted)' : 'transparent',
                  color: isActive ? '#fff' : 'var(--text-faint)',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
          {filteredProjects.map(project => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      {/* ── Field Notes ── */}
      <section id="notes" style={{ padding: '5rem 1.5rem', maxWidth: '720px', margin: '0 auto' }}>
        <SectionLabel>Field Notes</SectionLabel>
        <SectionHeading italic="actually work.">How products</SectionHeading>
        <SectionLead>
          Teardowns and strategy from Swiggy, Zomato, and Blinkit — the thinking behind products that win.
        </SectionLead>

        <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-card)', overflow: 'hidden', background: 'var(--cream-card)' }}>
          {BLOG_POSTS.map((post, i) => (
            <Link
              key={post.href}
              to={post.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem 1.25rem',
                borderBottom: i < BLOG_POSTS.length - 1 ? '1px solid var(--border)' : 'none',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(90,85,80,0.03)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <span style={{ fontSize: '0.6875rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '999px', border: '1px solid var(--border-strong)', color: 'var(--text-faint)', flexShrink: 0, minWidth: '5rem', textAlign: 'center' }}>
                {post.type}
              </span>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--text-muted)', flex: 1 }}>
                {post.title}
              </span>
              <span style={{ color: 'var(--text-faint)', flexShrink: 0 }}>→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Impact ── */}
      <div style={{ textAlign: 'center', padding: '4rem 1.5rem', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1, color: 'var(--text-muted)', margin: 0 }}>
          18+ products
        </p>
        <p style={{ color: 'var(--text-faint)', fontSize: '0.9375rem', marginTop: '0.75rem', maxWidth: '360px', marginLeft: 'auto', marginRight: 'auto' }}>
          Shipped solo — App Store launches, SaaS tools, Chrome extensions, and AI utilities.
        </p>
      </div>

      {/* ── Activity ── */}
      <section id="activity" style={{ padding: '5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <SectionLabel>Build in Public</SectionLabel>
        <SectionHeading italic="the workbench.">From</SectionHeading>
        <SectionLead>
          Unfiltered updates on what's shipping, what's breaking, and what's next.
        </SectionLead>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          <div>
            <p className="section-label" style={{ marginBottom: '1.25rem' }}>Latest on X</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '700px', overflowY: 'auto' }}>
              {['2033295611467034829', '2007933833954652456', '2035759121442721831', '2035752805512946139', '2035344623405854958', '2034294493055447054', '2033453219964150260', '2030392612050645145'].map(id => (
                <TweetErrorBoundary key={id}>
                  <div className="light">
                    <Tweet id={id} />
                  </div>
                </TweetErrorBoundary>
              ))}
            </div>
          </div>
          <div>
            <p className="section-label" style={{ marginBottom: '1.25rem' }}>Instagram</p>
            <figure data-behold-id="tmMPJq7BrnHtNOTFTouD"></figure>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '640px', margin: '0 auto' }}>
        <SectionLabel>Before You Reach Out</SectionLabel>
        <SectionHeading italic="you might ask">Questions</SectionHeading>
        <ul style={{ listStyle: 'none', padding: 0, margin: '2rem 0 0' }}>
          {FAQ.map(item => (
            <li key={item.q} style={{ borderBottom: '1px solid var(--border)', padding: '1.25rem 0' }}>
              <strong style={{ display: 'block', fontWeight: 500, fontSize: '0.9375rem', color: 'var(--text)', marginBottom: '0.375rem' }}>{item.q}</strong>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-faint)', lineHeight: 1.55 }}>{item.a}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Connect CTA ── */}
      <section id="connect" style={{ padding: '3rem 1.5rem 6rem', maxWidth: '640px', margin: '0 auto' }}>
        <div style={{
          background: 'var(--cream-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-card)',
          padding: '2.5rem 2rem',
          textAlign: 'center',
        }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 400, color: 'var(--text-muted)', margin: '0 0 0.75rem', lineHeight: 1.15 }}>
            Got something worth building?<br /><em style={{ fontStyle: 'italic' }}>Let's talk.</em>
          </h2>
          <p style={{ color: 'var(--text-faint)', fontSize: '0.9375rem', margin: '0 0 1.5rem' }}>
            Whether you're a founder with an idea or a team that needs a builder — one message starts it.
          </p>
          <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { label: 'LinkedIn', href: 'https://linkedin.com/in/nerdynikhil' },
              { label: 'GitHub', href: 'https://github.com/nerdynikhil' },
              { label: 'Twitter', href: 'https://twitter.com/nerdynikhil' },
              { label: 'Email', href: 'mailto:nerdynikhil@outlook.com' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === 'Email' ? undefined : '_blank'}
                rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.625rem 1.25rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                  background: '#fff',
                  border: '1px solid var(--border-strong)',
                  borderRadius: 'var(--radius-btn)',
                  textDecoration: 'none',
                  transition: 'border-color 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--text-muted)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border-strong)')}
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--text-faint)' }}>nerdynikhil</span>
          <span style={{ fontSize: '0.8125rem', color: 'var(--text-faint)' }}>Built solo · © {new Date().getFullYear()} Nikhil Barik</span>
        </div>
      </footer>
    </div>
  )
}
