import { Helmet } from 'react-helmet-async'
import { absoluteUrl, SITE_NAME } from './siteMeta'

type PageSeoProps = {
  /** Full <title>. Aim for ~60 characters so it isn't truncated in results. */
  title: string
  /** Meta description. Aim for 140–160 characters. */
  description: string
  /** Router path for this page, e.g. '/employers'. Used for canonical + og:url. */
  path: string
  /** Shorter social headline. Falls back to `title`. */
  ogTitle?: string
  /** Shorter social blurb. Falls back to `description`. */
  ogDescription?: string
  /** One JSON-LD object, or several. Rendered as separate <script> tags. */
  jsonLd?: object | object[]
}

/**
 * Per-page <head> tags: title, description, canonical, Open Graph, Twitter
 * card, and any page-specific schema.org markup.
 *
 * Under React 19, react-helmet-async renders these as plain elements and React
 * hoists <title>/<meta>/<link> to the top of the document itself — which is
 * also what scripts/prerender.mjs relies on when it builds the static HTML for
 * crawlers that don't run JavaScript. JSON-LD <script> tags are not hoisted and
 * stay inline in the body, which is valid.
 */
export function PageSeo({ title, description, path, ogTitle, ogDescription, jsonLd }: PageSeoProps) {
  const url = absoluteUrl(path)
  const scripts = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={ogTitle ?? title} />
      <meta property="og:description" content={ogDescription ?? description} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={ogTitle ?? title} />
      <meta name="twitter:description" content={ogDescription ?? description} />

      {scripts.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
