import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDesktop } from "./DesktopContext"

// --- Dock item definitions ---

interface DockItemDef {
  id: string
  label: string
  icon: string | { type: "image"; src: string }
  action: "open-window" | "mailto" | "navigate" | "none"
  target?: string // window id, mailto address, or route path
}

const DOCK_ITEMS: (DockItemDef | "separator")[] = [
  // --- macOS system apps ---
  {
    id: "finder",
    label: "Finder",
    icon: { type: "image", src: "/images/macos-icons/finder.png" },
    action: "open-window",
    target: "finder",
  },
  {
    id: "launchpad",
    label: "Launchpad",
    icon: { type: "image", src: "/images/macos-icons/launchpad.png" },
    action: "none",
  },
  {
    id: "phone",
    label: "Phone",
    icon: { type: "image", src: "/images/macos-icons/phone.png" },
    action: "none",
  },
  {
    id: "safari",
    label: "Safari",
    icon: { type: "image", src: "/images/macos-icons/safari.png" },
    action: "open-window",
    target: "safari",
  },
  {
    id: "mail",
    label: "Mail",
    icon: { type: "image", src: "/images/macos-icons/mail.png" },
    action: "mailto",
    target: "nerdynikhil@hotmail.com",
  },
  {
    id: "contacts",
    label: "Contacts",
    icon: { type: "image", src: "/images/macos-icons/contacts.png" },
    action: "none",
  },
  {
    id: "calendar",
    label: "Calendar",
    icon: { type: "image", src: "/images/macos-icons/calendar.png" },
    action: "none",
  },
  {
    id: "notes",
    label: "Notes",
    icon: { type: "image", src: "/images/macos-icons/notes.png" },
    action: "none",
  },
  {
    id: "reminders",
    label: "Reminders",
    icon: { type: "image", src: "/images/macos-icons/reminders.png" },
    action: "none",
  },
  {
    id: "messages",
    label: "Messages",
    icon: { type: "image", src: "/images/macos-icons/messages.png" },
    action: "none",
  },
  {
    id: "facetime",
    label: "FaceTime",
    icon: { type: "image", src: "/images/macos-icons/facetime.png" },
    action: "none",
  },
  {
    id: "maps",
    label: "Maps",
    icon: { type: "image", src: "/images/macos-icons/maps.png" },
    action: "none",
  },
  {
    id: "photos",
    label: "Photos",
    icon: { type: "image", src: "/images/macos-icons/photos.png" },
    action: "none",
  },
  {
    id: "music",
    label: "Music",
    icon: { type: "image", src: "/images/macos-icons/music.png" },
    action: "none",
  },
  {
    id: "tv",
    label: "TV",
    icon: { type: "image", src: "/images/macos-icons/tv.png" },
    action: "none",
  },
  {
    id: "podcasts",
    label: "Podcasts",
    icon: { type: "image", src: "/images/macos-icons/podcasts.png" },
    action: "none",
  },
  {
    id: "appstore",
    label: "App Store",
    icon: { type: "image", src: "/images/macos-icons/appstore.png" },
    action: "none",
  },
  {
    id: "settings",
    label: "System Settings",
    icon: { type: "image", src: "/images/macos-icons/settings.png" },
    action: "none",
  },
  {
    id: "terminal",
    label: "Terminal",
    icon: { type: "image", src: "/images/macos-icons/terminal.png" },
    action: "open-window",
    target: "terminal",
  },
  "separator",
  // --- Portfolio apps ---
  {
    id: "chattercards",
    label: "ChatterCards",
    icon: { type: "image", src: "/images/chattercards/app-icon.webp" },
    action: "navigate",
    target: "/chattercards",
  },
  {
    id: "lingoduel",
    label: "LingoDuel",
    icon: { type: "image", src: "/images/lingoduel/lingoduel-logo.png" },
    action: "navigate",
    target: "/lingoduel",
  },
  {
    id: "serenight",
    label: "Serenight",
    icon: { type: "image", src: "/images/serenight/logo.png" },
    action: "navigate",
    target: "/serenight",
  },
  {
    id: "truehue",
    label: "TrueHue",
    icon: { type: "image", src: "/images/truehue/TrueHue.png" },
    action: "navigate",
    target: "/truehue",
  },
  {
    id: "subscriptionly",
    label: "Subscriptionly",
    icon: { type: "image", src: "/images/subscriptionly/360x360ia.png" },
    action: "navigate",
    target: "/subscriptionly",
  },
  "separator",
  {
    id: "trash",
    label: "Trash",
    icon: "🗑️",
    action: "none",
  },
]

// --- Bounce keyframes (injected once) ---

const BOUNCE_KEYFRAMES = `
@keyframes dock-bounce {
  0%, 100% { transform: translateY(0); }
  20% { transform: translateY(-20px); }
  40% { transform: translateY(0); }
  55% { transform: translateY(-12px); }
  70% { transform: translateY(0); }
  82% { transform: translateY(-5px); }
  92% { transform: translateY(0); }
}
`

let stylesInjected = false
function injectStyles() {
  if (stylesInjected) return
  stylesInjected = true
  const style = document.createElement("style")
  style.textContent = BOUNCE_KEYFRAMES
  document.head.appendChild(style)
}

// --- Component ---

export default function Dock() {
  const { windows, openWindow, isDarkMode } = useDesktop()
  const navigate = useNavigate()

  const [bouncingId, setBouncingId] = useState<string | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  // Inject bounce keyframes on mount
  useEffect(injectStyles, [])

  // --- Click handler ---

  function handleClick(item: DockItemDef) {
    switch (item.action) {
      case "open-window":
        if (item.target) {
          openWindow(item.target)
          // Trigger bounce only if the window was not already open
          const win = windows.find((w) => w.id === item.target)
          if (!win?.isOpen) {
            setBouncingId(item.id)
          }
        }
        break
      case "mailto":
        window.location.href = `mailto:${item.target}`
        break
      case "navigate":
        if (item.target) {
          navigate(item.target)
        }
        break
      case "none":
      default:
        break
    }
  }

  // --- Check if an app window is running ---

  function isRunning(id: string): boolean {
    const win = windows.find((w) => w.id === id)
    return !!win?.isOpen
  }

  // --- Render helpers ---

  function renderIcon(item: DockItemDef) {
    if (typeof item.icon === "object" && item.icon.type === "image") {
      return (
        <img
          src={item.icon.src}
          alt={item.label}
          className={[
            "w-full h-full rounded-xl object-cover",
            item.id === "phone" ? "scale-90" : "",
          ].join(" ")}
          draggable={false}
        />
      )
    }

    // Emoji icon
    return (
      <span className="text-3xl leading-none select-none">
        {item.icon as string}
      </span>
    )
  }

  function renderSeparator(key: string) {
    return (
      <div
        key={key}
        className={[
          "w-px h-8 mx-0.5 flex-shrink-0",
          isDarkMode ? "bg-white/30" : "bg-black/20",
        ].join(" ")}
        aria-hidden
      />
    )
  }

  // --- Main render ---

  let separatorCount = 0

  return (
    <div
      className={[
        "fixed bottom-2 left-1/2 -translate-x-1/2 z-50",
        "flex items-end gap-1 px-2 py-1 rounded-2xl",
        "shadow-lg shadow-black/20",
        isDarkMode
          ? "bg-white/10 border border-white/20"
          : "bg-black/5 border border-black/10",
      ].join(" ")}
      style={{
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
      }}
    >
      {DOCK_ITEMS.map((entry) => {
        if (entry === "separator") {
          separatorCount++
          return renderSeparator(`sep-${separatorCount}`)
        }

        const item = entry
        const isBouncing = bouncingId === item.id

        return (
          <div
            key={item.id}
            className="flex flex-col items-center relative"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Tooltip */}
            {hoveredId === item.id && (
              <div
                className={[
                  "absolute -top-9 left-1/2 -translate-x-1/2",
                  "px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap",
                  "pointer-events-none",
                  isDarkMode
                    ? "bg-gray-800/90 text-white border border-white/10"
                    : "bg-gray-900/80 text-white",
                ].join(" ")}
              >
                {item.label}
                {/* Tooltip arrow */}
                <div
                  className={[
                    "absolute left-1/2 -translate-x-1/2 -bottom-1",
                    "w-2 h-2 rotate-45",
                    isDarkMode ? "bg-gray-800/90" : "bg-gray-900/80",
                  ].join(" ")}
                />
              </div>
            )}

            {/* Icon button */}
            <button
              onClick={() => handleClick(item)}
              onAnimationEnd={() => {
                if (bouncingId === item.id) setBouncingId(null)
              }}
              className="w-11 h-11 rounded-xl flex items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              style={{
                animation: isBouncing
                  ? "dock-bounce 0.6s ease-in-out"
                  : undefined,
              }}
              aria-label={item.label}
              type="button"
            >
              {renderIcon(item)}
            </button>

            {/* Running indicator dot */}
            {isRunning(item.id) && (
              <div
                className={[
                  "w-1 h-1 rounded-full mt-0.5",
                  isDarkMode ? "bg-white" : "bg-gray-600",
                ].join(" ")}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
