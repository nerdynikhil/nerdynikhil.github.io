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
  jobTitle: 'Product Builder',
  description: 'Solo builder of iOS apps, developer tools, and AI utilities. 18+ products shipped from idea to App Store.',
}

export default function Home() {
  return (
    <>
      <SEO
        title="Nikhil Barik — Builder of Products People Use"
        description="Nikhil Barik (nerdynikhil) builds and ships iOS apps, SaaS tools, Chrome extensions, and AI utilities — solo, end to end. 18+ products and counting."
        url="https://www.nerdynikhil.com/"
        jsonLd={personJsonLd}
      />
      <Portfolio />
    </>
  )
}
