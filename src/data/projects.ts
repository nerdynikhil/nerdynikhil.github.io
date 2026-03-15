export interface Project {
  name: string
  description: string
  href: string
  domain?: string
}

export interface ProjectCategory {
  label: string
  icon: 'saas' | 'apple' | 'chrome' | 'vscode'
  items: Project[]
}

export const categories: ProjectCategory[] = [
  {
    label: 'SaaS Products',
    icon: 'saas',
    items: [
      { name: 'QuickDevTools', description: 'Fast, free developer utilities', href: 'https://quickdevtools.online/', domain: 'quickdevtools.online' },
      { name: 'EasyN8N', description: 'Deploy n8n in one click', href: 'https://easyn8n.online/', domain: 'easyn8n.online' },
      { name: 'EasyClaw', description: 'Monitor YC companies & jobs', href: 'https://easyyclaw.cloud/', domain: 'easyyclaw.cloud' },
      { name: 'PetrolheadX', description: 'Car enthusiast community', href: 'https://petrolheadx.com/', domain: 'petrolheadx.com' },
      { name: 'Postrr', description: 'Social media post generator', href: 'https://postrr.online/', domain: 'postrr.online' },
      { name: 'ResizeForForms', description: 'Resize photos for Indian exam forms', href: 'https://resizeforforms.online/', domain: 'resizeforforms.online' },
      { name: 'EraseMyBackground', description: 'AI background remover in browser', href: 'https://erasemybackground.online/', domain: 'erasemybackground.online' },
    ],
  },
  {
    label: 'iOS Apps',
    icon: 'apple',
    items: [
      { name: 'ChatterCards', description: 'AI conversation starters for IELTS speaking', href: 'https://apps.apple.com/app/chattercards-ielts-speaking/id6740497874' },
      { name: 'LingoDuel', description: 'Competitive language learning through AI', href: 'https://www.nerdynikhil.com/lingoduel' },
      { name: 'Serenight', description: 'Calm your mind with ambient sounds', href: 'https://www.nerdynikhil.com/serenight' },
      { name: 'TrueHue', description: 'Test your color perception', href: 'https://www.nerdynikhil.com/truehue' },
      { name: 'Subscriptionly', description: 'Track all your subscriptions', href: 'https://www.nerdynikhil.com/subscriptionly' },
      { name: 'WDTG', description: 'Where Did The Time Go? — time tracking', href: 'https://www.nerdynikhil.com/wdtg' },
    ],
  },
  {
    label: 'Chrome Extensions',
    icon: 'chrome',
    items: [
      { name: 'Behance2PDF', description: 'Export Behance projects as PDF', href: 'https://chromewebstore.google.com/detail/behance2pdf/pagnlaabjkkhpfmgoaabjnmcbdfpmoli' },
      { name: 'Faster Udemy', description: 'Speed up Udemy videos beyond 2x', href: 'https://www.nerdynikhil.com/faster-udemy' },
      { name: 'ETA Tube', description: 'YouTube playlist remaining time', href: 'https://www.nerdynikhil.com/eta-tube' },
    ],
  },
  {
    label: 'VS Code & Claude Tools',
    icon: 'vscode',
    items: [
      { name: 'Meme Sounds', description: 'Play meme sounds while coding', href: 'https://marketplace.visualstudio.com/items?itemName=nerdynikhil.meme-sounds' },
      { name: 'claude-ping-me', description: 'Notification when Claude waits for input', href: 'https://skills.sh/skill/claude-ping-me' },
      { name: 'Claude Narrator', description: 'Narrates Claude Code actions aloud', href: 'https://www.nerdynikhil.com/claude-narrator' },
    ],
  },
]
