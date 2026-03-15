import { Link } from 'react-router-dom'
import SEO from '../../../components/SEO'

const tools = [
  {
    title: '1. ChatGPT',
    description:
      'An AI language model that aids in code generation, debugging, and documentation. I use it strategically for complex problems rather than every single task, which keeps my usage costs minimal while maximizing value.',
  },
  {
    title: '2. Notion AI',
    description:
      'An all-in-one workspace that integrates AI to assist with content creation, organization, and collaboration. Perfect for managing documentation, project planning, and knowledge bases without needing multiple paid tools.',
  },
  {
    title: '3. Raycast',
    description:
      'A macOS productivity tool that enhances workflow efficiency through quick access to applications and commands. Free for personal use, this tool eliminates countless mouse clicks and context switching.',
  },
  {
    title: '4. ClickUp AI',
    description:
      'A project management platform that leverages AI to automate tasks, manage documents, and provide team insights. I use the free tier for personal projects and only upgrade when absolutely necessary.',
  },
  {
    title: '5. Reclaim AI',
    description:
      'An AI-powered calendar assistant that schedules tasks and meetings while protecting focus and personal time. The free version provides enough value to maintain a balanced workflow without subscription creep.',
  },
]

export default function AIProductivityToolkit() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-[system-ui,'-apple-system','BlinkMacSystemFont','Segoe_UI','Roboto',sans-serif] leading-relaxed">
      <SEO
        title="AI Engineer's Productivity Toolkit - The Hustler Dev"
        description="Essential tools that help AI Engineers stay efficient while keeping costs in check."
        url="https://www.nerdynikhil.com/thehustlerdev/resources/ai-productivity-toolkit"
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
            AI Engineer's Productivity Toolkit
          </h1>
          <p className="text-xl text-[#666] mb-12 leading-relaxed">
            Essential tools that help me stay efficient while keeping costs in check.
          </p>

          <div>
            {tools.map((tool, index) => (
              <div
                key={tool.title}
                className={`mb-10 pb-10 ${
                  index < tools.length - 1 ? 'border-b border-[#e0e0e0]' : ''
                }`}
              >
                <h2 className="text-2xl font-semibold mb-3 text-[#1a1a1a]">{tool.title}</h2>
                <p className="text-base leading-relaxed text-[#666]">{tool.description}</p>
              </div>
            ))}
          </div>

          {/* Closing Note */}
          <div className="bg-[#f8f9fa] border-l-4 border-[#1a1a1a] p-6 rounded-md mt-12">
            <p className="text-base leading-relaxed text-[#666] m-0">
              <strong className="text-[#1a1a1a]">Pro Tip:</strong> The key to staying productive on
              a budget is to maximize free tiers, use paid tools strategically, and regularly audit
              your subscriptions. Most tools offer generous free tiers that are sufficient for
              individual use&mdash;only upgrade when the ROI is clear.
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
