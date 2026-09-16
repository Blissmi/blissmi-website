import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from './HomePage'
import { Root } from './routing/Root'
import { R } from './routing/PageRenderer'
import {
  AboutPage, UsersPage, ContactPage, CustomersPage, PartnersPage, ResearchPage,
  InsurersPage, TermsPage, PrivacyPage, WhyBlissmiPage, HowItWorksPage, ClinicalTrustPage,
  HowToStartPage, ResourcesPage, BrokersPage, HospitalityPage, SolutionsPage,
  OutcomesPage, ProofPage, ExperienceLabsPage,
} from './lazyPages'

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
