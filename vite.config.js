import { createHash } from 'node:crypto'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { courses } from './src/data/courses.js'
import { siteConfig } from './src/data/siteConfig.js'

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character])

const escapeXml = (value) =>
  String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  })[character])

function getProductionSiteUrl(value, command) {
  if (!value) return ''

  let url
  try {
    url = new URL(value)
  } catch {
    throw new Error('VITE_SITE_URL must be an absolute production URL, such as https://example.com.')
  }

  if (
    url.protocol !== 'https:' ||
    url.username ||
    url.password ||
    url.search ||
    url.hash ||
    (url.pathname !== '/' && url.pathname !== '')
  ) {
    throw new Error('VITE_SITE_URL must be an HTTPS origin without credentials, path, query, or fragment.')
  }

  const nonProductionHost =
    /^(localhost|127\.|0\.0\.0\.0|\[::1\])/.test(url.hostname) ||
    /(^|\.)(dev|development|stage|staging|preview|test|testing|local)(\.|$)/i.test(url.hostname)

  if (command === 'build' && nonProductionHost) {
    throw new Error('VITE_SITE_URL must not point to localhost, staging, preview, or development hosts in a production build.')
  }

  return url.origin
}

function seoPlugin(siteUrl) {
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MusicSchool',
        '@id': '#academy',
        name: siteConfig.academyName,
        description: siteConfig.metaDescription,
        url: siteUrl || undefined,
        telephone: siteConfig.contact.phone || undefined,
        email: siteConfig.contact.email || undefined,
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.location.streetAddress,
          addressLocality: siteConfig.location.city,
          addressRegion: siteConfig.location.region,
          postalCode: siteConfig.location.postalCode,
          addressCountry: siteConfig.location.countryCode,
        },
        areaServed: {
          '@type': 'City',
          name: siteConfig.location.city,
        },
        founder: { '@id': '#rahul-deulkar' },
        hasCourse: courses.map((course) => ({
          '@type': 'Course',
          name: course.name,
          description: course.description,
          provider: { '@id': '#academy' },
        })),
        ...(siteUrl ? { image: `${siteUrl}/og-cover.jpg` } : {}),
        ...(siteConfig.contact.socialLinks.some(({ href }) => href)
          ? { sameAs: siteConfig.contact.socialLinks.map(({ href }) => href).filter(Boolean) }
          : {}),
      },
      {
        '@type': 'Person',
        '@id': '#rahul-deulkar',
        name: 'Rahul Deulkar',
        jobTitle: 'Founder & Lead Teacher',
        worksFor: { '@id': '#academy' },
      },
    ],
  })
  const jsonLdHash = createHash('sha256').update(jsonLd).digest('base64')

  return {
    name: 'sursangam-seo',
    transformIndexHtml(html) {
      const tags = [
        `<title>${escapeHtml(siteConfig.pageTitle)}</title>`,
        `<meta name="description" content="${escapeHtml(siteConfig.metaDescription)}" />`,
        '<meta name="robots" content="index, follow, max-image-preview:large" />',
        '<meta property="og:type" content="website" />',
        '<meta property="og:locale" content="en_IN" />',
        `<meta property="og:title" content="${escapeHtml(siteConfig.pageTitle)}" />`,
        `<meta property="og:description" content="${escapeHtml(siteConfig.metaDescription)}" />`,
        '<meta name="twitter:card" content="summary_large_image" />',
        `<meta name="twitter:title" content="${escapeHtml(siteConfig.pageTitle)}" />`,
        `<meta name="twitter:description" content="${escapeHtml(siteConfig.metaDescription)}" />`,
        ...(siteUrl
          ? [
              `<link rel="canonical" href="${siteUrl}/" />`,
              `<meta property="og:url" content="${siteUrl}/" />`,
              `<meta property="og:image" content="${siteUrl}/og-cover.jpg" />`,
              '<meta property="og:image:type" content="image/jpeg" />',
              '<meta property="og:image:width" content="1200" />',
              '<meta property="og:image:height" content="630" />',
              '<meta property="og:image:alt" content="Sursangam Academy music classes" />',
              `<meta name="twitter:image" content="${siteUrl}/og-cover.jpg" />`,
            ]
          : []),
        `<script type="application/ld+json">${jsonLd}</script>`,
      ].join('\n    ')

      if (!html.includes('<!-- SEO_HEAD -->') || !html.includes('__SEO_LD_HASH__')) {
        throw new Error('SEO HTML markers are missing from index.html.')
      }

      return html
        .replace('<!-- SEO_HEAD -->', tags)
        .replace('__SEO_LD_HASH__', `'sha256-${jsonLdHash}'`)
    },
    generateBundle() {
      const sitemapUrl = siteUrl
        ? `    <url><loc>${escapeXml(`${siteUrl}/`)}</loc></url>\n`
        : ''
      const sitemap = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        sitemapUrl.trimEnd(),
        '</urlset>',
        '',
      ].filter(Boolean).join('\n')
      const robots = [
        'User-agent: *',
        'Allow: /',
        ...(siteUrl ? [`Sitemap: ${siteUrl}/sitemap.xml`] : []),
        '',
      ].join('\n')

      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap })
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots })

      if (!siteUrl) {
        this.warn('VITE_SITE_URL is unset: sitemap.xml has no URLs and canonical/social image URLs are omitted. Set it to the production HTTPS origin before deployment.')
      }
    },
  }
}

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const siteUrl = getProductionSiteUrl(env.VITE_SITE_URL, command)

  return {
    plugins: [react(), seoPlugin(siteUrl)],
  }
})
