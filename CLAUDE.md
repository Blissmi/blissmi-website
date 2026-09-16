# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start Vite dev server
npm run build        # Production build
npm run preview      # Preview production build locally
npm run type-check   # TypeScript type checking (tsc --noEmit)
```

No test suite is configured (`npm test` exits with an error).

## Git commit conventions

Do not add `Co-Authored-By: Claude` (or any Anthropic/Claude attribution) lines to commit messages or pull request descriptions in this repo.

## Architecture

This is a React 19 + TypeScript + Vite single-page application styled with Tailwind CSS v4. Routing uses `react-router-dom` (`createBrowserRouter`), configured in `src/routes.tsx`.

### Navigation pattern

`src/routes.tsx` defines the route tree and a `PAGE_TO_PATH` map between legacy page-id strings (e.g. `'about'`) and URL paths (e.g. `/about`). Its `Root` layout component reads the current route via `useLocation`/`useNavigate` and derives a `currentPage` id, then renders `StickyNav` and `Footer` around an `<Outlet>`. Individual page components still take the legacy `{ currentPage, onNavigate }` props — a thin `R` wrapper in `routes.tsx` bridges router context into that shape, so page components themselves didn't need to change during the router migration. When adding a page, register it in both `PAGE_TO_PATH` and the `router` route list, and keep `public/sitemap.xml` in sync.

### Page structure

- `src/routes.tsx` — router configuration (route tree, `PAGE_TO_PATH`, `Root` layout)
- `src/App.tsx` — mounts `RouterProvider`
- `src/HomePage.tsx` — home page composition
- `src/pages/` — all other pages (AboutPage, UsersPage, ContactPage, CustomersPage, PartnersPage, ResearchPage, InsurersPage, HospitalityPage, etc.)
- `src/home/` — sections used exclusively on the home page and about page (MissionSection, WhyWeExist, PillarsAccordion, etc.)
- `src/components/` — shared components used across multiple pages (StickyNav, Footer, CTASection, etc.)

### Styling approach

Components use **inline styles** extensively rather than Tailwind class names — this is intentional. Tailwind is used in some components but inline styles dominate for layout, spacing, colours, and responsive behaviour. Don't convert inline styles to Tailwind classes unless asked.

Responsive breakpoints are detected with the `useResponsive` hook (`src/hooks/useResponsive.ts`) — mobile ≤ 640px, tablet 641–1024px. There is also a legacy `useIsMobile` utility in `src/utils/responsiveStyles.ts` that uses `window.innerWidth <= 768` (not reactive).

### UI primitives

`src/ui/` contains shadcn-style primitives (Button, Input, Label, Select, Textarea, Card) built on Radix UI. `src/figma/ImageWithFallback.tsx` wraps `<img>` with a fallback SVG on error — use it for any user-facing images.

### Animation

Uses the `motion` package (Framer Motion v12) for scroll-driven and entrance animations.
