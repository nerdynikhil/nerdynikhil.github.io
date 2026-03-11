import { useState } from "react"
import React from "react"
import { useNavigate } from "react-router-dom"
import { useDesktop } from "./DesktopContext"

// --- Types ---

type CategoryId =
  | "all"
  | "saas"
  | "ios"
  | "chrome"
  | "vscode-claude"
  | "blog"

type ViewMode = "grid" | "list"

interface PortfolioItem {
  name: string
  description: string
  category: CategoryId
  icon: string | { type: "image"; src: string }
  action: "navigate" | "external"
  target: string
}

// --- Sidebar structure ---

const FAVOURITES: { id: CategoryId; label: string }[] = [
  { id: "saas", label: "SaaS Products" },
  { id: "ios", label: "iOS Apps" },
  { id: "chrome", label: "Chrome Extensions" },
  { id: "vscode-claude", label: "VS Code & Claude" },
  { id: "blog", label: "Blog" },
]

const LOCATIONS: { label: string; href: string; icon: "github" | "globe" | "person" }[] = [
  { label: "GitHub", href: "https://github.com/nerdynikhil", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/nerdynikhil", icon: "person" },
  { label: "nerdynikhil.github.io", href: "/", icon: "globe" },
]

// --- Portfolio items ---

const ITEMS: PortfolioItem[] = [
  // SaaS Products
  {
    name: "QuickDevTools",
    description: "Fast, free developer utilities",
    category: "saas",
    icon: "\uD83D\uDD27",
    action: "external",
    target: "https://quickdevtools.online/",
  },
  {
    name: "EasyN8N",
    description: "Deploy n8n in one click",
    category: "saas",
    icon: "\uD83D\uDCBB",
    action: "external",
    target: "https://easyn8n.online/",
  },
  {
    name: "EasyClaw",
    description: "Monitor YC companies & jobs",
    category: "saas",
    icon: "\uD83D\uDD0D",
    action: "external",
    target: "https://easyyclaw.cloud/",
  },
  {
    name: "PetrolheadX",
    description: "Car enthusiast community",
    category: "saas",
    icon: "\uD83D\uDE97",
    action: "external",
    target: "https://petrolheadx.com/",
  },
  {
    name: "Postrr",
    description: "Social media post generator",
    category: "saas",
    icon: "\uD83D\uDDBC\uFE0F",
    action: "external",
    target: "https://postrr.online/",
  },

  // iOS Apps
  {
    name: "ChatterCards",
    description: "AI conversation starter cards",
    category: "ios",
    icon: { type: "image", src: "/images/chattercards/app-icon.webp" },
    action: "navigate",
    target: "/chattercards",
  },
  {
    name: "LingoDuel",
    description: "Competitive language learning",
    category: "ios",
    icon: { type: "image", src: "/images/lingoduel/lingoduel-logo.png" },
    action: "navigate",
    target: "/lingoduel",
  },
  {
    name: "Serenight",
    description: "Calm mind with ambient sounds",
    category: "ios",
    icon: { type: "image", src: "/images/serenight/logo.png" },
    action: "navigate",
    target: "/serenight",
  },
  {
    name: "TrueHue",
    description: "Test your color perception",
    category: "ios",
    icon: { type: "image", src: "/images/truehue/TrueHue.png" },
    action: "navigate",
    target: "/truehue",
  },
  {
    name: "Subscriptionly",
    description: "Track all your subscriptions",
    category: "ios",
    icon: { type: "image", src: "/images/subscriptionly/360x360ia.png" },
    action: "navigate",
    target: "/subscriptionly",
  },
  {
    name: "WDTG",
    description: "What Did That Guy say?",
    category: "ios",
    icon: "\u23F0",
    action: "navigate",
    target: "/wdtg",
  },

  // Chrome Extensions
  {
    name: "Behance2PDF",
    description: "Export Behance projects as PDF",
    category: "chrome",
    icon: {
      type: "image",
      src: "https://github.com/nerdynikhil/Behance2PDF/blob/main/assets/icons/icon1024.png?raw=true",
    },
    action: "navigate",
    target: "/behance2pdf",
  },
  {
    name: "Faster Udemy",
    description: "Speed up Udemy videos beyond 2x",
    category: "chrome",
    icon: {
      type: "image",
      src: "https://github.com/nerdynikhil/faster-udemy/blob/main/faster-udemy-128.png?raw=true",
    },
    action: "navigate",
    target: "/faster-udemy",
  },
  {
    name: "ETA Tube",
    description: "YouTube playlist remaining time",
    category: "chrome",
    icon: { type: "image", src: "/images/eta-tube/store-icon-128x128.png" },
    action: "navigate",
    target: "/eta-tube",
  },

  // VS Code & Claude
  {
    name: "Meme Sounds",
    description: "Play meme sounds while coding",
    category: "vscode-claude",
    icon: { type: "image", src: "/images/meme-sounds.png" },
    action: "external",
    target:
      "https://marketplace.visualstudio.com/items?itemName=nerdynikhil.meme-sounds",
  },
  {
    name: "claude-ping-me",
    description: "Notification when Claude waits",
    category: "vscode-claude",
    icon: "\uD83D\uDD14",
    action: "external",
    target: "https://skills.sh/skill/claude-ping-me",
  },
  {
    name: "Claude Narrator",
    description: "Narrates Claude Code actions",
    category: "vscode-claude",
    icon: "\uD83C\uDF99\uFE0F",
    action: "navigate",
    target: "/claude-narrator",
  },

  // Blog
  {
    name: "PRD: Increasing Zomato Text Reviews",
    description: "Product Requirements Document",
    category: "blog",
    icon: "\uD83D\uDCCB",
    action: "navigate",
    target: "/blog/prd-increasing-zomato-text-reviews",
  },
  {
    name: "Growing Zomato with Quality Reviews",
    description: "Case Study",
    category: "blog",
    icon: "\uD83D\uDCC8",
    action: "navigate",
    target: "/blog/case-study-growing-zomato-quality-reviews",
  },
  {
    name: "Smytten Referral Teardown",
    description: "Product Teardown",
    category: "blog",
    icon: "\uD83D\uDD0D",
    action: "navigate",
    target: "/blog/smytten-referral-program-teardown",
  },
  {
    name: "Blinkit Notification Teardown",
    description: "Product Teardown",
    category: "blog",
    icon: "\uD83D\uDD14",
    action: "navigate",
    target: "/blog/blinkit-app-notification-product-teardown",
  },
  {
    name: "Swiggy Play Store Rating Drop",
    description: "Root Cause Analysis",
    category: "blog",
    icon: "\u26A0\uFE0F",
    action: "navigate",
    target: "/blog/swiggy-root-cause-analysis-play-store-rating-drop",
  },
  {
    name: "Swiggy Customer Loyalty",
    description: "Product Strategy",
    category: "blog",
    icon: "\uD83C\uDFAF",
    action: "navigate",
    target: "/blog/swiggy-enhancing-customer-loyalty-retention",
  },
  {
    name: "Food Delivery Industry Research",
    description: "Industry Research",
    category: "blog",
    icon: "\uD83C\uDF5C",
    action: "navigate",
    target: "/blog/secondary-research-food-delivery-industry-india",
  },
  {
    name: "Google Smart Shoes Metrics",
    description: "Product Metrics",
    category: "blog",
    icon: "\uD83D\uDC5F",
    action: "navigate",
    target: "/blog/google-smart-shoes-product-metrics-goals",
  },
  {
    name: "Swiggy Dabba Meal Plans",
    description: "Product Feature",
    category: "blog",
    icon: "\uD83C\uDF71",
    action: "navigate",
    target: "/blog/swiggy-dabba-customized-meal-plans",
  },
]

// --- Category → kind label ---

const KIND_LABELS: Record<CategoryId, string> = {
  all: "Project",
  saas: "SaaS Product",
  ios: "iOS App",
  chrome: "Chrome Extension",
  "vscode-claude": "Extension",
  blog: "Blog Post",
}

// --- Emoji background colors for non-image icons ---

const EMOJI_BG_COLORS: Record<string, string> = {
  "\uD83D\uDD27": "bg-orange-500/20",
  "\uD83D\uDCBB": "bg-blue-500/20",
  "\uD83D\uDD0D": "bg-purple-500/20",
  "\uD83D\uDE97": "bg-red-500/20",
  "\uD83D\uDDBC\uFE0F": "bg-pink-500/20",
  "\u23F0": "bg-yellow-500/20",
  "\uD83D\uDD14": "bg-amber-500/20",
  "\uD83C\uDF99\uFE0F": "bg-indigo-500/20",
  "\uD83D\uDCCB": "bg-blue-500/20",
  "\uD83D\uDCC8": "bg-green-500/20",
  "\u26A0\uFE0F": "bg-yellow-500/20",
  "\uD83C\uDFAF": "bg-red-500/20",
  "\uD83C\uDF5C": "bg-orange-500/20",
  "\uD83D\uDC5F": "bg-teal-500/20",
  "\uD83C\uDF71": "bg-emerald-500/20",
}

// --- Sidebar SVG icons ---

function IcoRecents({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="8" cy="8" r="6" />
      <polyline points="8,4.5 8,8 10.5,10" />
    </svg>
  )
}

function IcoFolder({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 13" fill="currentColor" aria-hidden>
      <path d="M0 3.5A2.5 2.5 0 012.5 1h2.25c.464 0 .91.184 1.238.513L7.12 2.633A.5.5 0 007.474 2.8H13.5A2.5 2.5 0 0116 5.3v5.2A2.5 2.5 0 0113.5 13h-11A2.5 2.5 0 010 10.5V3.5z" />
    </svg>
  )
}

function IcoPhone({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="1" width="8" height="14" rx="2" />
      <circle cx="8" cy="12.5" r="0.7" fill="currentColor" />
    </svg>
  )
}

function IcoPuzzle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 2h4v2.5c.6-.4 1.5-.4 1.5.8S10.6 7 10 6.5V9H7.5c.4-.6.4-1.5-.8-1.5S5 8.4 5.5 9H3V6c-.6.4-1.5.4-1.5-.8S2.4 3.5 3 4V2h3z" />
    </svg>
  )
}

function IcoCode({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="5,4 1.5,8 5,12" />
      <polyline points="11,4 14.5,8 11,12" />
      <line x1="9.5" y1="3" x2="6.5" y2="13" />
    </svg>
  )
}

function IcoDoc({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 14 16" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M2 1h7l3 3v11H2V1z" />
      <polyline points="9,1 9,4 12,4" />
      <line x1="4" y1="7" x2="10" y2="7" />
      <line x1="4" y1="10" x2="8" y2="10" />
    </svg>
  )
}

function IcoGlobe({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" aria-hidden>
      <circle cx="8" cy="8" r="6" />
      <ellipse cx="8" cy="8" rx="2.5" ry="6" />
      <line x1="2" y1="8" x2="14" y2="8" />
    </svg>
  )
}

function IcoPerson({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" aria-hidden>
      <circle cx="8" cy="5.5" r="2.5" />
      <path d="M2.5 14.5c0-2.761 2.462-5 5.5-5s5.5 2.239 5.5 5" />
    </svg>
  )
}

function IcoGitHub({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

function IcoTrash({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="3" y1="4" x2="13" y2="4" />
      <path d="M5 4V2.5A.5.5 0 015.5 2h5a.5.5 0 01.5.5V4" />
      <path d="M4 4l.667 9.333A1 1 0 005.662 14h4.676a1 1 0 00.995-.667L12 4" />
    </svg>
  )
}

// --- Sidebar component ---

export function FinderSidebar({
  selectedCategory,
  onSelectCategory,
}: {
  selectedCategory: CategoryId
  onSelectCategory: (id: CategoryId) => void
}) {
  function rowClass(active: boolean) {
    return [
      "flex items-center gap-2 w-[calc(100%-8px)] mx-1 px-2 py-[3px] rounded-md",
      "text-left cursor-default transition-colors duration-100 text-[13px]",
      active
        ? "bg-blue-500 text-white"
        : "text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5",
    ].join(" ")
  }

  function iconClass(active: boolean) {
    return ["w-4 h-4 flex-shrink-0", active ? "text-white" : ""].join(" ")
  }

  function sectionHeader(label: string) {
    return (
      <div className="px-3 pt-3 pb-0.5 select-none">
        <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-500">
          {label}
        </span>
      </div>
    )
  }

  const favIcons: Record<string, (p: { className?: string }) => React.ReactElement> = {
    saas: IcoFolder,
    ios: IcoPhone,
    chrome: IcoPuzzle,
    "vscode-claude": IcoCode,
    blog: IcoDoc,
  }

  return (
    <nav className="flex flex-col py-1 h-full overflow-y-auto">
      {/* Top item — no section header, like macOS "Recents" */}
      <div className="pt-1 pb-1">
        <button
          type="button"
          onClick={() => onSelectCategory("all")}
          className={rowClass(selectedCategory === "all")}
        >
          <IcoRecents className={[iconClass(selectedCategory === "all"), selectedCategory === "all" ? "" : "text-blue-500 dark:text-blue-400"].join(" ")} />
          <span className="truncate">Recents</span>
        </button>
      </div>

      {/* Favourites */}
      {sectionHeader("Favourites")}
      <div className="pb-1">
        {FAVOURITES.map((item) => {
          const active = selectedCategory === item.id
          const Icon = favIcons[item.id] ?? IcoFolder
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectCategory(item.id)}
              className={rowClass(active)}
            >
              <Icon className={[iconClass(active), active ? "" : "text-blue-500 dark:text-blue-400"].join(" ")} />
              <span className="truncate">{item.label}</span>
            </button>
          )
        })}
      </div>

      {/* Locations */}
      {sectionHeader("Locations")}
      <div className="pb-1">
        {LOCATIONS.map((loc) => {
          const Icon = loc.icon === "github" ? IcoGitHub : loc.icon === "person" ? IcoPerson : IcoGlobe
          return (
            <button
              key={loc.label}
              type="button"
              onClick={() => window.open(loc.href, "_blank")}
              className={rowClass(false)}
            >
              <Icon className="w-4 h-4 flex-shrink-0 text-gray-500 dark:text-gray-400" />
              <span className="truncate">{loc.label}</span>
            </button>
          )
        })}
        <button type="button" className={rowClass(false)} disabled>
          <IcoTrash className="w-4 h-4 flex-shrink-0 text-gray-500 dark:text-gray-400" />
          <span className="truncate text-gray-600 dark:text-gray-400">Bin</span>
        </button>
      </div>

      {/* Tags */}
      {sectionHeader("Tags")}
    </nav>
  )
}

// --- Item card ---

function FinderItem({
  item,
  onActivate,
}: {
  item: PortfolioItem
  onActivate: () => void
}) {
  const isImage = typeof item.icon === "object" && item.icon.type === "image"

  return (
    <button
      type="button"
      onClick={onActivate}
      className={[
        "flex flex-col items-center text-center gap-2 p-3 rounded-lg",
        "transition-all duration-150 cursor-default group",
        "hover:bg-black/5 dark:hover:bg-white/8 hover:scale-105",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
      ].join(" ")}
    >
      {/* Icon */}
      {isImage ? (
        <img
          src={(item.icon as { type: "image"; src: string }).src}
          alt={item.name}
          className="w-16 h-16 rounded-xl object-cover shadow-sm"
          draggable={false}
        />
      ) : (
        <div
          className={[
            "w-16 h-16 rounded-xl flex items-center justify-center text-2xl shadow-sm",
            EMOJI_BG_COLORS[item.icon as string] || "bg-gray-500/20",
          ].join(" ")}
        >
          {item.icon as string}
        </div>
      )}

      {/* Name */}
      <span className="text-xs font-medium leading-tight text-gray-800 dark:text-gray-200 line-clamp-2 max-w-[90px]">
        {item.name}
      </span>
    </button>
  )
}

// --- List view row ---

function FinderListRow({
  item,
  onActivate,
}: {
  item: PortfolioItem
  onActivate: () => void
}) {
  const isImage = typeof item.icon === "object" && item.icon.type === "image"

  return (
    <button
      type="button"
      onClick={onActivate}
      className={[
        "w-full flex items-center px-3 py-1 text-left cursor-default group",
        "border-b border-gray-100 dark:border-white/5",
        "hover:bg-blue-500 focus:outline-none focus-visible:bg-blue-500",
      ].join(" ")}
    >
      {/* Icon */}
      <div className="w-5 h-5 flex-shrink-0 mr-2.5">
        {isImage ? (
          <img
            src={(item.icon as { type: "image"; src: string }).src}
            alt={item.name}
            className="w-full h-full rounded object-cover"
            draggable={false}
          />
        ) : (
          <span className="text-sm leading-none">{item.icon as string}</span>
        )}
      </div>

      {/* Name */}
      <span className="flex-1 text-[13px] text-gray-800 dark:text-gray-200 group-hover:text-white truncate">
        {item.name}
      </span>

      {/* Description */}
      <span className="w-52 text-[12px] text-gray-500 dark:text-gray-400 group-hover:text-white/80 truncate mr-4 hidden sm:block">
        {item.description}
      </span>

      {/* Kind */}
      <span className="w-36 text-[12px] text-gray-500 dark:text-gray-400 group-hover:text-white/80 truncate">
        {KIND_LABELS[item.category]}
      </span>
    </button>
  )
}

// --- Main content component ---
// Self-contained Finder layout with sidebar + main content.
// The FinderSidebar is also exported separately if Window wants to pass it as a sidebar prop.

export default function FinderContent() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("all")
  const [viewMode, setViewMode] = useState<ViewMode>("list")
  const navigate = useNavigate()
  const { openWindow, navigateSafari } = useDesktop()

  const filteredItems =
    selectedCategory === "all"
      ? ITEMS
      : ITEMS.filter((item) => item.category === selectedCategory)

  function handleItemActivate(item: PortfolioItem) {
    if (item.action === "navigate") {
      navigate(item.target)
    } else {
      navigateSafari({ url: item.target, title: item.name, description: item.description })
      openWindow("safari")
    }
  }

  const count = filteredItems.length

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-48 shrink-0 border-r border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-white/3 overflow-y-auto">
        <FinderSidebar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Toolbar */}
        <div className="flex items-center gap-3 px-4 py-2 border-b border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/3">
          {/* Back/forward (decorative) */}
          <div className="flex gap-1">
            <button
              type="button"
              className="w-7 h-7 rounded flex items-center justify-center text-gray-400 dark:text-gray-500"
              disabled
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              className="w-7 h-7 rounded flex items-center justify-center text-gray-400 dark:text-gray-500"
              disabled
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Title */}
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {selectedCategory === "all"
              ? "Recents"
              : FAVOURITES.find((s) => s.id === selectedCategory)?.label ||
                "All Projects"}
          </span>

          <div className="flex-1" />

          {/* View toggle icons */}
          <div className="flex gap-0.5">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={[
                "w-7 h-7 rounded flex items-center justify-center",
                viewMode === "grid"
                  ? "bg-gray-200/70 dark:bg-white/10 text-gray-700 dark:text-gray-200"
                  : "text-gray-400 dark:text-gray-500 hover:bg-gray-200/50 dark:hover:bg-white/5",
              ].join(" ")}
              aria-label="Grid view"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                <rect x="1" y="1" width="6" height="6" rx="1" />
                <rect x="9" y="1" width="6" height="6" rx="1" />
                <rect x="1" y="9" width="6" height="6" rx="1" />
                <rect x="9" y="9" width="6" height="6" rx="1" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("list")}
              className={[
                "w-7 h-7 rounded flex items-center justify-center",
                viewMode === "list"
                  ? "bg-gray-200/70 dark:bg-white/10 text-gray-700 dark:text-gray-200"
                  : "text-gray-400 dark:text-gray-500 hover:bg-gray-200/50 dark:hover:bg-white/5",
              ].join(" ")}
              aria-label="List view"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                <rect x="1" y="2" width="14" height="2" rx="0.5" />
                <rect x="1" y="7" width="14" height="2" rx="0.5" />
                <rect x="1" y="12" width="14" height="2" rx="0.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content area */}
        {viewMode === "list" ? (
          <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-900/50">
            {/* Column headers */}
            <div className="sticky top-0 flex items-center px-3 py-1 border-b border-gray-200 dark:border-white/10 bg-gray-50/90 dark:bg-gray-800/90 text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide select-none">
              <div className="w-5 mr-2.5" />
              <span className="flex-1">Name</span>
              <span className="w-52 mr-4 hidden sm:block">Description</span>
              <span className="w-36">Kind</span>
            </div>

            {filteredItems.map((item) => (
              <FinderListRow
                key={item.name}
                item={item}
                onActivate={() => handleItemActivate(item)}
              />
            ))}

            {filteredItems.length === 0 && (
              <div className="flex items-center justify-center h-40 text-sm text-gray-400 dark:text-gray-500">
                No items in this category
              </div>
            )}
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-900/50">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-6">
              {filteredItems.map((item) => (
                <FinderItem
                  key={item.name}
                  item={item}
                  onActivate={() => handleItemActivate(item)}
                />
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="flex items-center justify-center h-40 text-sm text-gray-400 dark:text-gray-500">
                No items in this category
              </div>
            )}
          </div>
        )}

        {/* Status bar */}
        <div className="flex items-center px-4 py-1.5 border-t border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/3 text-[11px] text-gray-500 dark:text-gray-500">
          {count} item{count !== 1 ? "s" : ""}
        </div>
      </div>
    </div>
  )
}

export type { CategoryId }
