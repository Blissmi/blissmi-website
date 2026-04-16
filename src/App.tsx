import React, { useState, useEffect } from 'react'
import { HomePage } from './HomePage'
import { AboutPage } from './pages/AboutPage'
import { UsersPage } from './pages/UsersPage'
import { ContactPage } from './pages/ContactPage'
import { CustomersPage } from './pages/CustomersPage'
import { PartnersPage } from './pages/PartnersPage'
import { ResearchPage } from './pages/ResearchPage'
import { InsurersPage } from './pages/InsurersPage'
import { HospitalityPage } from './pages/HospitalityPage'
import { TermsPage } from './pages/TermsPage'
import { PrivacyPage } from './pages/PrivacyPage'

// Maps page keys to URL paths and back
const PAGE_TO_PATH: Record<string, string> = {
  home:        '/',
  about:       '/about',
  users:       '/members',
  customers:   '/employers',
  insurers:    '/insurers',
  hospitality: '/hospitality',
  partners:    '/partners',
  research:    '/research',
  contact:     '/contact',
  terms:       '/terms',
  privacy:     '/privacy',
}

const PATH_TO_PAGE: Record<string, string> = Object.fromEntries(
  Object.entries(PAGE_TO_PATH).map(([page, path]) => [path, page])
)

function pageFromPathname(pathname: string): string {
  return PATH_TO_PAGE[pathname] ?? 'home'
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>(
    pageFromPathname(window.location.pathname)
  )

  // Keep state in sync when user navigates with the browser back/forward buttons
  useEffect(() => {
    const onPopState = () => setCurrentPage(pageFromPathname(window.location.pathname))
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = (page: string) => {
    const path = PAGE_TO_PATH[page] ?? '/'
    window.history.pushState(null, '', path)
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (currentPage === 'users') {
    return <UsersPage currentPage={currentPage} onNavigate={navigate} />
  }
  if (currentPage === 'about') {
    return <AboutPage currentPage={currentPage} onNavigate={navigate} />
  }
  if (currentPage === 'partners') {
    return <PartnersPage currentPage={currentPage} onNavigate={navigate} />
  }
  if (currentPage === 'research') {
    return <ResearchPage currentPage={currentPage} onNavigate={navigate} />
  }
  if (currentPage === 'contact') {
    return <ContactPage currentPage={currentPage} onNavigate={navigate} />
  }

  if (currentPage === 'customers') {
    return <CustomersPage currentPage={currentPage} onNavigate={navigate} />
  }
  if (currentPage === 'insurers') {
    return <InsurersPage currentPage={currentPage} onNavigate={navigate} />
  }
  if (currentPage === 'hospitality') {
    return <HospitalityPage currentPage={currentPage} onNavigate={navigate} />
  }
  if (currentPage === 'terms') {
    return <TermsPage currentPage={currentPage} onNavigate={navigate} />
  }
  if (currentPage === 'privacy') {
    return <PrivacyPage currentPage={currentPage} onNavigate={navigate} />
  }

  return <HomePage currentPage={currentPage} onNavigate={navigate} />
}
