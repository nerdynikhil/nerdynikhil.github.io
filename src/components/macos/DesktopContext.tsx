import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react"

export interface WindowState {
  id: string
  title: string
  appName: string
  appIcon: string
  isOpen: boolean
  isMinimized: boolean
  isFullscreen: boolean
  zIndex: number
  position: { x: number; y: number }
  size: { width: number; height: number }
}

export interface DesktopState {
  windows: WindowState[]
  activeWindowId: string | null
  isDarkMode: boolean
  safariUrl: { url: string; title: string; description: string } | null
  toggleDarkMode: () => void
  openWindow: (id: string) => void
  closeWindow: (id: string) => void
  minimizeWindow: (id: string) => void
  toggleFullscreen: (id: string) => void
  focusWindow: (id: string) => void
  updateWindowPosition: (
    id: string,
    position: { x: number; y: number },
  ) => void
  navigateSafari: (site: { url: string; title: string; description: string } | null) => void
}

const DEFAULT_WINDOWS: WindowState[] = [
  {
    id: "finder",
    title: "Finder",
    appName: "Finder",
    appIcon: "📁",
    isOpen: true,
    isMinimized: false,
    isFullscreen: false,
    zIndex: 1,
    position: { x: 100, y: 60 },
    size: { width: 800, height: 500 },
  },
  {
    id: "terminal",
    title: "Terminal",
    appName: "Terminal",
    appIcon: "🖥️",
    isOpen: false,
    isMinimized: false,
    isFullscreen: false,
    zIndex: 0,
    position: { x: 200, y: 100 },
    size: { width: 700, height: 450 },
  },
  {
    id: "safari",
    title: "Safari",
    appName: "Safari",
    appIcon: "🧭",
    isOpen: false,
    isMinimized: false,
    isFullscreen: false,
    zIndex: 0,
    position: { x: 150, y: 80 },
    size: { width: 850, height: 550 },
  },
]

const DesktopContext = createContext<DesktopState | null>(null)

function getMaxZIndex(windows: WindowState[]): number {
  return windows.reduce((max, w) => Math.max(max, w.zIndex), 0)
}

export function DesktopProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] = useState<WindowState[]>(DEFAULT_WINDOWS)
  const [activeWindowId, setActiveWindowId] = useState<string | null>("finder")
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [safariUrl, setSafariUrl] = useState<{ url: string; title: string; description: string } | null>(null)

  const navigateSafari = useCallback((site: { url: string; title: string; description: string } | null) => {
    setSafariUrl(site)
  }, [])

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => !prev)
  }, [])

  const focusWindow = useCallback((id: string) => {
    setWindows((prev) => {
      const maxZ = getMaxZIndex(prev)
      return prev.map((w) => (w.id === id ? { ...w, zIndex: maxZ + 1 } : w))
    })
    setActiveWindowId(id)
  }, [])

  const openWindow = useCallback(
    (id: string) => {
      setWindows((prev) => {
        const maxZ = getMaxZIndex(prev)
        return prev.map((w) =>
          w.id === id
            ? {
                ...w,
                isOpen: true,
                isMinimized: false,
                zIndex: maxZ + 1,
              }
            : w,
        )
      })
      setActiveWindowId(id)
    },
    [],
  )

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isOpen: false } : w)),
    )
    setActiveWindowId((prev) => (prev === id ? null : prev))
  }, [])

  const minimizeWindow = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMinimized: true } : w)),
    )
    setActiveWindowId((prev) => (prev === id ? null : prev))
  }, [])

  const toggleFullscreen = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, isFullscreen: !w.isFullscreen } : w,
      ),
    )
  }, [])

  const updateWindowPosition = useCallback(
    (id: string, position: { x: number; y: number }) => {
      setWindows((prev) =>
        prev.map((w) => (w.id === id ? { ...w, position } : w)),
      )
    },
    [],
  )

  return (
    <DesktopContext.Provider
      value={{
        windows,
        activeWindowId,
        isDarkMode,
        safariUrl,
        toggleDarkMode,
        openWindow,
        closeWindow,
        minimizeWindow,
        toggleFullscreen,
        focusWindow,
        updateWindowPosition,
        navigateSafari,
      }}
    >
      {children}
    </DesktopContext.Provider>
  )
}

export function useDesktop(): DesktopState {
  const context = useContext(DesktopContext)
  if (!context) {
    throw new Error("useDesktop must be used within a DesktopProvider")
  }
  return context
}
