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

`src/routing/pageMap.ts` defines the `PAGE_TO_PATH` map between legacy page-id strings (e.g. `'about'`) and URL paths (e.g. `/about`), plus the `useNavCtx` hook. `src/routing/Root.tsx`'s `Root` layout component reads the current route via `useLocation`/`useNavigate` and derives a `currentPage` id, then renders `StickyNav` and `Footer` around an `<Outlet>`. Individual page components still take the legacy `{ currentPage, onNavigate }` props — a thin `R` wrapper in `src/routing/PageRenderer.tsx` bridges router context into that shape, so page components themselves didn't need to change during the router migration. `src/routes.tsx` wires these into the actual route tree and exports `router`. Lazy imports for every non-home page live in `src/lazyPages.ts` (kept separate so `routes.tsx` has no component exports of its own, which would otherwise break Fast Refresh). When adding a page, register it in `PAGE_TO_PATH`, add its lazy import, and register it in the `router` route list, and keep `public/sitemap.xml` in sync.

### Page structure

- `src/routes.tsx` — route tree, exports `router`
- `src/routing/` — `pageMap.ts` (`PAGE_TO_PATH`, `useNavCtx`), `Root.tsx` (layout), `PageRenderer.tsx` (legacy-props bridge)
- `src/lazyPages.ts` — `React.lazy()` imports for every routed page except Home
- `src/App.tsx` — mounts `RouterProvider`
- `src/HomePage.tsx` — home page composition (loaded eagerly, not lazy, since it's the most common landing page)
- `src/pages/` — all other pages (AboutPage, UsersPage, ContactPage, CustomersPage, PartnersPage, ResearchPage, InsurersPage, HospitalityPage, etc.)
- `src/components/` — shared components used across multiple pages (currently just `StickyNav` and `Footer`, both rendered from `src/routing/Root.tsx`)

Note: there is no `src/home/` directory — an earlier design iteration had one, but it was superseded when the pages were rebuilt to match a newer Figma design, and the orphaned files were removed. Page-specific sections now live inline inside their page component under `src/pages/` (or `src/HomePage.tsx` for the home page).

### Styling approach

Components use **inline styles** extensively rather than Tailwind class names — this is intentional. Tailwind is used in some components but inline styles dominate for layout, spacing, colours, and responsive behaviour. Don't convert inline styles to Tailwind classes unless asked.

Responsive breakpoints are detected with the `useResponsive` hook (`src/hooks/useResponsive.ts`) — mobile ≤ 640px, tablet 641–1024px.

### UI primitives

`src/ui/` contains shadcn-style primitives built on Radix UI (`Button`, `Card`), plus a few custom pieces (`Btn`, `Eyebrow`, animation wrappers in `animations.tsx`, and the shared `theme.ts` color/easing constants — GOLD, GREEN, CREAM, EASE). Prefer importing colors from `theme.ts` over hardcoding hex values in page components. `src/figma/ImageWithFallback.tsx` wraps `<img>` with a fallback SVG on error — use it for any user-facing images instead of a raw `<img>`.

### Animation

Uses the `motion` package (Framer Motion v12) for scroll-driven and entrance animations.
