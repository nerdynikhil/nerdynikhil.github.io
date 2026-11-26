import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

/* LingoDuel landing page. Mirrors the app's "Playground" design: a warm cream page, ink type,
   an orange action colour, pastel tiles and Dot the mascot. Live on the App Store since November 2026. */

const APP_STORE_LIVE = true
const APP_STORE_URL = 'https://apps.apple.com/app/lingoduel-speak-a-language/id6829457902'
const IMG = '/images/lingoduel/v2'

const c = {
  page: '#FFFAEE',
  surface: '#FFFFFF',
  well: '#FFF1D9',
  line: '#EFE3CB',
  ink: '#1D1A16',
  inkSoft: '#857B6E',
  orange: '#F28A4B',
  orangeEdge: '#D46B2C',
  orangeSoft: '#FFE6D4',
  coral: '#F2665A',
  coralSoft: '#FFE4E0',
  grass: '#4CC25F',
  periwinkle: '#C7CCFA',
  butter: '#FFE07A',
  mint: '#BDEBDD',
  peach: '#FFD9C2',
  sky: '#8FD3F6',
}

const rounded = `ui-rounded, "SF Pro Rounded", "Nunito", system-ui, -apple-system, sans-serif`

const hellos = [
  ['Hola', 'Spanish'],
  ['Bonjour', 'French'],
  ['Hallo', 'German'],
  ['Ciao', 'Italian'],
  ['Olá', 'Portuguese'],
  ['こんにちは', 'Japanese'],
  ['안녕하세요', 'Korean'],
  ['你好', 'Chinese'],
  ['नमस्ते', 'Hindi'],
  ['Hello', 'English'],
]

/* MARK: Small building blocks */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return { ref, shown }
}

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function Phone({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={`relative rounded-[3rem] p-[10px] shadow-[0_40px_80px_-24px_rgba(29,26,22,0.35),0_0_0_1px_rgba(29,26,22,0.06)] ${className}`}
      style={{ background: c.ink }}
    >
      <div className="overflow-hidden rounded-[2.4rem]" style={{ background: c.page }}>
        <img src={src} alt={alt} className="block h-auto w-full" loading="lazy" decoding="async" />
      </div>
    </div>
  )
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.14em]" style={{ color: c.orange }}>
      {children}
    </p>
  )
}

function SectionTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`text-balance text-[clamp(2.1rem,4.6vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.035em] ${className}`}
      style={{ fontFamily: rounded, color: c.ink }}
    >
      {children}
    </h2>
  )
}

function AppleLogo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" className={className} aria-hidden="true" fill="currentColor">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  )
}

function StoreButton() {
  const inner = (
    <>
      <AppleLogo className="-mt-0.5 h-[22px] w-[22px]" />
      <span className="flex flex-col text-left leading-none">
        <span className="text-[11px] font-medium opacity-75">{APP_STORE_LIVE ? 'Download on the' : 'Coming soon to the'}</span>
        <span className="mt-1 text-[17px] font-semibold tracking-[-0.01em]">App Store</span>
      </span>
    </>
  )
  const cls =
    'inline-flex items-center gap-3 rounded-2xl px-5 py-3 no-underline shadow-[0_10px_30px_-10px_rgba(29,26,22,0.5)] transition-transform duration-200 hover:-translate-y-0.5'
  const style = { background: c.ink, color: '#fff' }
  return APP_STORE_LIVE ? (
    <a href={APP_STORE_URL} className={cls} style={style}>
      {inner}
    </a>
  ) : (
    <span className={cls} style={style} aria-label="Coming soon to the App Store">
      {inner}
    </span>
  )
}

/* MARK: HTML recreations of app UI (crisp at any size) */

function MarginNote() {
  return (
    <div className="rounded-3xl border p-6 text-left sm:p-7" style={{ background: c.surface, borderColor: c.line }}>
      <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: c.inkSoft }}>
        You
      </p>
      <p className="mb-5 rounded-2xl px-4 py-3 text-[17px] font-semibold" style={{ background: c.ink, color: '#fff', fontFamily: rounded }}>
        Quiero una mesa para dos.
      </p>
      <div className="rounded-2xl p-4" style={{ background: c.coralSoft }}>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: c.coral }}>
            Better
          </span>
          <span className="text-[15px] font-extrabold" style={{ color: c.orangeEdge, fontFamily: rounded }}>
            +7
          </span>
        </div>
        <p className="text-[18px] font-bold" style={{ color: c.coral, fontFamily: rounded }}>
          Quisiera una mesa para dos, por favor.
        </p>
        <p className="mt-2 text-[13px]" style={{ color: c.inkSoft }}>
          Grammar 3/5 · Vocabulary 4/5
        </p>
        <p className="mt-3 border-t pt-3 text-[14px] leading-relaxed" style={{ borderColor: 'rgba(242,102,90,0.2)', color: c.ink }}>
          <strong>Why?</strong> Quiero is direct. Quisiera (“I would like”) is the polite form waiters expect.
        </p>
      </div>
    </div>
  )
}

function WidgetTile({ dark, word, translation, language }: { dark?: boolean; word: string; translation: string; language: string }) {
  return (
    <div
      className="aspect-square rounded-[1.6rem] p-4 shadow-[0_12px_30px_-12px_rgba(29,26,22,0.25)]"
      style={{ background: dark ? '#16130F' : c.page }}
    >
      <div className="flex items-center gap-1.5">
        <img src={`${IMG}/icon.webp`} alt="" className="h-4 w-4 rounded-[5px]" />
        <span className="text-[9px] font-extrabold uppercase tracking-[0.08em]" style={{ color: dark ? '#B5AB9C' : c.inkSoft }}>
          Word of the day
        </span>
      </div>
      <p
        className="mt-5 text-[24px] font-black leading-none tracking-[-0.03em]"
        style={{ color: dark ? '#F59A5E' : c.orange, fontFamily: rounded }}
      >
        {word}
      </p>
      <p className="mt-1 text-[14px] font-bold" style={{ color: dark ? '#FFF7EA' : c.ink, fontFamily: rounded }}>
        {translation}
      </p>
      <span
        className="mt-4 inline-block rounded-full px-2 py-0.5 text-[10px] font-bold"
        style={{ background: dark ? '#3D2A1D' : c.orangeSoft, color: dark ? '#F59A5E' : c.orange }}
      >
        {language}
      </span>
    </div>
  )
}

function IconTile({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: c.ink, color: '#fff' }} aria-hidden="true">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </span>
  )
}

function Check({ color = c.grass }: { color?: string }) {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 flex-none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill={color} opacity="0.16" />
      <path d="M6 10.4l2.6 2.6L14 7.6" stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* MARK: Page */

const steps = [
  {
    n: '01',
    title: 'Pick a real scene',
    body: 'A restaurant, a taxi, a hotel desk. 25 everyday scenes across four levels, from first words to high-stakes moments.',
    img: `${IMG}/home.webp`,
    alt: 'The LingoDuel Path with today’s goal and streak',
    tint: c.sky,
  },
  {
    n: '02',
    title: 'Say it out loud',
    body: 'Your AI partner plays the other role and answers back. Hold the mic to speak, or type. Stuck? Tap “Help me answer”.',
    img: `${IMG}/duel.webp`,
    alt: 'A duel in the Restaurant scene with the coach’s corrections',
    tint: c.peach,
  },
  {
    n: '03',
    title: 'Get coached, then pass',
    body: 'Every line is marked for grammar and vocabulary. Fix it, try again, clear the scene and keep your streak alive.',
    img: `${IMG}/summary.webp`,
    alt: 'The result screen: 86% accuracy, XP earned and streak',
    tint: c.butter,
  },
]

export default function LingoDuel() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="min-h-screen antialiased"
      style={{ background: c.page, color: c.ink, fontFamily: `system-ui, -apple-system, "SF Pro Text", sans-serif` }}
    >
      <SEO
        title="LingoDuel: Speak a language with an AI partner"
        description="Stop scrolling, start speaking. Hold real conversations in 10 languages with an AI partner who plays the other role, and get coached on every line. Free on the App Store."
        url="https://www.nerdynikhil.com/lingoduel"
        image="https://www.nerdynikhil.com/images/lingoduel/hero-image.png"
      />

      {/* Nav */}
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? 'backdrop-blur-xl' : ''}`}
        style={{ background: scrolled ? 'rgba(255,250,238,0.8)' : 'transparent', borderColor: scrolled ? c.line : 'transparent' }}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link to="/lingoduel" className="flex items-center gap-2.5 no-underline">
            <img src={`${IMG}/icon.webp`} alt="" className="h-8 w-8 rounded-[9px] shadow-[0_2px_6px_rgba(29,26,22,0.15)]" />
            <span className="text-[19px] font-extrabold tracking-[-0.02em]" style={{ color: c.ink, fontFamily: rounded }}>
              LingoDuel
            </span>
          </Link>
          <div className="flex items-center gap-6 sm:gap-8">
            <a href="#how" className="hidden text-[14px] font-medium no-underline transition-opacity hover:opacity-60 sm:inline" style={{ color: c.ink }}>
              How it works
            </a>
            <a href="#plus" className="hidden text-[14px] font-medium no-underline transition-opacity hover:opacity-60 sm:inline" style={{ color: c.ink }}>
              Pricing
            </a>
            <Link to="/lingoduel/support" className="text-[14px] font-medium no-underline transition-opacity hover:opacity-60" style={{ color: c.ink }}>
              Support
            </Link>
            <a
              href={APP_STORE_LIVE ? APP_STORE_URL : '#get'}
              className="rounded-full px-4 py-2 text-[14px] font-semibold no-underline transition-transform hover:-translate-y-px"
              style={{ background: c.ink, color: '#fff' }}
            >
              {APP_STORE_LIVE ? 'Get the app' : 'Coming soon'}
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 h-[720px] w-[1100px] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
            style={{ background: `radial-gradient(closest-side, ${c.orangeSoft}, transparent)` }}
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 pb-24 pt-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pb-32 lg:pt-20">
            <div>
              <Reveal>
                <span
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[13px] font-semibold"
                  style={{ background: c.surface, borderColor: c.line, color: c.ink }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: c.grass }} />
                  New on the App Store · 10 languages
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h1
                  className="mt-7 text-[clamp(2.9rem,7.4vw,5.1rem)] font-black leading-[0.95] tracking-[-0.045em]"
                  style={{ fontFamily: rounded, color: c.ink }}
                >
                  <span className="whitespace-nowrap">Stop scrolling.</span>
                  <br />
                  <span className="whitespace-nowrap">
                    Start <span style={{ color: c.orange }}>speaking.</span>
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-7 max-w-[34rem] text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.55]" style={{ color: c.inkSoft }}>
                  LingoDuel puts you in a real conversation from day one. An AI partner plays the waiter, the driver or the
                  receptionist, answers back in your new language, and a coach marks every line you say.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div id="get" className="mt-10 flex scroll-mt-24 flex-wrap items-center gap-5">
                  <StoreButton />
                  <a href="#how" className="text-[15px] font-semibold no-underline transition-opacity hover:opacity-60" style={{ color: c.ink }}>
                    See how it works →
                  </a>
                </div>
                <p className="mt-5 text-[13px]" style={{ color: c.inkSoft }}>
                  Free to start · 3 duels a day · iPhone with iOS 26 or later
                </p>
              </Reveal>
            </div>

            <Reveal delay={200} className="relative mx-auto w-full max-w-[340px]">
              <Phone src={`${IMG}/duel.webp`} alt="A LingoDuel conversation in Spanish with the coach’s notes" className="rotate-[1.5deg]" />
              <img
                src={`${IMG}/dot-wave.webp`}
                alt="Dot, the LingoDuel mascot, waving"
                className="absolute -bottom-8 -left-14 w-32 drop-shadow-[0_20px_25px_rgba(29,26,22,0.18)] sm:-left-24 sm:w-44"
              />
              <div
                className="absolute -right-3 top-[58%] rounded-2xl px-4 py-3 shadow-[0_18px_40px_-14px_rgba(29,26,22,0.35)] lg:-right-14"
                style={{ background: c.surface }}
              >
                <p className="text-[10px] font-extrabold uppercase tracking-[0.14em]" style={{ color: c.grass }}>
                  ✓ Well said
                </p>
                <p className="mt-0.5 text-[15px] font-extrabold" style={{ fontFamily: rounded }}>
                  +9 points
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Recognition */}
        <section className="border-y" style={{ borderColor: c.line }}>
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-5 py-7 sm:px-8">
            <span className="text-[12px] font-bold uppercase tracking-[0.14em]" style={{ color: c.inkSoft }}>
              Recognised by
            </span>
            <span className="flex items-center gap-2.5 text-[15px] font-semibold">
              <img src="/images/lingoduel/swiftdelhi-logo.png" alt="" className="h-6 w-6 rounded-md" />
              Regional Winner, Swift Delhi
            </span>
            <span className="flex items-center gap-2.5 text-[15px] font-semibold">
              <img src="/images/lingoduel/IHlogo.png" alt="" className="h-6 w-6 rounded-md" />
              Featured, IndieHub Hackathon
            </span>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-28 sm:px-8 lg:py-36">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>How it works</Eyebrow>
            <SectionTitle>A few minutes a day. Real conversations.</SectionTitle>
          </Reveal>
          <div className="mt-20 grid gap-16 md:grid-cols-3 md:gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="relative overflow-hidden rounded-[2rem] px-8 pt-10" style={{ background: s.tint, height: 440 }}>
                  <Phone src={s.img} alt={s.alt} className="mx-auto w-[82%]" />
                </div>
                <p className="mt-8 text-[13px] font-extrabold tracking-[0.1em]" style={{ color: c.orange, fontFamily: rounded }}>
                  {s.n}
                </p>
                <h3 className="mt-2 text-[24px] font-extrabold tracking-[-0.02em]" style={{ fontFamily: rounded }}>
                  {s.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.6]" style={{ color: c.inkSoft }}>
                  {s.body}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* The coach */}
        <section className="px-3 sm:px-5">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] px-6 py-20 sm:px-12 lg:px-20 lg:py-28" style={{ background: c.ink }}>
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <Reveal>
                <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.14em]" style={{ color: c.orange }}>
                  The coach
                </p>
                <h2
                  className="text-[clamp(2.1rem,4.6vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.035em]"
                  style={{ fontFamily: rounded, color: '#FFF7EA' }}
                >
                  Not just “wrong”.
                  <br />
                  The better way, and why.
                </h2>
                <p className="mt-6 max-w-md text-[17px] leading-[1.6]" style={{ color: '#B5AB9C' }}>
                  After every line you say, the coach shows how a native speaker would put it and explains the difference in
                  your own language. Say it again in full and earn the points back.
                </p>
                <ul className="mt-8 space-y-3 text-[16px]" style={{ color: '#FFF7EA' }}>
                  {['Grammar and vocabulary marked on every line', 'Explanations in 15 languages', 'Save any phrase to review later'].map((t) => (
                    <li key={t} className="flex gap-3">
                      <Check color={c.orange} />
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={150}>
                <div className="mx-auto max-w-md rotate-[-1deg]">
                  <MarginNote />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Bento */}
        <section className="mx-auto max-w-6xl px-5 py-28 sm:px-8 lg:py-36">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Everything you need</Eyebrow>
            <SectionTitle>Built to make speaking a habit.</SectionTitle>
          </Reveal>

          <div className="mt-16 grid gap-4 md:grid-cols-6">
            <Reveal className="md:col-span-4">
              <div className="h-full rounded-[2rem] p-8 sm:p-10" style={{ background: c.periwinkle }}>
                <h3 className="text-[26px] font-extrabold tracking-[-0.02em]" style={{ fontFamily: rounded }}>
                  10 languages
                </h3>
                <p className="mt-2 max-w-md text-[16px]" style={{ color: 'rgba(29,26,22,0.65)' }}>
                  Pick one, switch any time, and get explanations in your own language.
                </p>
                <div className="mt-8 flex flex-wrap gap-2.5">
                  {hellos.map(([word, lang]) => (
                    <span
                      key={lang}
                      title={lang}
                      className="rounded-full px-4 py-2 text-[16px] font-bold"
                      style={{ background: 'rgba(255,255,255,0.7)', fontFamily: rounded }}
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={80} className="md:col-span-2">
              <div className="flex h-full flex-col rounded-[2rem] p-8" style={{ background: c.butter }}>
                <h3 className="text-[26px] font-extrabold tracking-[-0.02em]" style={{ fontFamily: rounded }}>
                  Streaks that stick
                </h3>
                <p className="mt-2 text-[16px]" style={{ color: 'rgba(29,26,22,0.65)' }}>
                  Daily goals, XP and a gentle reminder at the time you choose.
                </p>
                <p className="mt-auto pt-8 text-[60px] font-black leading-none tracking-[-0.04em]" style={{ fontFamily: rounded }}>
                  🔥 12<span className="ml-2 text-[20px] font-bold tracking-normal">days</span>
                </p>
              </div>
            </Reveal>

            <Reveal delay={40} className="md:col-span-3">
              <div className="flex h-full flex-col gap-8 rounded-[2rem] p-8 sm:p-10" style={{ background: c.mint }}>
                <div>
                  <h3 className="text-[26px] font-extrabold tracking-[-0.02em]" style={{ fontFamily: rounded }}>
                    A word a day, on your Home Screen
                  </h3>
                  <p className="mt-2 text-[16px]" style={{ color: 'rgba(29,26,22,0.65)' }}>
                    In the language you’re learning. Tap it to hear it and see it in a sentence.
                  </p>
                </div>
                <div className="grid max-w-[340px] grid-cols-2 gap-3">
                  <WidgetTile word="bonjour" translation="hello" language="French" />
                  <WidgetTile dark word="ありがとう" translation="Thank you" language="Japanese" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="md:col-span-3">
              <div className="grid h-full gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] p-8" style={{ background: c.peach }}>
                  <IconTile>
                    <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z" />
                    <path d="M19 11a7 7 0 0 1-14 0M12 18v3" />
                  </IconTile>
                  <h3 className="mt-6 text-[22px] font-extrabold tracking-[-0.02em]" style={{ fontFamily: rounded }}>
                    Speak or type
                  </h3>
                  <p className="mt-2 text-[15px]" style={{ color: 'rgba(29,26,22,0.65)' }}>
                    Hold to talk, with on-device speech recognition where your iPhone supports it.
                  </p>
                </div>
                <div className="rounded-[2rem] border p-8" style={{ background: c.surface, borderColor: c.line }}>
                  <IconTile>
                    <rect x="5" y="11" width="14" height="10" rx="2.5" />
                    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                  </IconTile>
                  <h3 className="mt-6 text-[22px] font-extrabold tracking-[-0.02em]" style={{ fontFamily: rounded }}>
                    Private by design
                  </h3>
                  <p className="mt-2 text-[15px]" style={{ color: c.inkSoft }}>
                    No account, no ads, no tracking. Your progress stays on your iPhone.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Pricing */}
        <section id="plus" className="scroll-mt-20 border-t px-5 py-28 sm:px-8 lg:py-36" style={{ borderColor: c.line, background: c.well }}>
          <div className="mx-auto max-w-5xl">
            <Reveal className="mx-auto max-w-2xl text-center">
              <Eyebrow>Pricing</Eyebrow>
              <SectionTitle>Start free. Go further with Plus.</SectionTitle>
            </Reveal>

            <div className="mt-16 grid gap-5 md:grid-cols-2">
              <Reveal>
                <div className="flex h-full flex-col rounded-[2rem] border p-9" style={{ background: c.surface, borderColor: c.line }}>
                  <h3 className="text-[22px] font-extrabold" style={{ fontFamily: rounded }}>
                    Free
                  </h3>
                  <p className="mt-4 text-[52px] font-black leading-none tracking-[-0.04em]" style={{ fontFamily: rounded }}>
                    $0
                  </p>
                  <p className="mt-2 text-[15px]" style={{ color: c.inkSoft }}>
                    Everything you need to start speaking.
                  </p>
                  <ul className="mt-8 space-y-3 text-[16px]">
                    {['3 duels every day', 'Level 1: first words', 'All 10 languages', 'Word of the Day widget'].map((t) => (
                      <li key={t} className="flex gap-3">
                        <Check />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] p-9" style={{ background: c.ink, color: '#FFF7EA' }}>
                  <img src={`${IMG}/dot-cheer.webp`} alt="" className="pointer-events-none absolute right-7 top-7 w-20 sm:w-24" />
                  <h3 className="text-[22px] font-extrabold" style={{ fontFamily: rounded }}>
                    LingoDuel Plus
                  </h3>
                  <p className="mt-4 text-[52px] font-black leading-none tracking-[-0.04em]" style={{ fontFamily: rounded }}>
                    $59.99<span className="ml-1 text-[18px] font-bold tracking-normal opacity-70">/year</span>
                  </p>
                  <p className="mt-2 text-[15px]" style={{ color: '#B5AB9C' }}>
                    1-week free trial · $4.99 a month, billed yearly · or $9.99 monthly
                  </p>
                  <ul className="mt-8 space-y-3 text-[16px]">
                    {['Unlimited duels', 'All four levels and 25 scenes', 'The coach’s note on every line', 'Saved phrases and review'].map((t) => (
                      <li key={t} className="flex gap-3">
                        <Check color={c.orange} />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-[13px]" style={{ color: c.inkSoft }}>
              US prices shown; prices vary by country. Subscriptions renew automatically unless cancelled at least 24 hours
              before the end of the period. Cancel any time in Settings.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-6xl px-5 py-28 text-center sm:px-8 lg:py-36">
          <Reveal>
            <img src={`${IMG}/dot-cheer.webp`} alt="Dot cheering" className="mx-auto w-40 drop-shadow-[0_24px_30px_rgba(29,26,22,0.18)]" />
            <h2
              className="mx-auto mt-8 max-w-3xl text-balance text-[clamp(2.4rem,6vw,4.6rem)] font-black leading-[0.98] tracking-[-0.04em]"
              style={{ fontFamily: rounded }}
            >
              Your first conversation is a minute away.
            </h2>
            <div className="mt-10 flex justify-center">
              <StoreButton />
            </div>
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t" style={{ borderColor: c.line }}>
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src={`${IMG}/icon.webp`} alt="" className="h-9 w-9 rounded-[10px]" />
            <div>
              <p className="text-[16px] font-extrabold" style={{ fontFamily: rounded }}>
                LingoDuel
              </p>
              <p className="text-[13px]" style={{ color: c.inkSoft }}>
                Made by Nikhil Barik and Saanica Gupta
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-2 text-[14px] font-medium">
            <Link to="/lingoduel/support" className="no-underline hover:underline" style={{ color: c.ink }}>
              Support
            </Link>
            <Link to="/lingoduel/privacy" className="no-underline hover:underline" style={{ color: c.ink }}>
              Privacy
            </Link>
            <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" className="no-underline hover:underline" style={{ color: c.ink }}>
              Terms
            </a>
            <a href="mailto:nikhilbarik@icloud.com?subject=LingoDuel" className="no-underline hover:underline" style={{ color: c.ink }}>
              Contact
            </a>
          </div>
          <p className="text-[13px]" style={{ color: c.inkSoft }}>
            © 2026 LingoDuel
          </p>
        </div>
      </footer>
    </div>
  )
}
