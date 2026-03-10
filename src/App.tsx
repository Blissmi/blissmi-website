import React, { useState } from 'react'
import { HomePage } from './HomePage'
import { UsersPage } from './pages/UsersPage'
import { ContactPage } from './pages/ContactPage'
<<<<<<< HEAD
=======
import { CustomersPage } from './pages/CustomersPage'
import { PartnersPage } from './pages/PartnersPage'
import { ResearchPage } from './pages/ResearchPage'
>>>>>>> feature/components-refactor

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home')

  const navigate = (page: string) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (currentPage === 'users') {
    return <UsersPage currentPage={currentPage} onNavigate={navigate} />
  }
<<<<<<< HEAD

=======
  if (currentPage === 'partners') {
    return <PartnersPage currentPage={currentPage} onNavigate={navigate} />
  }
  if (currentPage === 'research') {
    return <ResearchPage currentPage={currentPage} onNavigate={navigate} />
  }
>>>>>>> feature/components-refactor
  if (currentPage === 'contact') {
    return <ContactPage currentPage={currentPage} onNavigate={navigate} />
  }

<<<<<<< HEAD
=======
  if (currentPage === 'customers') {
    return <CustomersPage currentPage={currentPage} onNavigate={navigate} />
  }

>>>>>>> feature/components-refactor
  return <HomePage currentPage={currentPage} onNavigate={navigate} />
}
