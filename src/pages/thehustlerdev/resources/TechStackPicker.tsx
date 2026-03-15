import { Link } from 'react-router-dom'
import SEO from '../../../components/SEO'

const stackTableRows = [
  {
    type: 'SaaS / Web App',
    stack: 'Next.js 15 + tRPC + Drizzle + PostgreSQL + Vercel',
    mvp: '3\u20137 days',
    cost: '$0\u2013$120',
    bestFor: '95% of startups',
  },
  {
    type: 'AI Product / Agent',
    stack: 'Python + FastAPI + LangChain + Modal/RunPod',
    mvp: '2\u20135 days',
    cost: '$50\u2013$500',
    bestFor: 'LLM wrappers',
  },
  {
    type: 'Mobile App',
    stack: 'Flutter 3.24 + Riverpod + Supabase',
    mvp: '10\u201314 days',
    cost: '$25\u2013$200',
    bestFor: 'Cross-platform',
  },
  {
    type: 'E-commerce / Heavy SEO',
    stack: 'Next.js 15 App Router + Shopify Hydrogen fallback',
    mvp: '5\u201310 days',
    cost: '$29\u2013$300',
    bestFor: 'Content + sales',
  },
  {
    type: 'Enterprise / Bank',
    stack: 'Java 21 + Spring Boot 6 + Kotlin + Angular 19 + Kubernetes',
    mvp: '3\u20136 months',
    cost: '$50k+',
    bestFor: 'Compliance & big teams',
  },
  {
    type: 'Real-time / Gaming',
    stack: 'Rust + Axum + WebSocket + Fly.io',
    mvp: '7\u201321 days',
    cost: '$100\u2013$800',
    bestFor: 'Low latency',
  },
  {
    type: 'No-code MVP',
    stack: 'FlutterFlow + Supabase + Stripe',
    mvp: '1\u20133 days',
    cost: '$0\u2013$99',
    bestFor: 'Idea validation',
  },
]

const salaryRows = [
  { combo: 'Next.js 15 + tRPC + Drizzle + Vercel', comp: '$180k\u2013$350k', demand: '\u{1F525}\u{1F525}\u{1F525}' },
  { combo: 'Rust + Axum + Tauri', comp: '$220k\u2013$450k', demand: '\u{1F525}\u{1F525}\u{1F525}' },
  { combo: 'Python + LangChain + Modal', comp: '$200k\u2013$400k', demand: '\u{1F525}\u{1F525}\u{1F525}' },
  { combo: 'Go + Kubernetes + OpenTelemetry', comp: '$190k\u2013$380k', demand: '\u{1F525}\u{1F525}' },
  { combo: 'Flutter + RevenueCat + Supabase', comp: '$170k\u2013$300k', demand: '\u{1F525}' },
]

const goldenRules = [
  { bold: 'TypeScript everywhere', rest: ' \u2014 except AI scripts or Rust' },
  { bold: 'PostgreSQL 17', rest: ' default DB (Supabase/Neon)' },
  { bold: 'Vercel / Cloudflare', rest: ' = 30-second deploys' },
  { bold: 'Drizzle ORM', rest: ' > Prisma (faster, zero runtime bugs)' },
  { bold: 'tRPC', rest: ' for monorepos, simple fetch for everything else' },
  { bold: 'Never use Redux', rest: ' \u2014 use Zustand / Jotai / TanStack Query' },
  { bold: 'Cursor + Claude Code', rest: ' = your new IDE (Copilot is legacy)' },
]

const dailyTools = [
  { bold: 'Editor', rest: ' \u2192 Cursor + Claude Code (AI)' },
  { bold: 'Terminal', rest: ' \u2192 Warp' },
  { bold: 'Database', rest: ' \u2192 Neon / Supabase' },
  { bold: 'Auth', rest: ' \u2192 Clerk (or Auth.js v5)' },
  { bold: 'Forms', rest: ' \u2192 React Hook Form + Zod' },
  { bold: 'Deploy', rest: ' \u2192 Vercel \u2192 Cloudflare \u2192 Fly.io' },
  { bold: 'Monitoring', rest: ' \u2192 Sentry + OpenTelemetry + Grafana' },
]

export default function TechStackPicker() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-[system-ui,'-apple-system','BlinkMacSystemFont','Segoe_UI','Roboto',sans-serif] leading-relaxed">
      <SEO
        title="Tech Stack Picker 2025 \u2014 The Hustler Dev Edition"
        description="Private checklist used by 200+ founders & CTOs to pick the perfect tech stack in 2025. Save 200+ hours of research."
        url="https://www.nerdynikhil.com/thehustlerdev/resources/tech-stack-picker-2025"
      />

      {/* Header */}
      <header className="bg-white border-b border-[#e0e0e0] py-5 sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-5">
          <Link
            to="/thehustlerdev"
            className="text-[#1a1a1a] no-underline text-sm font-medium hover:opacity-70 transition-opacity"
          >
            &larr; Back to Resources
          </Link>
        </div>
      </header>

      <main>
        <article className="py-15 max-w-[800px] mx-auto px-5">
          <h1 className="text-4xl md:text-[2.5rem] font-semibold mb-4 leading-tight">
            Tech Stack Picker 2025 &mdash; The Hustler Dev Edition
          </h1>
          <p className="text-lg text-[#334155] mb-2 leading-relaxed">
            <strong>Private checklist used by 200+ founders &amp; CTOs</strong>
            <br />
            <em>
              I've moved my Notion doc here for better accessibility. Saved me hours of research.
              Now yours for free.
            </em>
          </p>

          <div className="mb-6 text-[#64748b] text-sm">
            <span>Last updated: November 10, 2025</span>
            <span className="mx-2">&bull;</span>
            <span>Reading time: 5 min</span>
          </div>

          {/* Rule #1 Blockquote */}
          <blockquote className="bg-[#f8fafc] border-l-4 border-[#0ea5e9] p-6 my-8 rounded-r-lg">
            <p className="m-0 text-lg text-[#1e293b]">
              <strong>Rule #1:</strong> Pick the stack that lets you ship to 1M users the{' '}
              <strong>fastest</strong> &mdash; NOT the one with the most GitHub stars.
            </p>
          </blockquote>

          {/* Section 1: What Are You Building? */}
          <h2 className="mt-10 mb-5 pb-3 border-b-2 border-[#f0f0f0] text-2xl font-semibold">
            1. What Are You Building? (Answer first &rarr; stack follows)
          </h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr>
                  {['Project Type', 'Recommended Stack (2025)', 'Time to MVP', 'Year-1 Cost', 'Best For'].map(
                    (header) => (
                      <th
                        key={header}
                        className="bg-[#1e293b] text-white font-semibold uppercase text-xs tracking-wider p-4 text-left border border-[#e2e8f0]"
                      >
                        {header}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {stackTableRows.map((row, i) => (
                  <tr
                    key={row.type}
                    className={`hover:bg-[#f1f5f9] ${i % 2 === 1 ? 'bg-[#f8fafc]' : ''}`}
                  >
                    <td className="p-4 border border-[#e2e8f0] font-semibold">{row.type}</td>
                    <td className="p-4 border border-[#e2e8f0]">{row.stack}</td>
                    <td className="p-4 border border-[#e2e8f0]">{row.mvp}</td>
                    <td className="p-4 border border-[#e2e8f0]">{row.cost}</td>
                    <td className="p-4 border border-[#e2e8f0]">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 2: Flowchart */}
          <h2 className="mt-10 mb-5 pb-3 border-b-2 border-[#f0f0f0] text-2xl font-semibold">
            2. 60-Second Flowchart
          </h2>
          <div className="bg-[#f8fafc] border-l-4 border-[#0ea5e9] p-6 my-8 rounded-r-lg font-mono whitespace-pre-line leading-loose text-[0.95em] text-[#1e293b]">
{`Start \u2192 Is it a website?
\u251C\u2500 Yes \u2192 Next.js 15 + Tailwind + Shadcn/ui \u2192 DONE
\u2514\u2500 No \u2192 Talks to AI?
   \u251C\u2500 Yes \u2192 Python + FastAPI + LangChain \u2192 DONE
   \u2514\u2500 No \u2192 Mobile?
      \u251C\u2500 Yes \u2192 Flutter (or SwiftUI if Apple-only)
      \u2514\u2500 No \u2192 Need <10ms latency?
         \u251C\u2500 Yes \u2192 Rust or Go
         \u2514\u2500 No \u2192 Enterprise? \u2192 Java Spring + Angular
            \u2514\u2500 Anything else? \u2192 You're overthinking. Use Next.js.`}
          </div>

          {/* Section 3: Golden Rules */}
          <h2 className="mt-10 mb-5 pb-3 border-b-2 border-[#f0f0f0] text-2xl font-semibold">
            3. Golden Rules (Never break these in 2025)
          </h2>
          <ul className="mb-5 leading-loose list-disc pl-6">
            {goldenRules.map((rule) => (
              <li key={rule.bold} className="mb-2">
                <strong>{rule.bold}</strong>
                {rule.rest}
              </li>
            ))}
          </ul>

          {/* Section 4: Salary Matrix */}
          <h2 className="mt-10 mb-5 pb-3 border-b-2 border-[#f0f0f0] text-2xl font-semibold">
            4. Salary Multiplier Matrix (What to learn for $200k+ TC)
          </h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr>
                  {['Combo', 'Avg Total Comp (2025)', 'Demand'].map((header) => (
                    <th
                      key={header}
                      className="bg-[#1e293b] text-white font-semibold uppercase text-xs tracking-wider p-4 text-left border border-[#e2e8f0]"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {salaryRows.map((row, i) => (
                  <tr
                    key={row.combo}
                    className={`hover:bg-[#f1f5f9] ${i % 2 === 1 ? 'bg-[#f8fafc]' : ''}`}
                  >
                    <td className="p-4 border border-[#e2e8f0]">{row.combo}</td>
                    <td className="p-4 border border-[#e2e8f0]">{row.comp}</td>
                    <td className="p-4 border border-[#e2e8f0] text-[#ef4444] font-bold text-lg">
                      {row.demand}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 5: Learning Paths */}
          <h2 className="mt-10 mb-5 pb-3 border-b-2 border-[#f0f0f0] text-2xl font-semibold">
            5. One-Week Learning Paths (Ship MVP in 7 days)
          </h2>

          <div className="bg-[#f8fafc] rounded-lg p-6 my-8">
            <h3 className="mt-0 mb-4 text-[#1e293b] text-xl font-semibold">
              Path A &ndash; Next.js Full-Stack (most lucrative)
            </h3>
            <p className="leading-loose">
              <strong>Day 1&ndash;2</strong> &rarr; Next.js 15 App Router + React 19
              <br />
              <strong>Day 3&ndash;4</strong> &rarr; tRPC + Drizzle + PostgreSQL (Neon)
              <br />
              <strong>Day 5</strong> &rarr; Tailwind + Shadcn/ui + Clerk Auth
              <br />
              <strong>Day 6</strong> &rarr; Vercel + GitHub Actions + CI
              <br />
              <strong>Day 7</strong> &rarr; Ship MVP &rarr; charge $5k&ndash;$20k
            </p>
          </div>

          <div className="bg-[#f8fafc] rounded-lg p-6 my-8 mb-12">
            <h3 className="mt-0 mb-4 text-[#1e293b] text-xl font-semibold">
              Path B &ndash; AI Agent
            </h3>
            <p className="leading-loose">
              <strong>Day 1&ndash;3</strong> &rarr; Python + FastAPI + LangChain
              <br />
              <strong>Day 4&ndash;5</strong> &rarr; Modal.com or RunPod + Llama 3.2
              <br />
              <strong>Day 6&ndash;7</strong> &rarr; Frontend in v0.dev &rarr; launch &rarr; $10k MRR
            </p>
          </div>

          {/* Section 6: Daily Tools */}
          <h2 className="mt-10 mb-5 pb-3 border-b-2 border-[#f0f0f0] text-2xl font-semibold">
            6. Daily Tools (No BS, I actually use these)
          </h2>
          <ul className="mb-5 leading-loose list-disc pl-6">
            {dailyTools.map((tool) => (
              <li key={tool.bold} className="mb-2">
                <strong>{tool.bold}</strong>
                {tool.rest}
              </li>
            ))}
          </ul>

          {/* Closing Note */}
          <div className="bg-[#f0fdf4] border-l-4 border-[#10b981] p-6 mt-12 mb-8 rounded-r-lg">
            <p className="text-xl leading-relaxed mb-4">
              <strong>You now have the exact playbook I use with $1M+ startups.</strong>
            </p>
            <p className="text-2xl leading-relaxed my-6">
              The stack doesn't matter.
              <br />
              <strong>Shipping does.</strong>
            </p>

            <div className="bg-white p-6 rounded-lg my-6 border border-[#e2e8f0]">
              <p className="m-0 flex items-center gap-3">
                <span className="text-lg">Made with {'\u{1F49C}'} by</span>
                <a
                  href="https://www.instagram.com/thehustlerdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0ea5e9] no-underline font-semibold"
                >
                  @thehustlerdev
                </a>
              </p>
              <div className="flex flex-wrap gap-2 mt-3 text-sm text-[#64748b]">
                {['50+ stacks', '15+ products', '7-figure exits', 'zero ego'].map((tag) => (
                  <span key={tag} className="bg-[#f1f5f9] px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="mb-4">DM "STACK" on Instagram for monthly updates + new templates.</p>
            <p>
              <em>
                Last updated: November 10, 2025
                <br />
                Next update: when Next.js 16 drops {'\u{1F680}'}
              </em>
            </p>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-[#e0e0e0] text-sm text-[#666]">
        <div className="max-w-[1400px] mx-auto px-5">
          <p className="text-base text-[#6e6e73] mb-4">
            Follow{' '}
            <a
              href="https://www.instagram.com/thehustlerdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#007aff] no-underline font-medium hover:underline"
            >
              @thehustlerdev
            </a>{' '}
            on Instagram for more tips and resources.
          </p>
          <p className="mt-5">
            <Link
              to="/thehustlerdev"
              className="text-[#6e6e73] no-underline text-sm hover:text-[#007aff]"
            >
              &larr; Back to Resources
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
