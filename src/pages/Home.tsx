import SEO from '../components/SEO'
import Portfolio from '../components/portfolio/Portfolio'

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nikhil Barik',
  alternateName: 'nerdynikhil',
  url: 'https://www.nerdynikhil.com',
  image: 'https://www.nerdynikhil.com/images/profilepic.png',
  sameAs: [
    'https://www.linkedin.com/in/nerdynikhil/',
    'https://github.com/nerdynikhil',
    'https://twitter.com/nerdynikhil',
    'https://www.instagram.com/i.know.nothing_/',
  ],
  jobTitle: 'Developer',
  description: 'Developer, Builder, Creator. Shipping iOS apps, web tools, Chrome extensions, and AI utilities.',
}

export default function Home() {
  return (
    <>
      <SEO
        title="Nikhil Barik — Developer, Builder, Creator"
        description="Portfolio of Nikhil Barik (nerdynikhil) — Developer, Builder, Creator. iOS apps, Chrome extensions, SaaS products, and AI tools."
        url="https://www.nerdynikhil.com/"
        jsonLd={personJsonLd}
      />
      <Portfolio />
    </>
  )
}
