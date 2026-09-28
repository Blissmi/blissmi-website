// Post-build step: renders every route to static HTML so crawlers that don't
// execute JavaScript (social share bots, some SEO tools) see real content and
// per-page <title>/meta/JSON-LD instead of the generic client-only shell.
//
// Loads the *built* SSR bundle (dist-server/entry-server.js), not the raw
// source via vite.ssrLoadModule() — dev-mode module resolution returns
// unhashed /src/... asset paths that don't exist in the production dist/
// output, which would silently 404 every image on the prerendered pages.
// Run after `vite build` and `vite build --ssr` — see package.json's "build".
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const distDir = path.join(root, 'dist')
const serverDir = path.join(root, 'dist-ssr')

const { render, PAGE_TO_PATH } = await import(path.join(serverDir, 'entry-server.js'))

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')

// React 19 hoists <title>/<meta>/<link> tags rendered anywhere in the tree to
// the very front of renderToString()'s output (verified empirically — it's
// how react-helmet-async's React 19 support works: it just renders native
// tags and lets React do the hoisting). Split those off; everything else
// (including the JSON-LD <script>, which React does NOT hoist but is valid
// schema.org anywhere in the body) is real page markup for #root.
function splitHoistedHead(html) {
  const HOISTABLE = /^(<title>.*?<\/title>|<meta\b[^>]*\/>|<link\b[^>]*\/>)/s
  let head = ''
  let body = html
  let match
  while ((match = body.match(HOISTABLE))) {
    head += match[0]
    body = body.slice(match[0].length)
  }
  return { head, body }
}

for (const urlPath of new Set(Object.values(PAGE_TO_PATH))) {
  const { html } = await render(urlPath)
  const { head, body } = splitHoistedHead(html)

  // Every routed page currently renders <PageSeo>, so this is normally true.
  // A page that doesn't must keep the sitewide defaults from the template —
  // stripping them unconditionally would leave it with no <title> at all,
  // which is worse than the shared fallback.
  const hasOwnTitle = /<title>/.test(head)

  let page = template
  if (hasOwnTitle) {
    page = page
      .replace(/\s*<title>[^<]*<\/title>/, '')
      .replace(/\s*<meta name="description"[^>]*>/, '')
      .replace(/\s*<meta property="og:title"[^>]*>/, '')
      .replace(/\s*<meta property="og:description"[^>]*>/, '')
  }

  page = page
    .replace('<!-- Apollo website tracker -->', `${head}\n    <!-- Apollo website tracker -->`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)

  const outDir = urlPath === '/' ? distDir : path.join(distDir, urlPath)
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), page)
  console.log(`prerendered ${urlPath}`)
}

fs.rmSync(serverDir, { recursive: true, force: true })
