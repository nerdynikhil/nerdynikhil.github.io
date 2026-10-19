import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SEO from '../../components/SEO'
import { Compare } from './components/Compare'
import { Download } from './components/Download'
import { Faq } from './components/Faq'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Pricing } from './components/Pricing'
import { Privacy } from './components/Privacy'
import { Professions } from './components/Professions'
import { Verdicts } from './components/Verdicts'
import './sector9.css'

export default function Sector9() {
  const { hash } = useLocation()

  // The page is lazy-loaded, so the browser's own jump to /sector9#section
  // happens before the target exists. Scroll to it once it has rendered.
  useEffect(() => {
    if (!hash) return
    document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
  }, [hash])

  return (
    <>
      <SEO
        title="Sector9 — Disk space, explained"
        description="Sector9 is a disk space analyzer for macOS. It reads your disk the way you work and tells you what each thing costs to get back. On-device, no account, no telemetry."
        url="https://www.nerdynikhil.com/sector9"
        image="https://www.nerdynikhil.com/sector9/og-image.png"
      />

      <div className="s9">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <main id="main">
          <Hero />
          <Verdicts />
          <Professions />
          <Features />
          <Privacy />
          <Compare />
          <Pricing />
          <Faq />
          <Download />
        </main>
        <Footer />
      </div>
    </>
  )
}
