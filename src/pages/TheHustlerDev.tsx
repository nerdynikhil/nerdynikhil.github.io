import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } }
  }
}

const resources = [
  {
    slug: 'tech-stack-picker-2025',
    title: 'Tech Stack Picker 2025',
    description:
      'Private checklist used by 200+ founders & CTOs to pick the perfect tech stack in 2025',
  },
  {
    slug: '5-essential-leetcode-patterns',
    title: '5 Essential LeetCode Patterns for Technical Interviews',
    description:
      'Master these key patterns to solve coding interview problems efficiently and land your dream job',
  },
  {
    slug: '5-design-patterns-that-changed-my-code-quality',
    title: '5 Design Patterns That Changed My Code Quality',
    description:
      'Master these essential patterns to write cleaner, more maintainable, and scalable code',
  },
  {
    slug: 'ai-productivity-toolkit',
    title: "AI Engineer's Productivity Toolkit",
    description:
      'Essential tools that help me stay efficient while keeping costs in check',
  },
]

export default function TheHustlerDev() {
  useEffect(() => {
    // Load Instagram embed script
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    } else if (!document.querySelector('script[src*="instagram.com/embed.js"]')) {
      const script = document.createElement('script')
      script.async = true
      script.src = '//www.instagram.com/embed.js'
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process()
        }
      }
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-[system-ui,'-apple-system','BlinkMacSystemFont','SF_Pro_Display','Segoe_UI','Roboto',sans-serif] leading-relaxed">
      <SEO
        title="The Hustler Dev - Tips & Resources for Software Engineers"
        description="Curated resources, productivity tools, and essential tech insights for AI Engineers and Software Engineers. From tech stack selection to design patterns, level up your development journey."
        url="https://www.nerdynikhil.com/thehustlerdev"
        image="https://www.nerdynikhil.com/images/profilepic.png"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'The Hustler Dev',
          description:
            'Curated resources, productivity tools, and essential tech insights for AI Engineers and Software Engineers.',
          url: 'https://www.nerdynikhil.com/thehustlerdev/',
          author: {
            '@type': 'Person',
            name: 'Nikhil Barik',
            url: 'https://www.nerdynikhil.com/',
            sameAs: [
              'https://www.instagram.com/thehustlerdev/',
              'https://twitter.com/nerdynikhil',
            ],
          },
        }}
      />

      {/* Header */}
      <header className="bg-white border-b border-[#e0e0e0] py-5 sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-5">
          <Link
            to="/"
            className="text-[#1a1a1a] no-underline text-sm font-medium hover:opacity-70 transition-opacity"
          >
            &larr; Back to Home
          </Link>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-white py-20 pb-10 text-center border-b border-[#e0e0e0]">
          <div className="max-w-[800px] mx-auto px-5">
            <h1 className="text-5xl md:text-[3rem] font-semibold mb-4 tracking-tight text-[#1a1a1a]">
              The Hustler Dev
            </h1>
            <p className="text-xl text-[#666] mx-auto mb-8 max-w-[600px]">
              Tips, tools, and resources for AI Engineers and Software Engineers
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-15 bg-white">
          <div className="max-w-[1400px] mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column: Instagram */}
              <div className="min-w-0 order-2 lg:order-1">
                <h2 className="text-2xl font-semibold mb-2 text-[#1a1a1a]">Instagram</h2>
                <div className="w-full">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink="https://www.instagram.com/thehustlerdev/?utm_source=ig_embed&utm_campaign=loading"
                    data-instgrm-version="14"
                    style={{
                      background: '#FFF',
                      border: 0,
                      borderRadius: '3px',
                      boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                      margin: '1px',
                      maxWidth: '540px',
                      minWidth: '326px',
                      padding: 0,
                      width: 'calc(100% - 2px)',
                    }}
                  >
                    <div className="p-4">
                      <a
                        href="https://www.instagram.com/thehustlerdev/?utm_source=ig_embed&utm_campaign=loading"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white block no-underline text-center w-full"
                      >
                        <div className="flex items-center">
                          <div className="bg-[#F4F4F4] rounded-full grow-0 h-10 w-10 mr-3.5" />
                          <div className="flex flex-col grow justify-center">
                            <div className="bg-[#F4F4F4] rounded h-3.5 mb-1.5 w-[100px]" />
                            <div className="bg-[#F4F4F4] rounded h-3.5 w-[60px]" />
                          </div>
                        </div>
                        <div className="py-[19%]" />
                        <div className="block h-[50px] mx-auto mb-3 w-[50px]">
                          <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1">
                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                              <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                                <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631" />
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div className="pt-2">
                          <div className="text-[#3897f0] font-[system-ui,'-apple-system',sans-serif] text-sm font-medium leading-[18px]">
                            View this profile on Instagram
                          </div>
                        </div>
                      </a>
                    </div>
                  </blockquote>
                </div>

                {/* Workspace Setup */}
                <div className="mt-10 text-left">
                  <h3 className="text-2xl font-semibold mb-2 text-left">Workspace Setup</h3>
                  <p className="text-[#666] mb-6 text-left">
                    The tools and gear that power my productivity
                  </p>
                  <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-5 overflow-hidden">
                    <iframe
                      src="https://kit.co/embed?url=https%3A%2F%2Fkit.co%2Fnerdynikhil%2Fdesk-setup"
                      className="block border-0 rounded-lg mx-auto w-full min-h-[400px]"
                      scrolling="no"
                      title="Desk Setup Kit"
                    />
                  </div>
                  <div className="mt-6 text-[#666] leading-relaxed">
                    <p>
                      This is my current workspace setup that I use for development and content
                      creation. Every piece of equipment has been carefully selected to optimize both
                      comfort and productivity.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Resources */}
              <div className="min-w-0 order-1 lg:order-2">
                <h2 className="text-2xl font-semibold mb-2 text-[#1a1a1a]">Curated Resources</h2>
                <p className="text-[0.95rem] text-[#666] mb-8">Click on a resource to read more</p>

                <div className="flex flex-col gap-4">
                  {resources.map((resource) => (
                    <Link
                      key={resource.slug}
                      to={`/thehustlerdev/resources/${resource.slug}`}
                      className="no-underline text-inherit block transition-transform hover:-translate-y-0.5"
                    >
                      <div className="p-6 border border-[#e0e0e0] rounded-lg bg-white transition-all hover:border-[#1a1a1a] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                        <h3 className="mb-2 text-xl font-semibold text-[#1a1a1a]">
                          {resource.title}
                        </h3>
                        <p className="mb-3 text-[#666] text-[0.95rem] leading-normal">
                          {resource.description}
                        </p>
                        <span className="inline-block text-[#1a1a1a] text-sm font-medium opacity-70">
                          Read more &rarr;
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
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
              to="/"
              className="text-[#6e6e73] no-underline text-sm hover:text-[#007aff]"
            >
              &larr; Back to Home
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
