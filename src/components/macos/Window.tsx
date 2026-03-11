import {
  useRef,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
} from "react"
import { useDesktop } from "./DesktopContext"

interface WindowProps {
  id: string
  children: ReactNode
  sidebar?: ReactNode
}

/**
 * Reusable macOS-style window with traffic lights, dragging, and animations.
 */
export default function Window({ id, children, sidebar }: WindowProps) {
  const {
    windows,
    activeWindowId,
    closeWindow,
    minimizeWindow,
    toggleFullscreen,
    focusWindow,
    updateWindowPosition,
  } = useDesktop()

  const win = windows.find((w) => w.id === id)

  // --- drag state ---
  const isDragging = useRef(false)
  const dragOffset = useRef({ x: 0, y: 0 })

  // --- traffic light hover ---
  const [trafficHover, setTrafficHover] = useState(false)

  // --- animation state ---
  const [phase, setPhase] = useState<
    "opening" | "open" | "closing" | "minimizing" | "closed"
  >(win?.isOpen ? "opening" : "closed")

  const prevOpenRef = useRef(win?.isOpen ?? false)
  const prevMinimizedRef = useRef(win?.isMinimized ?? false)

  const isFocused = activeWindowId === id

  // Respond to context changes in isOpen / isMinimized
  useEffect(() => {
    if (!win) return

    const wasOpen = prevOpenRef.current
    const wasMinimized = prevMinimizedRef.current

    // Window just opened (or un-minimized)
    if (win.isOpen && !win.isMinimized) {
      if (!wasOpen || wasMinimized) {
        setPhase("opening")
        const timer = setTimeout(() => setPhase("open"), 200)
        return () => clearTimeout(timer)
      }
      if (phase !== "open" && phase !== "opening") {
        setPhase("open")
      }
    }

    // Window is closing
    if (!win.isOpen && wasOpen) {
      setPhase("closing")
      const timer = setTimeout(() => setPhase("closed"), 150)
      return () => clearTimeout(timer)
    }

    // Window is being minimized
    if (win.isMinimized && !wasMinimized && win.isOpen) {
      setPhase("minimizing")
      const timer = setTimeout(() => setPhase("closed"), 300)
      return () => clearTimeout(timer)
    }

    prevOpenRef.current = win.isOpen
    prevMinimizedRef.current = win.isMinimized
  }, [win?.isOpen, win?.isMinimized]) // eslint-disable-line react-hooks/exhaustive-deps

  // Keep refs in sync AFTER the effect runs
  useEffect(() => {
    if (!win) return
    prevOpenRef.current = win.isOpen
    prevMinimizedRef.current = win.isMinimized
  })

  // --- dragging handlers (attached to document) ---
  const handleMouseMove = useCallback(
    (e: globalThis.MouseEvent) => {
      if (!isDragging.current) return
      updateWindowPosition(id, {
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      })
    },
    [id, updateWindowPosition],
  )

  const handleMouseUp = useCallback(() => {
    isDragging.current = false
    document.body.style.userSelect = ""
    document.body.style.cursor = ""
  }, [])

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [handleMouseMove, handleMouseUp])

  const onTitleBarMouseDown = (e: ReactMouseEvent<HTMLDivElement>) => {
    // Ignore if clicking on traffic light buttons
    if ((e.target as HTMLElement).closest("[data-traffic-light]")) return
    if (!win) return

    isDragging.current = true
    dragOffset.current = {
      x: e.clientX - win.position.x,
      y: e.clientY - win.position.y,
    }
    document.body.style.userSelect = "none"
    document.body.style.cursor = "grabbing"
    focusWindow(id)
  }

  // --- don't render if fully hidden ---
  if (!win || phase === "closed") return null

  // --- compute positioning ---
  const isFullscreen = win.isFullscreen

  const containerStyle: React.CSSProperties = {
    position: "absolute",
    left: isFullscreen ? 0 : win.position.x,
    top: isFullscreen ? 0 : win.position.y,
    width: isFullscreen ? "100%" : win.size.width,
    height: isFullscreen ? "100%" : win.size.height,
    zIndex: win.zIndex,
    // Fullscreen transition
    transition: isFullscreen
      ? "left 300ms ease, top 300ms ease, width 300ms ease, height 300ms ease, border-radius 300ms ease"
      : "border-radius 300ms ease",
  }

  // --- animation styles ---
  let animStyle: React.CSSProperties = {}
  if (phase === "opening") {
    animStyle = {
      opacity: 0,
      transform: "scale(0.95)",
      transition: "opacity 200ms ease-out, transform 200ms ease-out",
    }
    // Force a reflow trick: we apply the "from" state, then requestAnimationFrame
    // won't work here, so we use a zero-delay class swap — handled by the effect
    // that transitions to "open" after 10ms.
  }
  if (phase === "open") {
    animStyle = {
      opacity: 1,
      transform: "scale(1)",
      transition: "opacity 200ms ease-out, transform 200ms ease-out",
    }
  }
  if (phase === "closing") {
    animStyle = {
      opacity: 0,
      transform: "scale(0.95)",
      transition: "opacity 150ms ease-in, transform 150ms ease-in",
    }
  }
  if (phase === "minimizing") {
    animStyle = {
      opacity: 0,
      transform: "scale(0) translateY(200px)",
      transition:
        "opacity 300ms ease-in, transform 300ms cubic-bezier(0.4, 0, 1, 1)",
    }
  }

  // Kick the opening animation on next frame
  if (phase === "opening") {
    requestAnimationFrame(() => {
      setPhase("open")
    })
  }

  const shadowFocused =
    "0 22px 70px 4px rgba(0,0,0,0.56), 0 0 0 0.5px rgba(0,0,0,0.2)"
  const shadowUnfocused =
    "0 10px 30px 2px rgba(0,0,0,0.30), 0 0 0 0.5px rgba(0,0,0,0.15)"

  return (
    <div
      style={{
        ...containerStyle,
        ...animStyle,
        boxShadow: isFocused ? shadowFocused : shadowUnfocused,
        borderRadius: isFullscreen ? 0 : 10,
        overflow: "hidden",
      }}
      onMouseDown={() => focusWindow(id)}
    >
      <div className="flex h-full flex-col overflow-hidden">
        {/* ===== Title Bar ===== */}
        <div
          onMouseDown={onTitleBarMouseDown}
          className={[
            "flex h-[38px] shrink-0 items-center px-3.5",
            "bg-[#e8e8e8]/90 dark:bg-[#2d2d2d]/90",
            "border-b border-black/10 dark:border-white/10",
            "cursor-default",
          ].join(" ")}
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {/* Traffic light buttons */}
          <div
            data-traffic-light
            className="flex items-center gap-2"
            onMouseEnter={() => setTrafficHover(true)}
            onMouseLeave={() => setTrafficHover(false)}
          >
            <TrafficButton
              color={isFocused ? "#FF5F57" : "#CDCDCD"}
              hoverSymbol="\u00D7"
              showSymbol={trafficHover && isFocused}
              onClick={(e) => {
                e.stopPropagation()
                closeWindow(id)
              }}
            />
            <TrafficButton
              color={isFocused ? "#FFBD2E" : "#CDCDCD"}
              hoverSymbol="\u2212"
              showSymbol={trafficHover && isFocused}
              onClick={(e) => {
                e.stopPropagation()
                minimizeWindow(id)
              }}
            />
            <TrafficButton
              color={isFocused ? "#28C840" : "#CDCDCD"}
              hoverSymbol="\u2197"
              showSymbol={trafficHover && isFocused}
              onClick={(e) => {
                e.stopPropagation()
                toggleFullscreen(id)
              }}
            />
          </div>

          {/* Title — centered in the full title bar width */}
          <span className="pointer-events-none absolute inset-x-0 text-center text-sm font-medium text-gray-600 dark:text-gray-400">
            {win.title}
          </span>
        </div>

        {/* ===== Body (sidebar + content) ===== */}
        <div className="flex min-h-0 flex-1">
          {sidebar && (
            <aside
              className={[
                "w-[200px] shrink-0 overflow-y-auto",
                "bg-[#f0f0f0]/80 dark:bg-[#2d2d2d]/60",
                "border-r border-black/10 dark:border-white/10",
              ].join(" ")}
              style={{
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              {sidebar}
            </aside>
          )}
          <main className="flex-1 overflow-auto bg-white dark:bg-[#1e1e1e]">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}

/* ---------- Traffic light button ---------- */

interface TrafficButtonProps {
  color: string
  hoverSymbol: string
  showSymbol: boolean
  onClick: (e: ReactMouseEvent<HTMLButtonElement>) => void
}

function TrafficButton({
  color,
  hoverSymbol,
  showSymbol,
  onClick,
}: TrafficButtonProps) {
  return (
    <button
      data-traffic-light
      onClick={onClick}
      className="flex h-3 w-3 items-center justify-center rounded-full text-[9px] font-bold leading-none text-black/0 transition-colors hover:brightness-90 focus:outline-none"
      style={{
        backgroundColor: color,
        color: showSymbol ? "rgba(0,0,0,0.55)" : "transparent",
      }}
    >
      {hoverSymbol}
    </button>
  )
}
