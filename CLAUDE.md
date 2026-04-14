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

## Architecture

This is a React 19 + TypeScript + Vite single-page application styled with Tailwind CSS v4. There is **no router** — navigation is handled entirely via a `currentPage` string state in `App.tsx`, with a `navigate(page: string)` callback passed down the tree.

### Navigation pattern

`App.tsx` holds `currentPage` state and renders one of the page components based on its value. Every page component and the `StickyNav` receives `{ currentPage, onNavigate }` props. `StickyNav` uses `isPageVisible()` to filter which nav links render (controlled by feature flags).

### Page structure

- `src/App.tsx` — root router (state-based)
- `src/HomePage.tsx` — home page composition
- `src/pages/` — all other pages (AboutPage, UsersPage, ContactPage, CustomersPage, PartnersPage, ResearchPage, InsurersPage, HospitalityPage)
- `src/home/` — sections used exclusively on the home page and about page (MissionSection, WhyWeExist, PillarsAccordion, etc.)
- `src/components/` — shared components used across multiple pages (StickyNav, Footer, CTASection, etc.)

### Styling approach

Components use **inline styles** extensively rather than Tailwind class names — this is intentional. Tailwind is used in some components but inline styles dominate for layout, spacing, colours, and responsive behaviour. Don't convert inline styles to Tailwind classes unless asked.

Responsive breakpoints are detected with the `useResponsive` hook (`src/hooks/useResponsive.ts`) — mobile ≤ 640px, tablet 641–1024px. There is also a legacy `useIsMobile` utility in `src/utils/responsiveStyles.ts` that uses `window.innerWidth <= 768` (not reactive).

### Feature flags

`src/config/featureFlags.ts` controls which pages appear in the nav. Defaults are set in `DEFAULT_VISIBLE_PAGES`. Override at build/run time via the `VITE_VISIBLE_PAGES` environment variable (comma-separated page keys, e.g. `VITE_VISIBLE_PAGES=home,users,contact`).

### UI primitives

`src/ui/` contains shadcn-style primitives (Button, Input, Label, Select, Textarea, Card) built on Radix UI. `src/figma/ImageWithFallback.tsx` wraps `<img>` with a fallback SVG on error — use it for any user-facing images.

### Animation

Uses the `motion` package (Framer Motion v12) for scroll-driven and entrance animations.
