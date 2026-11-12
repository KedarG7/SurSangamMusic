# SEO deployment notes

The site is a single-page React/Vite website. Its public content is rendered into
`dist/index.html` during the production build so crawlers and social preview bots
can read the page without running the client bundle.

## Required production setting

Set `VITE_SITE_URL` to the canonical HTTPS origin before building, with no path
or trailing slash, for example:

```sh
VITE_SITE_URL=https://your-real-domain.example npm run build
```

Replace the example with the academy's actual production domain. When this value
is missing, the build intentionally omits canonical and absolute social URLs and
emits an empty sitemap with a build warning rather than publishing localhost or
an invented address. The robots file is still emitted.

The build produces `dist/sitemap.xml`, `dist/robots.txt`, and the prerendered
`dist/index.html`. Deploy the contents of `dist/` at the domain root. The static
host must serve `404.html` with an HTTP 404 response for unknown paths; configure
that behavior if the host does not recognize the file automatically.
The CSP's `frame-ancestors` protection must also be configured as an HTTP
response header by the host; browsers ignore that directive when sent in a
meta element.

Full-resolution image originals are retained in `source-assets/` and are not
published. The optimized AVIF/JPEG derivatives referenced by the page are in
`public/`; keep new web-facing image references pointed at optimized public
files. Confirm permission before publishing the supplied student photo.

## Verify before launch

- Confirm the production domain in `VITE_SITE_URL`.
- Verify the phone, email, street address, map, and academy name in
  `src/data/siteConfig.js` against the business's current public details.
- Replace the clearly marked sample class timetable with approved days and
  times, or remove it.
- Replace stock gallery imagery with academy photography where available and
  confirm image usage rights.
- Add approved social profile URLs to `siteConfig.contact.socialLinks`.
- Submit the deployed sitemap in Google Search Console and Bing Webmaster
  Tools, then monitor indexing and Core Web Vitals. Code changes alone cannot
  verify indexing or rankings.
