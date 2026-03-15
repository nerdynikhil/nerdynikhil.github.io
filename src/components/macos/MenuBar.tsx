import { useState, useEffect } from "react"
import { useDesktop } from "./DesktopContext"

const MENU_ITEMS = ["File", "Edit", "View", "Go", "Window", "Help"]

function formatClock(date: Date): string {
  return date
    .toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    })
    .replace(",", "") +
    "\u2003" +
    date
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
}

function AppleLogo() {
  return (
    <button
      className="flex items-center px-3 h-full rounded hover:bg-white/10 dark:hover:bg-white/15 active:bg-white/20"
      aria-label="Apple menu"
    >
      <svg width="14" height="17" viewBox="0 0 14 17" fill="currentColor">
        <path d="M13.1 12.024c-.264.586-.578 1.124-.944 1.618-.498.672-.906 1.138-1.222 1.398-.488.428-1.01.648-1.568.66-.4 0-.882-.114-1.442-.346-.564-.23-1.082-.344-1.556-.344-.498 0-1.032.114-1.602.344-.572.232-1.032.352-1.384.364-.534.022-1.068-.204-1.602-.678-.342-.284-.77-.77-1.282-1.458-.55-.74-.998-1.6-1.348-2.578C.384 10.206.2 9.268.2 8.362c0-1.032.224-1.922.67-2.668a3.928 3.928 0 0 1 1.402-1.422 3.77 3.77 0 0 1 1.894-.536c.424 0 .98.132 1.672.39.688.26 1.13.392 1.326.392.146 0 .642-.154 1.486-.462.798-.286 1.472-.404 2.024-.358 1.496.12 2.62.712 3.368 1.78-1.338.812-2 1.948-1.986 3.406.014 1.136.424 2.082 1.23 2.832.366.348.774.616 1.228.806-.098.286-.202.56-.314.822zM10.244.34c0 .89-.326 1.722-.974 2.49-.784.918-1.732 1.448-2.76 1.364a2.776 2.776 0 0 1-.02-.338c0-.856.372-1.77 1.032-2.52.33-.378.75-.692 1.26-.942.508-.246.99-.382 1.444-.408.014.118.018.236.018.354z"/>
      </svg>
    </button>
  )
}

function WifiIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" />
    </svg>
  )
}

function BatteryIcon() {
  return (
    <div className="flex items-center gap-1">
      <span className="text-xs">100%</span>
      <svg
        width="20"
        height="11"
        viewBox="0 0 28 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="1" y="1" width="22" height="12" rx="2.5" ry="2.5" />
        <rect
          x="3"
          y="3"
          width="18"
          height="8"
          rx="1"
          ry="1"
          fill="currentColor"
          stroke="none"
        />
        <path d="M25 5v4a2 2 0 0 0 0-4z" fill="currentColor" stroke="none" />
      </svg>
    </div>
  )
}

function SunIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function ControlCenterIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <rect x="2" y="2" width="8" height="8" rx="2" />
      <rect x="14" y="2" width="8" height="8" rx="2" />
      <rect x="2" y="14" width="8" height="8" rx="2" />
      <rect x="14" y="14" width="8" height="8" rx="2" />
    </svg>
  )
}

export default function MenuBar() {
  const { windows, activeWindowId, isDarkMode, toggleDarkMode } = useDesktop()
  const [clock, setClock] = useState(() => formatClock(new Date()))

  useEffect(() => {
    const update = () => setClock(formatClock(new Date()))
    update()
    const id = setInterval(update, 60_000)
    return () => clearInterval(id)
  }, [])

  const activeApp =
    windows.find((w) => w.id === activeWindowId)?.appName ?? "Finder"

  return (
    <header
      className={
        "fixed top-0 inset-x-0 z-[9999] flex h-7 select-none items-center " +
        "bg-white/15 text-black/80 " +
        "dark:bg-black/15 dark:text-white/90"
      }
      style={{
        backdropFilter: "blur(12px) saturate(150%)",
        WebkitBackdropFilter: "blur(12px) saturate(150%)",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        fontSize: "13px",
      }}
    >
      {/* ── Left: Apple logo + app name + menu items ── */}
      <AppleLogo />

      <span className="px-2 font-semibold truncate">{activeApp}</span>

      {MENU_ITEMS.map((item) => (
        <button
          key={item}
          className="px-2 h-full text-sm font-normal rounded hover:bg-white/10 dark:hover:bg-white/15 transition-colors"
        >
          {item}
        </button>
      ))}

      {/* ── Flexible spacer ── */}
      <div className="flex-1" />

      {/* ── Right: status icons ── */}
      <div className="flex items-center gap-2 pr-3">
        <button
          onClick={toggleDarkMode}
          className="flex items-center justify-center w-6 h-6 rounded hover:bg-white/10 dark:hover:bg-white/15 transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </button>

        <span className="flex items-center justify-center w-6 h-6">
          <WifiIcon />
        </span>

        <span className="flex items-center justify-center h-6">
          <BatteryIcon />
        </span>

        <button
          className="flex items-center justify-center w-6 h-6 rounded hover:bg-white/10 dark:hover:bg-white/15 transition-colors"
          aria-label="Control Center"
        >
          <ControlCenterIcon />
        </button>

        <span className="whitespace-nowrap pl-1">{clock}</span>
      </div>
    </header>
  )
}
