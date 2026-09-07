import { createBrowserRouter, Outlet, useNavigate, useLocation, useOutletContext } from 'react-router-dom'
import { StickyNav as Navigation } from './components/StickyNav'
import { Footer } from './components/Footer'
import { HomePage } from './HomePage'
import { AboutPage } from './pages/AboutPage'
import { UsersPage } from './pages/UsersPage'
import { ContactPage } from './pages/ContactPage'
import { CustomersPage } from './pages/CustomersPage'
import { PartnersPage } from './pages/PartnersPage'
import { ResearchPage } from './pages/ResearchPage'
import { InsurersPage } from './pages/InsurersPage'
import { TermsPage } from './pages/TermsPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { WhyBlissmiPage } from './pages/WhyBlissmiPage'
import { HowItWorksPage } from './pages/HowItWorksPage'
import { ClinicalTrustPage } from './pages/ClinicalTrustPage'
import { HowToStartPage } from './pages/HowToStartPage'
import { ResourcesPage } from './pages/ResourcesPage'
import { BrokersPage } from './pages/BrokersPage'
import { HospitalityPage } from './pages/HospitalityPage'
import { SolutionsPage } from './pages/SolutionsPage'
import { OutcomesPage } from './pages/OutcomesPage'
import { ProofPage } from './pages/ProofPage'
import { ExperienceLabsPage } from './pages/ExperienceLabsPage'

// page-id → URL path
export const PAGE_TO_PATH: Record<string, string> = {
  home:             '/',
  'why-blissmi':    '/why-blissmi',
  'how-it-works':   '/how-it-works',
  'clinical-trust': '/clinical-trust',
  'how-to-start':   '/pilot',
  resources:        '/resources',
  about:            '/about',
  users:            '/members',
  customers:        '/employers',
  insurers:         '/insurers',
  brokers:          '/for/brokers-consultants',
  partners:         '/partners',
  hospitality:      '/hospitality',
  solutions:        '/solutions',
  outcomes:         '/outcomes',
  proof:            '/proof',
  'experience-labs':'/experience-labs',
  research:         '/research',
  contact:          '/contact',
  privacy:          '/privacy',
  terms:            '/terms',
}

// URL path → page-id (derived, for active-state detection)
const PATH_TO_PAGE: Record<string, string> = Object.fromEntries(
  Object.entries(PAGE_TO_PATH).map(([id, path]) => [path, id])
)

type NavCtx = { onNavigate: (pageId: string) => void }

function Root() {
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
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="relative">
        <Outlet context={{ onNavigate: handleNavigate } satisfies NavCtx} />
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  )
}

export function useNavCtx() {
  return useOutletContext<NavCtx>()
}

// Thin wrapper: pulls onNavigate from outlet context and passes {onNavigate, currentPage} to legacy page components
function R({ Page, pageId }: { Page: React.ComponentType<any>; pageId: string }) {
  const { onNavigate } = useNavCtx()
  return <Page onNavigate={onNavigate} currentPage={pageId} />
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true,                       element: <R Page={HomePage} pageId="home" /> },
      { path: 'why-blissmi',               element: <R Page={WhyBlissmiPage} pageId="why-blissmi" /> },
      { path: 'how-it-works',              element: <R Page={HowItWorksPage} pageId="how-it-works" /> },
      { path: 'clinical-trust',            element: <R Page={ClinicalTrustPage} pageId="clinical-trust" /> },
      { path: 'pilot',                     element: <R Page={HowToStartPage} pageId="how-to-start" /> },
      { path: 'resources',                 element: <R Page={ResourcesPage} pageId="resources" /> },
      { path: 'about',                     element: <R Page={AboutPage} pageId="about" /> },
      { path: 'members',                   element: <R Page={UsersPage} pageId="users" /> },
      { path: 'employers',                 element: <R Page={CustomersPage} pageId="customers" /> },
      { path: 'insurers',                  element: <R Page={InsurersPage} pageId="insurers" /> },
      { path: 'for/brokers-consultants',   element: <R Page={BrokersPage} pageId="brokers" /> },
      { path: 'partners',                  element: <R Page={PartnersPage} pageId="partners" /> },
      { path: 'hospitality',               element: <R Page={HospitalityPage} pageId="hospitality" /> },
      { path: 'solutions',                 element: <R Page={SolutionsPage} pageId="solutions" /> },
      { path: 'outcomes',                  element: <R Page={OutcomesPage} pageId="outcomes" /> },
      { path: 'proof',                     element: <R Page={ProofPage} pageId="proof" /> },
      { path: 'experience-labs',           element: <R Page={ExperienceLabsPage} pageId="experience-labs" /> },
      { path: 'research',                  element: <R Page={ResearchPage} pageId="research" /> },
      { path: 'contact',                   element: <R Page={ContactPage} pageId="contact" /> },
      { path: 'privacy',                   element: <R Page={PrivacyPage} pageId="privacy" /> },
      { path: 'terms',                     element: <R Page={TermsPage} pageId="terms" /> },
      { path: '*',                         element: <R Page={HomePage} pageId="home" /> },
    ],
  },
])
