import React, { useState, useEffect, Component } from 'react'
import { Link } from 'react-router-dom'
import { Spinner } from '@/components/ui/spinner'
import { Tweet } from 'react-tweet'
import ProductShowcase from './ProductShowcase'
import {
  Wrench, Workflow, Search, Car, Image as ImageIcon, Ruler, Eraser,
  Clock, Bell, Mic, BarChart3, Rocket, Package, Ship,
  type LucideIcon,
} from 'lucide-react'

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
  icon: LucideIcon | { src: string }
  href: string
  external: boolean
}

const PROJECTS: Project[] = [
  { name: 'QuickDevTools', description: 'Free dev utilities — no signup, no nonsense', category: 'saas', icon: Wrench, href: 'https://quickdevtools.online/', external: true },
  { name: 'EasyN8N', description: 'Self-host n8n workflows in one click', category: 'saas', icon: Workflow, href: 'https://easyn8n.online/', external: true },
  { name: 'EasyClaw', description: 'Track YC companies and open roles in real time', category: 'saas', icon: Search, href: 'https://easyyclaw.cloud/', external: true },
  { name: 'PetrolheadX', description: 'Car enthusiast community', category: 'saas', icon: Car, href: 'http://petrolheadx.autos/', external: true },
  { name: 'Postrr', description: 'Social media post generator', category: 'saas', icon: ImageIcon, href: 'https://postrr.online/', external: true },
  { name: 'ResizeForForms', description: 'Resize images for forms', category: 'saas', icon: Ruler, href: 'https://resizeforforms.online/', external: true },
  { name: 'EraseMyBackground', description: 'Remove image backgrounds', category: 'saas', icon: Eraser, href: 'https://erasemybackground.online/', external: true },
  { name: 'ChatterCards', description: 'AI-powered cards that kill awkward silences', category: 'ios', icon: { src: '/images/chattercards/app-icon.webp' }, href: '/chattercards', external: false },
  { name: 'LingoDuel', description: 'Language learning, but make it competitive', category: 'ios', icon: { src: '/images/lingoduel/lingoduel-logo.png' }, href: '/lingoduel', external: false },
  { name: 'Serenight', description: 'Calm mind with ambient sounds', category: 'ios', icon: { src: '/images/serenight/logo.png' }, href: '/serenight', external: false },
  { name: 'TrueHue', description: 'Test your color perception', category: 'ios', icon: { src: '/images/truehue/TrueHue.png' }, href: '/truehue', external: false },
  { name: 'Subscriptionly', description: 'Track all your subscriptions', category: 'ios', icon: { src: '/images/subscriptionly/360x360ia.png' }, href: '/subscriptionly', external: false },
  { name: 'WDTG', description: "Where Did The Time Go?", category: 'ios', icon: Clock, href: '/wdtg', external: false },
  { name: 'Behance2PDF', description: 'Export Behance projects as PDF', category: 'chrome', icon: { src: 'https://github.com/nerdynikhil/Behance2PDF/blob/main/assets/icons/icon1024.png?raw=true' }, href: '/behance2pdf', external: false },
  { name: 'Faster Udemy', description: 'Speed up Udemy videos beyond 2x', category: 'chrome', icon: { src: 'https://github.com/nerdynikhil/faster-udemy/blob/main/faster-udemy-128.png?raw=true' }, href: '/faster-udemy', external: false },
  { name: 'ETA Tube', description: 'YouTube playlist time remaining', category: 'chrome', icon: { src: '/images/eta-tube/store-icon-128x128.png' }, href: '/eta-tube', external: false },
  { name: 'Meme Sounds', description: 'Play meme sounds while coding', category: 'claude', icon: { src: '/images/meme-sounds.png' }, href: 'https://marketplace.visualstudio.com/items?itemName=nerdynikhil.meme-sounds', external: true },
  { name: 'claude-ping-me', description: 'Notify when Claude is waiting', category: 'claude', icon: Bell, href: 'https://skills.sh/nerdynikhil/claude-ping-me/claude-ping-me', external: true },
  { name: 'Claude Narrator', description: 'Hear what Claude Code is doing — out loud', category: 'claude', icon: Mic, href: '/claude-narrator', external: false },
  { name: 'ClaudeScore', description: 'Score and compare your Claude usage', category: 'claude', icon: BarChart3, href: 'https://claudescore.wtf/', external: true },
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
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '8px',
                background: 'rgba(90,85,80,0.05)',
                border: '1px solid var(--border)',
              }}>
                {(() => {
                  const Icon = project.icon as LucideIcon
                  return <Icon size={20} strokeWidth={1.5} color="var(--text-muted)" />
                })()}
              </span>
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

  const navLinks: { label: string; href: string; external?: boolean }[] = [
    { label: 'Builds', href: '#builds' },
    { label: 'Activity', href: '#activity' },
    { label: 'Questions', href: '#connect' },
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
          src="/images/hero-meadow.png"
          alt=""
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center bottom',
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

        {/* Nav — Andy-style: logo left · links centered · action right */}
        <nav style={{ position: 'relative', zIndex: 10, padding: '0 1.5rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', height: '68px', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'rgba(255,255,255,0.98)', textShadow: '0 1px 10px rgba(0,0,0,0.3)', justifySelf: 'start' }}>
              nerdynikhil
            </span>
            <div className="portfolio-nav-center">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="nav-link-item"
                  style={{ fontSize: '0.9375rem', fontWeight: 500, color: 'rgba(255,255,255,0.82)', textDecoration: 'none', transition: 'color 0.15s', textShadow: '0 1px 4px rgba(0,0,0,0.2)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,1)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.82)')}
                >{link.label}</a>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', justifySelf: 'end' }}>
              <a href="#connect" style={{
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: '#fff',
                background: 'rgba(255,255,255,0.14)',
                border: '1px solid rgba(255,255,255,0.4)',
                padding: '0.55rem 1.15rem',
                borderRadius: 'var(--radius-btn)',
                textDecoration: 'none',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
              }}>
                Get in touch
              </a>
            </div>
          </div>
        </nav>

        {/* Hero content — Andy-style headline with inline squircle icons */}
        <div style={{ position: 'relative', zIndex: 10, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '1.5rem 1.5rem 3rem' }}>
          <h1 className="hero-headline">
            <span className="hero-line">
              I build
              <span className="hero-squircle" style={{ '--squircle-glow': 'rgba(56,161,105,0.45)', background: 'linear-gradient(160deg, #48bb78, #2f9e5f)' } as React.CSSProperties}>
                <Package size="0.5em" strokeWidth={2.4} color="#fff" style={{ width: '0.5em', height: '0.5em' }} />
              </span>
              products
              <span className="hero-squircle" style={{ '--squircle-glow': 'rgba(237,137,54,0.45)', background: 'linear-gradient(160deg, #f6ad55, #ed8936)' } as React.CSSProperties}>
                <Rocket size="0.5em" strokeWidth={2.4} color="#fff" style={{ width: '0.5em', height: '0.5em' }} />
              </span>
            </span>
            <span className="hero-line">
              <em>and ship</em>
              <span className="hero-squircle" style={{ '--squircle-glow': 'rgba(66,133,244,0.45)', background: 'linear-gradient(160deg, #5b9df9, #3b82f6)' } as React.CSSProperties}>
                <Ship size="0.5em" strokeWidth={2.4} color="#fff" style={{ width: '0.5em', height: '0.5em' }} />
              </span>
              <em>them solo.</em>
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.1875rem)',
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '540px',
            margin: '0.5rem auto 2.25rem',
            lineHeight: 1.6,
            textShadow: '0 1px 12px rgba(0,0,0,0.28)',
          }}>
            Nikhil Barik designs, codes, and ships iOS apps, SaaS tools,
            Chrome extensions, and AI utilities — solo, from idea to launch.
          </p>

          <a href="#builds" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'linear-gradient(180deg, #f6ad55, #ed8936)',
            color: '#fff',
            padding: '0.85rem 2rem',
            borderRadius: 'var(--radius-btn)',
            fontWeight: 600,
            fontSize: '0.9375rem',
            textDecoration: 'none',
            boxShadow: '0 8px 24px rgba(237,137,54,0.4), inset 0 1px 0 rgba(255,255,255,0.35)',
            transition: 'transform 0.15s, box-shadow 0.15s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(237,137,54,0.5), inset 0 1px 0 rgba(255,255,255,0.35)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(237,137,54,0.4), inset 0 1px 0 rgba(255,255,255,0.35)' }}
          >
            See the Work For Free
          </a>
        </div>

        {/* Shipped-to brand strip */}
        <div className="hero-brands">
          {['App Store', 'Chrome Web Store', 'Product Hunt', 'VS Code Marketplace'].map(brand => (
            <span key={brand} className="hero-brand">{brand}</span>
          ))}
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

        <ProductShowcase />

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
              {['2093718255122972977', '2033295611467034829', '2007933833954652456', '2035759121442721831', '2035752805512946139', '2035344623405854958', '2034294493055447054', '2033453219964150260', '2030392612050645145'].map(id => (
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
