import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import SEO from '../components/SEO'

const DOWNLOAD_URL = 'https://github.com/nerdynikhil/bumbu/releases/latest/download/BumbuSetup.exe'

const PINK = '#f9b8c8'
const PINK_DARK = '#f4a3b8'
const TEAL = '#6fd6d6'

const LINES = [
  'hiii :3', "you're doing great!", 'boop!', 'i like your cursor',
  '8 arms, all for hugs', 'drink some water!', 'blub blub', 'wanna be friends?',
  "you're my favorite human", 'take a tiny break?', '*wiggles*', 'ink-credible work!',
]

// Same shapes as the desktop app, so the page matches what you install.
function Octopus({ look = [0, 0], className = '' }: { look?: [number, number]; className?: string }) {
  const lobe = (x: number, y: number) => (
    <g key={`${x}-${y}`}>
      <ellipse cx={x} cy={y + 5} rx={24} ry={15} fill={TEAL} />
      <ellipse cx={x} cy={y} rx={24} ry={15} fill={PINK} stroke={PINK_DARK} />
    </g>
  )
  const [lx, ly] = look
  return (
    <svg viewBox="8 82 204 142" className={className} aria-hidden>
      {[[38, 173], [182, 173], [58, 163], [162, 163]].map(([x, y]) => lobe(x, y))}
      <ellipse cx={110} cy={137} rx={52} ry={50} fill={PINK} stroke={PINK_DARK} strokeWidth={2} />
      {[[48, 190], [82, 197], [118, 199], [152, 195], [180, 187]].map(([x, y]) => lobe(x, y))}
      {[88, 132].map((ex) => (
        <g key={ex}>
          <ellipse cx={ex} cy={137} rx={9} ry={11} fill="#111" />
          <circle cx={ex + 3 + lx} cy={133 + ly} r={3} fill="#fff" />
        </g>
      ))}
      <path d="M102 151 Q110 159 118 151" fill="none" stroke="#111" strokeWidth={3} strokeLinecap="round" />
      <ellipse cx={74} cy={152} rx={7} ry={3} fill="#f78fa7" />
      <ellipse cx={146} cy={152} rx={7} ry={3} fill="#f78fa7" />
    </svg>
  )
}

function useLine(interval = 3200) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1 + Math.floor(Math.random() * (LINES.length - 1))) % LINES.length), interval)
    return () => clearInterval(id)
  }, [interval])
  return LINES[i]
}

// A little Bumbu that chases your cursor around the page, like the real app.
function Follower() {
  const ref = useRef<HTMLDivElement>(null)
  const [look, setLook] = useState<[number, number]>([0, 0])
  useEffect(() => {
    const mouse = { x: innerWidth / 2, y: innerHeight / 2 }
    const pos = { x: mouse.x, y: mouse.y }
    const onMove = (e: PointerEvent) => { mouse.x = e.clientX; mouse.y = e.clientY }
    addEventListener('pointermove', onMove)
    let raf = 0
    const tick = () => {
      pos.x += (mouse.x + 18 - pos.x) * 0.08
      pos.y += (mouse.y + 12 - pos.y) * 0.08
      if (ref.current) ref.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`
      const dx = mouse.x - (pos.x + 40), dy = mouse.y - (pos.y + 25)
      const d = Math.max(1, Math.hypot(dx, dy))
      setLook([(3 * dx) / d, (3 * dy) / d])
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => { removeEventListener('pointermove', onMove); cancelAnimationFrame(raf) }
  }, [])
  return (
    <div ref={ref} className="pointer-events-none fixed left-0 top-0 z-50 hidden md:block">
      <Octopus look={look} className="w-20 drop-shadow-md" />
    </div>
  )
}

function DownloadButton() {
  return (
    <a
      href={DOWNLOAD_URL}
      className="inline-flex items-center gap-3 rounded-full bg-[#ff7aa2] px-8 py-4 text-lg font-semibold text-white no-underline shadow-[0_8px_0_#e2557f] transition-transform hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_3px_0_#e2557f]"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M3 5.5 10.5 4.5v7H3zM11.5 4.3 21 3v8.5h-9.5zM3 12.5h7.5v7L3 18.5zM11.5 12.5H21V21l-9.5-1.3z" /></svg>
      Download for Windows
    </a>
  )
}

const FEATURES = [
  { emoji: '🐾', title: 'Follows you everywhere', text: 'Bumbu floats beside your cursor all day, wobbling along wherever you go.' },
  { emoji: '💬', title: 'Says cute things', text: 'Little pep talks, water reminders and the occasional "blub blub".' },
  { emoji: '🫧', title: 'Stays out of the way', text: 'Sits next to your cursor, never on it. Tiny, light, and always on top.' },
]

export default function Bumbu() {
  const line = useLine()
  return (
    <div className="bumbu relative min-h-screen overflow-hidden text-[#5a3a4a]">
      <SEO
        title="Bumbu — A cute octopus pet that follows your cursor (Windows)"
        description="Bumbu is a tiny pink octopus that lives on your Windows desktop, follows your cursor and says cute things. Free download."
        url="https://www.nerdynikhil.com/bumbu"
      />
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <style>{`
        .bumbu { font-family: 'Fredoka', system-ui, sans-serif; background: linear-gradient(180deg, #ffe8f0 0%, #fff4f7 40%, #d9f7f4 75%, #b9ecec 100%); }
        @keyframes bumbu-bob { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
        @keyframes bumbu-rise { from { transform: translateY(0); opacity: 0 } 10% { opacity: .7 } to { transform: translateY(-110vh); opacity: 0 } }
        .bumbu-bob { animation: bumbu-bob 3s ease-in-out infinite }
        .bumbu-bubble { position: absolute; bottom: -40px; border-radius: 9999px; border: 2px solid rgba(255,255,255,.9); background: rgba(255,255,255,.35); animation: bumbu-rise linear infinite }
      `}</style>

      {/* rising bubbles */}
      {Array.from({ length: 14 }, (_, i) => (
        <span
          key={i}
          className="bumbu-bubble"
          style={{ left: `${(i * 37) % 100}%`, width: 10 + (i % 4) * 8, height: 10 + (i % 4) * 8, animationDuration: `${9 + (i % 5) * 3}s`, animationDelay: `${(i * 1.3) % 9}s` }}
        />
      ))}

      <Follower />

      <header className="relative mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <span className="text-2xl font-bold">🐙 Bumbu</span>
        <a href="https://github.com/nerdynikhil/bumbu" target="_blank" rel="noopener noreferrer" className="font-medium text-[#5a3a4a] no-underline opacity-70 hover:opacity-100">
          GitHub
        </a>
      </header>

      <main className="relative">
        <section className="mx-auto flex max-w-5xl flex-col items-center px-6 pb-20 pt-10 text-center">
          <div className="relative mb-4">
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl border-2 border-[#6fd6d6] bg-white px-4 py-2 text-lg font-semibold shadow-sm">
              {line}
              <span className="absolute -bottom-[9px] left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-b-2 border-r-2 border-[#6fd6d6] bg-white" />
            </div>
            <Octopus className="bumbu-bob w-64 drop-shadow-xl sm:w-80" />
          </div>
          <h1 className="mb-4 text-5xl font-bold leading-tight sm:text-7xl">
            A tiny octopus <br className="hidden sm:block" />
            <span className="text-[#ff7aa2]">for your desktop</span>
          </h1>
          <p className="mb-10 max-w-xl text-xl opacity-80">
            Bumbu follows your cursor around Windows and whispers sweet little things while you work.
          </p>
          <DownloadButton />
          <p className="mt-5 text-sm opacity-60">Free · Windows 10 &amp; 11 · psst, there's one following you right now</p>
        </section>

        <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-20 sm:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-3xl border-2 border-white bg-white/60 p-7 shadow-[0_10px_30px_-12px_rgba(255,122,162,.4)] backdrop-blur">
              <div className="mb-3 text-4xl">{f.emoji}</div>
              <h3 className="mb-2 text-xl font-semibold">{f.title}</h3>
              <p className="opacity-75">{f.text}</p>
            </div>
          ))}
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
          <h2 className="mb-6 text-3xl font-bold">Getting to know Bumbu</h2>
          <div className="flex flex-col justify-center gap-4 text-lg sm:flex-row">
            <div className="rounded-2xl bg-white/70 px-6 py-4"><b>Double-click</b> to make it talk</div>
            <div className="rounded-2xl bg-white/70 px-6 py-4"><b>Right-click</b> to say bye-bye</div>
          </div>
          <div className="mt-12">
            <DownloadButton />
          </div>
        </section>
      </main>

      <footer className="relative py-8 text-center text-sm opacity-60">
        Made with 💗 by <a href="https://www.nerdynikhil.com" className="text-inherit">nerdynikhil</a>
      </footer>
    </div>
  )
}
