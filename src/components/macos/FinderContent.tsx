import { useState } from "react"
import { useNavigate } from "react-router-dom"

// --- Types ---

type CategoryId =
  | "all"
  | "saas"
  | "ios"
  | "chrome"
  | "vscode-claude"
  | "blog"

interface SidebarItem {
  id: CategoryId
  label: string
  icon: string
}

interface PortfolioItem {
  name: string
  description: string
  category: CategoryId
  icon: string | { type: "image"; src: string }
  action: "navigate" | "external"
  target: string
}

// --- Sidebar categories ---

const SIDEBAR_ITEMS: SidebarItem[] = [
  { id: "all", label: "All Projects", icon: "\uD83D\uDCC1" },
  { id: "saas", label: "SaaS Products", icon: "\uD83D\uDE80" },
  { id: "ios", label: "iOS Apps", icon: "\uD83D\uDCF1" },
  { id: "chrome", label: "Chrome Extensions", icon: "\uD83E\uDDE9" },
  { id: "vscode-claude", label: "VS Code & Claude", icon: "\uD83D\uDD27" },
  { id: "blog", label: "Blog", icon: "\uD83D\uDCDD" },
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
    name: "EasyYClaw",
    description: "Monitor YC companies & jobs",
    category: "saas",
    icon: "\uD83D\uDD0D",
    action: "external",
    target: "https://easyclaw.cloud/",
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

// --- Sidebar component (exported for Window to use as sidebar prop) ---

export function FinderSidebar({
  selectedCategory,
  onSelectCategory,
}: {
  selectedCategory: CategoryId
  onSelectCategory: (id: CategoryId) => void
}) {
  return (
    <nav className="flex flex-col py-2 text-[13px]">
      <div className="px-4 py-1 text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-500">
        Favorites
      </div>
      {SIDEBAR_ITEMS.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onSelectCategory(item.id)}
          className={[
            "flex items-center gap-2 px-4 py-1.5 text-left transition-colors cursor-default",
            selectedCategory === item.id
              ? "bg-blue-500/90 text-white rounded-md mx-2 px-2"
              : "text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5",
          ].join(" ")}
        >
          <span className="text-sm leading-none">{item.icon}</span>
          <span className="truncate">{item.label}</span>
        </button>
      ))}
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

// --- Main content component ---
// Self-contained Finder layout with sidebar + main content.
// The FinderSidebar is also exported separately if Window wants to pass it as a sidebar prop.

export default function FinderContent() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("all")
  const navigate = useNavigate()

  const filteredItems =
    selectedCategory === "all"
      ? ITEMS
      : ITEMS.filter((item) => item.category === selectedCategory)

  function handleItemActivate(item: PortfolioItem) {
    if (item.action === "navigate") {
      navigate(item.target)
    } else {
      window.open(item.target, "_blank")
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
            {SIDEBAR_ITEMS.find((s) => s.id === selectedCategory)?.label ||
              "All Projects"}
          </span>

          <div className="flex-1" />

          {/* View toggle icons (decorative) */}
          <div className="flex gap-0.5">
            <div className="w-7 h-7 rounded flex items-center justify-center bg-gray-200/70 dark:bg-white/10">
              <svg
                className="w-4 h-4 text-gray-600 dark:text-gray-300"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <rect x="1" y="1" width="6" height="6" rx="1" />
                <rect x="9" y="1" width="6" height="6" rx="1" />
                <rect x="1" y="9" width="6" height="6" rx="1" />
                <rect x="9" y="9" width="6" height="6" rx="1" />
              </svg>
            </div>
            <div className="w-7 h-7 rounded flex items-center justify-center text-gray-400 dark:text-gray-500">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <rect x="1" y="2" width="14" height="2" rx="0.5" />
                <rect x="1" y="7" width="14" height="2" rx="0.5" />
                <rect x="1" y="12" width="14" height="2" rx="0.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Grid content */}
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

        {/* Status bar */}
        <div className="flex items-center px-4 py-1.5 border-t border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/3 text-[11px] text-gray-500 dark:text-gray-500">
          {count} item{count !== 1 ? "s" : ""}
        </div>
      </div>
    </div>
  )
}

export type { CategoryId }
