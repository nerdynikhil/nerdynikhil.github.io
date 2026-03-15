import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  url?: string
  image?: string
  type?: string
  twitterCard?: string
  jsonLd?: Record<string, unknown>
}

export default function SEO({
  title,
  description,
  url = 'https://www.nerdynikhil.com/',
  image = 'https://www.nerdynikhil.com/images/profilepic.png',
  type = 'website',
  twitterCard = 'summary_large_image',
  jsonLd,
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@nerdynikhil" />
      <meta name="twitter:creator" content="@nerdynikhil" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  )
}
