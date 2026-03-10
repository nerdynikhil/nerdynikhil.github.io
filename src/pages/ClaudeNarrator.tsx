import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

interface TerminalLine {
  text: string
  isOutput: boolean
  emoji?: string
  delay: number
}

const terminalLines: TerminalLine[] = [
  { text: '$ claude', isOutput: false, delay: 0 },
  { text: 'Claude session started. Let\u2019s go.', isOutput: true, emoji: '\u{1F680}', delay: 800 },
  { text: 'About to read package.json', isOutput: true, emoji: '\u{1F50A}', delay: 1800 },
  { text: 'Done reading package.json', isOutput: true, emoji: '\u2705', delay: 2600 },
  { text: 'About to edit index.ts', isOutput: true, emoji: '\u{1F50A}', delay: 3400 },
  { text: 'Edited index.ts', isOutput: true, emoji: '\u2705', delay: 4200 },
  { text: 'About to run command: npm test', isOutput: true, emoji: '\u{1F50A}', delay: 5000 },
  { text: 'Command finished', isOutput: true, emoji: '\u2705', delay: 6000 },
  { text: 'Task complete, awaiting your input', isOutput: true, emoji: '\u{1F3C1}', delay: 7000 },
]

const hooks = [
  { emoji: '\u{1F680}', name: 'SessionStart', desc: 'Announces startup, resume, clear, and compact events' },
  { emoji: '\u{1F50A}', name: 'PreToolUse', desc: 'Context-aware tool announcements \u2014 filenames, commands, search patterns' },
  { emoji: '\u2705', name: 'PostToolUse', desc: 'Confirms what just happened after each tool finishes' },
  { emoji: '\u{1F3C1}', name: 'Stop', desc: 'Notifies when Claude is done and waiting for your next prompt' },
]

const features = [
  { text: 'Text-to-speech via', code: 'say', suffix: '(macOS) or', code2: 'espeak', suffix2: '(Linux)' },
  { text: 'Configurable voice with', code: 'NARRATOR_VOICE', suffix: 'env var' },
  { text: 'Disable TTS with', code: 'NARRATOR_TTS=0', suffix: '\u2014 emoji output stays' },
  { text: 'Optional timestamped logging to file' },
  { text: 'All output to stderr \u2014 never interferes with Claude' },
  { text: 'TTS runs in background \u2014 never blocks tool execution' },
  { text: 'Graceful fallback when no TTS engine is available' },
  { text: 'Clean uninstall with', code: './install.sh --uninstall' },
]

const installCommands = [
  {
    title: 'Plugin marketplace',
    commands: [
      '/plugin marketplace add nerdynikhil/claude-narrator',
      '/plugin install claude-narrator@nerdynikhil-claude-narrator',
    ],
  },
  {
    title: 'Or clone manually',
    commands: [
      'git clone https://github.com/nerdynikhil/claude-narrator.git && cd claude-narrator && ./install.sh',
    ],
  },
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }, [text])

  return (
    <button
      onClick={handleCopy}
      className="shrink-0 ml-3 border border-[#2a2a2a] bg-transparent text-[#666666] font-['Fira_Code','Courier_New',monospace] text-xs px-2.5 py-1 cursor-pointer hover:text-[#00ff41] hover:border-[#00ff41] transition-colors"
    >
      {copied ? 'copied!' : 'copy'}
    </button>
  )
}

export default function ClaudeNarrator() {
  const [visibleLines, setVisibleLines] = useState<number[]>([])

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []
    terminalLines.forEach((line, index) => {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => [...prev, index])
      }, line.delay)
      timers.push(timer)
    })
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#cccccc] font-['Fira_Code','Courier_New',monospace] leading-relaxed">
      <SEO
        title="claude-narrator \u2014 Real-time narration for Claude Code"
        description="A Claude Code plugin that narrates what Claude is doing in real-time with emoji console output and optional text-to-speech."
        url="https://www.nerdynikhil.com/claude-narrator"
      />

      {/* Header */}
      <header className="py-5 border-b border-[#2a2a2a]">
        <div className="max-w-[760px] mx-auto px-6 flex justify-between items-center">
          <Link
            to="/"
            className="font-semibold text-[#cccccc] no-underline hover:text-[#00ff41] before:content-['./'] before:text-[#666666]"
          >
            nerdynikhil
          </Link>
          <nav>
            <a
              href="https://github.com/nerdynikhil/claude-narrator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#666666] border border-[#2a2a2a] px-3 py-1 no-underline hover:text-[#00ff41] hover:border-[#00ff41] transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="py-20 pb-15 text-center">
          <div className="max-w-[760px] mx-auto px-6">
            <div className="inline-block text-xs text-[#00ff41] border border-[#00ff41] px-3.5 py-1 mb-6 tracking-wide uppercase">
              Claude Code Plugin
            </div>
            <h1 className="text-5xl sm:text-[2.8rem] text-[#00ff41] mb-4 tracking-tight font-semibold">
              claude-narrator
            </h1>
            <p className="text-lg text-[#666666] mb-12 font-normal">
              Hear and see what Claude Code is doing &mdash; in real time.
            </p>

            {/* Terminal */}
            <div className="bg-[#141414] border border-[#2a2a2a] rounded-lg text-left overflow-hidden max-w-[600px] mx-auto">
              <div className="bg-[#1a1a1a] px-3.5 py-2.5 flex items-center gap-2 border-b border-[#2a2a2a]">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-2 text-xs text-[#666666]">claude-narrator</span>
              </div>
              <div className="p-4 px-5 text-sm min-h-[220px]">
                {terminalLines.map((line, index) => (
                  <div
                    key={index}
                    className={`mb-1 whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-400 ease-out ${
                      visibleLines.includes(index)
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-1'
                    } ${line.isOutput ? 'text-[#666666]' : ''}`}
                  >
                    {!line.isOutput && (
                      <span className="text-[#00ff41] mr-2">$</span>
                    )}
                    {line.emoji && <span className="mr-1.5">{line.emoji}</span>}
                    {line.isOutput ? line.text : line.text.replace('$ ', '')}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Install */}
        <section className="py-15 border-t border-[#2a2a2a]">
          <div className="max-w-[760px] mx-auto px-6">
            <h2 className="text-[#00ff41] text-xl font-semibold mb-8">Install</h2>
            {installCommands.map((option) => (
              <div key={option.title} className="mb-7">
                <h3 className="text-[#666666] text-sm font-normal mb-2.5 uppercase tracking-wide">
                  {option.title}
                </h3>
                {option.commands.map((cmd) => (
                  <div
                    key={cmd}
                    className="bg-[#141414] border border-[#2a2a2a] px-4 py-3 flex justify-between items-center mb-2 overflow-x-auto"
                  >
                    <code className="bg-transparent p-0 text-sm whitespace-nowrap text-[#cccccc]">
                      {cmd}
                    </code>
                    <CopyButton text={cmd} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Hooks Grid */}
        <section className="py-15 border-t border-[#2a2a2a]">
          <div className="max-w-[760px] mx-auto px-6">
            <h2 className="text-[#00ff41] text-xl font-semibold mb-8">
              Four hooks, full coverage
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hooks.map((hook) => (
                <div
                  key={hook.name}
                  className="border border-[#2a2a2a] p-6 transition-colors hover:border-[#00ff41]"
                >
                  <span className="text-2xl block mb-3">{hook.emoji}</span>
                  <h3 className="text-[#cccccc] text-base font-semibold mb-2">{hook.name}</h3>
                  <p className="text-[#666666] text-[0.82rem] leading-relaxed">{hook.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-15 border-t border-[#2a2a2a]">
          <div className="max-w-[760px] mx-auto px-6">
            <h2 className="text-[#00ff41] text-xl font-semibold mb-8">Features</h2>
            <ul className="list-none">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className={`py-2.5 text-sm text-[#666666] ${
                    index < features.length - 1 ? 'border-b border-[#2a2a2a]' : ''
                  }`}
                >
                  <span className="text-[#00ff41] mr-2.5">&#10003;</span>
                  {feature.text}
                  {feature.code && (
                    <>
                      {' '}
                      <code className="bg-[#141414] px-1.5 py-0.5 rounded text-[0.9em]">
                        {feature.code}
                      </code>
                    </>
                  )}
                  {feature.suffix && ` ${feature.suffix}`}
                  {feature.code2 && (
                    <>
                      {' '}
                      <code className="bg-[#141414] px-1.5 py-0.5 rounded text-[0.9em]">
                        {feature.code2}
                      </code>
                    </>
                  )}
                  {feature.suffix2 && ` ${feature.suffix2}`}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-15 text-center border-t border-[#2a2a2a]">
          <div className="max-w-[760px] mx-auto px-6">
            <a
              href="https://github.com/nerdynikhil/claude-narrator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[#00ff41] text-[#00ff41] px-9 py-3.5 font-['Fira_Code','Courier_New',monospace] text-base transition-all hover:bg-[#00ff41] hover:text-[#0c0c0c] no-underline hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]"
            >
              View on GitHub
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-[#2a2a2a] text-center">
        <div className="max-w-[760px] mx-auto px-6">
          <p className="text-[#666666] text-xs">
            Built by{' '}
            <Link to="/" className="text-[#00ff41] no-underline hover:underline">
              nerdynikhil
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
