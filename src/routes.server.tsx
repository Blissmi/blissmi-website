import { HomePage } from './HomePage'
import { Root } from './routing/Root'
import { R } from './routing/PageRenderer'
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

// Server-only mirror of routes.tsx: same route table, but with every page
// imported eagerly instead of via lazyPages.ts. renderToString() cannot wait
// on React.lazy()'s Suspense boundary, so the prerender script needs plain
// synchronous components. Keep this list in sync with routes.tsx and
// PAGE_TO_PATH in routing/pageMap.ts when adding or removing a page.
export const routeConfig = [
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
]
