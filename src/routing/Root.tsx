import { Suspense } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { StickyNav as Navigation } from '../components/StickyNav'
import { Footer } from '../components/Footer'
import { SITE_GRAPH_JSON_LD } from '../seo/structuredData'
import { PAGE_TO_PATH, PATH_TO_PAGE, type NavCtx } from './pageMap'

export function Root() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const currentPage = PATH_TO_PAGE[pathname] ?? 'home'

  const handleNavigate = (pageId: string) => {
    const path = PAGE_TO_PATH[pageId] ?? '/'
    navigate(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Sitewide Organization/WebSite/SoftwareApplication graph. Lives here so
          every route carries it; pages add their own FAQPage markup on top. */}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(SITE_GRAPH_JSON_LD)}</script>
      </Helmet>
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="relative">
        <Suspense fallback={null}>
          <Outlet context={{ onNavigate: handleNavigate } satisfies NavCtx} />
        </Suspense>
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  )
}
