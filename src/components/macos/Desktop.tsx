import { DesktopProvider, useDesktop } from "./DesktopContext"
import MenuBar from "./MenuBar"
import Dock from "./Dock"
import Window from "./Window"
import FinderContent from "./FinderContent"
import TerminalContent from "./TerminalContent"
import SafariContent from "./SafariContent"

const FONT_FAMILY =
  "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', system-ui, sans-serif"

function DesktopContent() {
  const { windows, isDarkMode, focusWindow } = useDesktop()

  const openWindows = windows.filter((w) => w.isOpen)

  const handleDesktopClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      focusWindow("")
    }
  }

  return (
    <div
      className={isDarkMode ? "dark" : ""}
      style={{ fontFamily: FONT_FAMILY }}
    >
      <div
        className="relative h-screen w-screen overflow-hidden select-none"
        style={{
          backgroundImage: "url('/images/macos-tahoe-wallpaper.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <MenuBar />

        {/* Desktop area */}
        <div
          className="absolute inset-0 top-7 bottom-0"
          onClick={handleDesktopClick}
        >
          {openWindows.map((win) => {
            let content: React.ReactNode = null

            if (win.id === "finder") {
              content = <FinderContent />
            } else if (win.id === "terminal") {
              content = <TerminalContent />
            } else if (win.id === "safari") {
              content = <SafariContent />
            }

            return (
              <Window key={win.id} id={win.id}>
                {content}
              </Window>
            )
          })}
        </div>

        <Dock />
      </div>
    </div>
  )
}

export default function Desktop() {
  return (
    <DesktopProvider>
      <DesktopContent />
    </DesktopProvider>
  )
}
