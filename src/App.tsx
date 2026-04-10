import React, { useState } from 'react'
import { HomePage } from './HomePage'
import { AboutPage } from './pages/AboutPage'
import { UsersPage } from './pages/UsersPage'
import { ContactPage } from './pages/ContactPage'
import { CustomersPage } from './pages/CustomersPage'
import { PartnersPage } from './pages/PartnersPage'
import { ResearchPage } from './pages/ResearchPage'
import { InsurersPage } from './pages/InsurersPage'
import { HospitalityPage } from './pages/HospitalityPage'

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home')

  const navigate = (page: string) => {
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

  return <HomePage currentPage={currentPage} onNavigate={navigate} />
}
