import { useState, useEffect, useRef } from "react"

// --- Terminal line definitions ---

interface TerminalLine {
  type: "prompt" | "output" | "blank" | "social"
  text?: string
  links?: { label: string; url: string }[]
  delay: number // ms before this line appears
}

const LINES: TerminalLine[] = [
  {
    type: "output",
    text: "Last login: Wed Mar 11 03:45:00 on ttys001",
    delay: 0,
  },
  {
    type: "prompt",
    text: "whoami",
    delay: 600,
  },
  {
    type: "blank",
    delay: 300,
  },
  {
    type: "output",
    text: "Nikhil Barik",
    delay: 200,
  },
  {
    type: "output",
    text: "Developer \u00B7 Builder \u00B7 Creator",
    delay: 100,
  },
  {
    type: "blank",
    delay: 100,
  },
  {
    type: "output",
    text: "Currently building TheAiBuildrs (https://theaibuildrs.com)",
    delay: 200,
  },
  {
    type: "blank",
    delay: 400,
  },
  {
    type: "prompt",
    text: "cat about.txt",
    delay: 800,
  },
  {
    type: "blank",
    delay: 300,
  },
  {
    type: "output",
    text: "I build products that solve real problems.",
    delay: 200,
  },
  {
    type: "output",
    text: "From iOS apps to Chrome extensions to SaaS tools.",
    delay: 150,
  },
  {
    type: "blank",
    delay: 400,
  },
  {
    type: "prompt",
    text: "ls ~/social/",
    delay: 800,
  },
  {
    type: "social",
    links: [
      { label: "LinkedIn", url: "https://linkedin.com/in/nerdynikhil" },
      { label: "GitHub", url: "https://github.com/nerdynikhil" },
      { label: "Twitter", url: "https://twitter.com/nerdynikhil" },
      { label: "Instagram", url: "https://instagram.com/nerdynikhil" },
    ],
    delay: 300,
  },
  {
    type: "blank",
    delay: 400,
  },
  {
    type: "prompt",
    text: "",
    delay: 600,
  },
]

// --- Component ---

export default function TerminalContent() {
  const [visibleCount, setVisibleCount] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Animate lines appearing one by one
  useEffect(() => {
    if (visibleCount >= LINES.length) return

    const nextLine = LINES[visibleCount]
    const timer = setTimeout(() => {
      setVisibleCount((c) => c + 1)
    }, nextLine.delay)

    return () => clearTimeout(timer)
  }, [visibleCount])

  // Auto-scroll to bottom as lines appear
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [visibleCount])

  const visibleLines = LINES.slice(0, visibleCount)
  const isLastLineVisible = visibleCount >= LINES.length

  return (
    <div
      ref={containerRef}
      className="h-full overflow-y-auto p-4 select-text"
      style={{
        backgroundColor: "#1e1e1e",
        fontFamily: "'Fira Code', 'Courier New', Courier, monospace",
        fontSize: "13px",
        lineHeight: "1.7",
      }}
    >
      {visibleLines.map((line, i) => {
        if (line.type === "blank") {
          return <div key={i} className="h-[1.7em]" />
        }

        if (line.type === "prompt") {
          const isLastPrompt = i === visibleLines.length - 1 && isLastLineVisible
          return (
            <div key={i} className="flex flex-wrap items-center">
              <span style={{ color: "#4ec9b0" }}>guest</span>
              <span style={{ color: "#808080" }}>@</span>
              <span style={{ color: "#569cd6" }}>nerdynikhil</span>
              <span style={{ color: "#808080" }}>{" ~ % "}</span>
              {line.text && (
                <span style={{ color: "#d4d4d4" }}>{line.text}</span>
              )}
              {isLastPrompt && !line.text && (
                <span className="cursor" />
              )}
            </div>
          )
        }

        if (line.type === "social") {
          return (
            <div key={i} className="flex flex-wrap gap-x-6 gap-y-1">
              {line.links?.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  style={{ color: "#569cd6", textDecoration: "none" }}
                  onMouseEnter={(e) => {
                    ;(e.target as HTMLAnchorElement).style.color = "#9cdcfe"
                  }}
                  onMouseLeave={(e) => {
                    ;(e.target as HTMLAnchorElement).style.color = "#569cd6"
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )
        }

        // output
        // Linkify the TheAiBuildrs URL
        if (line.text?.includes("https://theaibuildrs.com")) {
          const parts = line.text.split("(https://theaibuildrs.com)")
          return (
            <div key={i} style={{ color: "#d4d4d4" }}>
              {parts[0]}(
              <a
                href="https://theaibuildrs.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#569cd6", textDecoration: "none" }}
                onMouseEnter={(e) => {
                  ;(e.target as HTMLAnchorElement).style.color = "#9cdcfe"
                }}
                onMouseLeave={(e) => {
                  ;(e.target as HTMLAnchorElement).style.color = "#569cd6"
                }}
              >
                https://theaibuildrs.com
              </a>
              ){parts[1] ?? ""}
            </div>
          )
        }

        // Name line gets special bright color
        if (line.text === "Nikhil Barik") {
          return (
            <div
              key={i}
              className="text-lg font-bold"
              style={{ color: "#00ff41" }}
            >
              {line.text}
            </div>
          )
        }

        if (line.text === "Developer \u00B7 Builder \u00B7 Creator") {
          return (
            <div key={i} style={{ color: "#808080" }}>
              {line.text}
            </div>
          )
        }

        return (
          <div key={i} style={{ color: "#d4d4d4" }}>
            {line.text}
          </div>
        )
      })}
    </div>
  )
}
