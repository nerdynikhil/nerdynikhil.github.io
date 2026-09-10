import { useState } from 'react'

interface Showcase {
  name: string
  tagline: string
  href: string
  img: string
}

const SHOWCASES: Showcase[] = [
  { name: 'SlidesNow', tagline: 'AI slides on WhatsApp in 60s', href: 'https://slidesnow.app/', img: '/images/showcase/slidesnow.jpeg' },
  { name: 'Ablate', tagline: 'Measure if your CLAUDE.md works', href: 'https://ablatehq.com/', img: '/images/showcase/ablate.jpeg' },
  { name: 'QuickDevTools', tagline: '47 dev tools · no signup', href: 'https://quickdevtools.online/', img: '/images/showcase/quickdevtools.jpeg' },
  { name: 'EasyN8N', tagline: 'Plain English → n8n workflows', href: 'https://easyn8n.online/', img: '/images/showcase/easyn8n.jpeg' },
  { name: 'EasyClaw', tagline: 'Track YC roles in real time', href: 'https://easyyclaw.cloud/', img: '/images/showcase/easyclaw.jpeg' },
  { name: 'ClaudeScore', tagline: 'How much of your code is Claude?', href: 'https://claudescore.wtf/', img: '/images/showcase/claudescore.jpeg' },
  { name: 'ResizeForForms', tagline: 'Resize for 130+ Indian forms', href: 'https://resizeforforms.online/', img: '/images/showcase/resizeforforms.jpeg' },
  { name: 'EraseMyBackground', tagline: 'Remove image backgrounds free', href: 'https://erasemybackground.online/', img: '/images/showcase/erasemybackground.jpeg' },
]

function BrowserFrame({ item }: { item: Showcase }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="showcase-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        flexShrink: 0,
        width: '360px',
        textDecoration: 'none',
        color: 'inherit',
        borderRadius: '14px',
        overflow: 'hidden',
        border: '1px solid var(--border)',
        background: 'var(--cream-card)',
        boxShadow: hovered ? '0 24px 64px rgba(28,25,23,0.16)' : '0 4px 20px rgba(28,25,23,0.05)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}
    >
      {/* Browser chrome bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.6rem 0.85rem',
        borderBottom: '1px solid var(--border)',
        background: 'rgba(90,85,80,0.03)',
      }}>
        <span style={{ display: 'flex', gap: '5px' }}>
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#e0aa9a' }} />
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#e6cf9a' }} />
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#a9c4a0' }} />
        </span>
        <span style={{
          flex: 1,
          fontSize: '0.6875rem',
          color: 'var(--text-faint)',
          background: 'var(--cream)',
          border: '1px solid var(--border)',
          borderRadius: '999px',
          padding: '2px 10px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          textAlign: 'center',
        }}>
          {item.href.replace(/^https?:\/\//, '').replace(/\/$/, '')}
        </span>
      </div>

      {/* Live screenshot */}
      <div style={{ position: 'relative', width: '100%', height: '225px', overflow: 'hidden', background: '#fcf9f3' }}>
        <img
          src={item.img}
          alt={`${item.name} website preview`}
          loading="lazy"
          style={{
            width: '100%',
            display: 'block',
            transform: hovered ? 'translateY(calc(-100% + 225px))' : 'translateY(0)',
            transition: 'transform 3s ease',
          }}
        />
      </div>

      {/* Caption */}
      <div style={{ padding: '0.85rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
        <div style={{ minWidth: 0 }}>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.2 }}>
            {item.name}
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-faint)', margin: '0.15rem 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {item.tagline}
          </p>
        </div>
        <span style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-muted)', flexShrink: 0 }}>
          Visit ↗
        </span>
      </div>
    </a>
  )
}

export default function ProductShowcase() {
  const [paused, setPaused] = useState(false)
  // Duplicate the list so the marquee loops seamlessly.
  const loop = [...SHOWCASES, ...SHOWCASES]

  return (
    <div style={{ marginBottom: '3rem' }}>
      <p className="section-label" style={{ textAlign: 'center', marginBottom: '1.25rem', color: 'var(--text-faint)' }}>
        Live now — quick view
      </p>

      <div
        className="showcase-viewport"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ position: 'relative', overflow: 'hidden', maskImage: 'linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)' }}
      >
        <div
          className="showcase-track"
          style={{
            display: 'flex',
            gap: '1.25rem',
            width: 'max-content',
            animation: 'showcase-scroll 44s linear infinite',
            animationPlayState: paused ? 'paused' : 'running',
            padding: '0.75rem 0',
          }}
        >
          {loop.map((item, i) => (
            <BrowserFrame key={`${item.name}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
