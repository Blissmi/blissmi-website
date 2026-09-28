# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start Vite dev server
npm run build        # Production build
npm run preview      # Preview production build locally
npm run type-check   # TypeScript type checking (tsc --noEmit)
npm run lint         # ESLint
npm test             # Run the Vitest suite once
npm run test:watch   # Run Vitest in watch mode
```

Tests live alongside the code they cover (`*.test.ts`/`*.test.tsx`), using Vitest + React Testing Library. `src/routes.test.tsx` renders every route and asserts it mounts without crashing — run it after any change that could affect a page's imports or top-level render. `src/test/setup.ts` stubs browser APIs jsdom doesn't implement but `motion/react` needs (`IntersectionObserver`, `ResizeObserver`, `matchMedia`, `scrollIntoView`).

## Git commit conventions

Do not add `Co-Authored-By: Claude` (or any Anthropic/Claude attribution) lines to commit messages or pull request descriptions in this repo.

## Architecture

This is a React 19 + TypeScript + Vite single-page application styled with Tailwind CSS v4. Routing uses `react-router-dom` (`createBrowserRouter`), configured in `src/routes.tsx`.

### Navigation pattern

`src/routing/pageMap.ts` defines the `PAGE_TO_PATH` map between legacy page-id strings (e.g. `'about'`) and URL paths (e.g. `/about`), plus the `useNavCtx` hook. `src/routing/Root.tsx`'s `Root` layout component reads the current route via `useLocation`/`useNavigate` and derives a `currentPage` id, then renders `StickyNav` and `Footer` around an `<Outlet>`. Individual page components still take the legacy `{ currentPage, onNavigate }` props — a thin `R` wrapper in `src/routing/PageRenderer.tsx` bridges router context into that shape, so page components themselves didn't need to change during the router migration. `src/routes.tsx` wires these into the actual route tree and exports `router`. Lazy imports for every non-home page live in `src/lazyPages.ts` (kept separate so `routes.tsx` has no component exports of its own, which would otherwise break Fast Refresh). When adding a page, register it in `PAGE_TO_PATH`, add its lazy import, register it in the `router` route list, add it (eagerly imported) to `src/routes.server.tsx`, and keep `public/sitemap.xml` in sync.

### Prerendering (SEO/social-crawler support)

This is still a client-rendered SPA at runtime, but `npm run build` also prerenders every route to static HTML so crawlers that don't execute JavaScript (social share bots, some SEO auditing tools) see real content and each page's own `<title>`/meta tags instead of one generic shell. This is a **post-build step**, not a live SSR server — nothing changes about how the app runs in the browser or in `npm run dev`.

- `src/routes.server.tsx` — a server-only mirror of `routes.tsx`'s route table, with every page imported eagerly instead of via `lazyPages.ts`. `renderToString()` can't wait on `React.lazy()`'s Suspense boundary, so this needs plain synchronous components. Keep it in sync with `routes.tsx` when adding/removing a page.
- `src/entry-server.tsx` — exports `render(url)`, which resolves the matched route with `react-router`'s `createStaticHandler`/`createStaticRouter` and renders it with `renderToString`. Also re-exports `PAGE_TO_PATH` so the prerender script has one bundle to import.
- `scripts/prerender.mjs` — for every path in `PAGE_TO_PATH`, calls `render()`, splits the hoisted `<title>`/`<meta>`/`<link>` tags out of the result (React 19 automatically hoists these to the front of `renderToString()`'s output — see note below), and writes `dist/<path>/index.html` by merging them into the built `dist/index.html` template.
- `npm run build` runs: `vite build` (client bundle) → `vite build --ssr src/entry-server.tsx --outDir dist-ssr` (a Node-only SSR bundle, built fresh each time so asset URLs match the client build's hashes) → `node scripts/prerender.mjs` (writes the static files, then deletes `dist-ssr/`).

**Per-page metadata:** every routed page renders `<PageSeo>` (`src/seo/PageSeo.tsx`) near the top of its JSX, which wraps `<Helmet>` and emits `<title>`, description, canonical, Open Graph, Twitter card and any page-specific JSON-LD. New pages must do the same. `scripts/prerender.mjs` only strips the template's default tags for a route if that route's render actually produced its own `<title>`, so a page that somehow lacks `<PageSeo>` still keeps the sitewide fallback rather than ending up with no title at all.

Note on the React 19/`react-helmet-async` interaction: `react-helmet-async` v3 detects React 19 and, under it, `<Helmet>` just renders plain `<title>`/`<meta>`/`<script>` elements in place rather than using its old context-based SSR extraction — React 19's own server renderer hoists the hoistable ones (title/meta/link) to the front of `renderToString()`'s output itself. A `<script type="application/ld+json">` (used for FAQ schema, etc.) is *not* hoisted and stays inline in the body, which is fine — schema.org JSON-LD is valid anywhere in the document.

### Page structure

- `src/routes.tsx` — route tree, exports `router`
- `src/routing/` — `pageMap.ts` (`PAGE_TO_PATH`, `useNavCtx`), `Root.tsx` (layout), `PageRenderer.tsx` (legacy-props bridge)
- `src/lazyPages.ts` — `React.lazy()` imports for every routed page except Home
- `src/routes.server.tsx`, `src/entry-server.tsx`, `scripts/prerender.mjs` — build-time-only prerendering, see "Prerendering" below
- `src/App.tsx` — mounts `RouterProvider`
- `src/HomePage.tsx` — home page composition (loaded eagerly, not lazy, since it's the most common landing page)
- `src/pages/` — all other pages (AboutPage, UsersPage, ContactPage, CustomersPage, PartnersPage, ResearchPage, InsurersPage, HospitalityPage, etc.)
- `src/components/` — shared components used across multiple pages (currently just `StickyNav` and `Footer`, both rendered from `src/routing/Root.tsx`)
- `src/seo/` — SEO plumbing, see "SEO and structured data" below

Note: there is no `src/home/` directory — an earlier design iteration had one, but it was superseded when the pages were rebuilt to match a newer Figma design, and the orphaned files were removed. Page-specific sections now live inline inside their page component under `src/pages/` (or `src/HomePage.tsx` for the home page).

### SEO and structured data

`src/seo/` holds everything that shapes how the site appears to search engines and AI answer engines:

- `siteMeta.ts` — `SITE_URL`, `SITE_NAME`, `SOCIAL_PROFILES` (schema.org `sameAs`), `absoluteUrl()`. Keep in sync with `index.html`'s fallback tags and `public/sitemap.xml`.
- `PageSeo.tsx` — the per-page `<head>` component described under "Prerendering". Takes `title`, `description`, `path` (router path, used for the canonical URL and `og:url`), optional `ogTitle`/`ogDescription`, and optional `jsonLd`.
- `structuredData.ts` — the sitewide `Organization`/`WebSite`/`SoftwareApplication` graph (rendered once from `src/routing/Root.tsx`, so every route carries it) and the `faqJsonLd()` helper.

**Rules for structured data and SEO copy** (set by the team lead, and encoded as comments in `structuredData.ts` — don't quietly relax them):

1. Only describe capabilities the product offers **today**. Every claim in the markup must be traceable to copy that already ships on a page.
2. Never emit `aggregateRating` or `review` markup. Ratings have to come from real customers on the platforms that collect them (G2, Capterra), not from self-declared markup — Google treats self-serving review markup as spam.
3. Never invent a `price` or `offers` value. Engagements are scoped per client.
4. FAQ answers must be visible on the page, not schema-only. Pair `faqJsonLd(FAQ_ITEMS)` with `<FaqSection items={FAQ_ITEMS} />` (`src/ui/FaqSection.tsx`) driven by the same array.

### Styling approach

Components use **inline styles** extensively rather than Tailwind class names — this is intentional. Tailwind is used in some components but inline styles dominate for layout, spacing, colours, and responsive behaviour. Don't convert inline styles to Tailwind classes unless asked.

Responsive breakpoints are detected with the `useResponsive` hook (`src/hooks/useResponsive.ts`) — mobile ≤ 640px, tablet 641–1024px.

### UI primitives

`src/ui/` contains shadcn-style primitives built on Radix UI (`Button`, `Card`), plus a few custom pieces (`Btn`, `Eyebrow`, animation wrappers in `animations.tsx`, and the shared `theme.ts` color/easing constants — GOLD, GREEN, CREAM, EASE). Prefer importing colors from `theme.ts` over hardcoding hex values in page components. `src/figma/ImageWithFallback.tsx` wraps `<img>` with a fallback SVG on error — use it for any user-facing images instead of a raw `<img>`.

### Animation

Uses the `motion` package (Framer Motion v12) for scroll-driven and entrance animations.
