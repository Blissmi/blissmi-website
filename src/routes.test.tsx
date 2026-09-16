import { describe, it, expect } from 'vitest'
import { render, waitFor } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { PAGE_TO_PATH } from './routing/pageMap'

describe('routes', () => {
  for (const [pageId, path] of Object.entries(PAGE_TO_PATH)) {
    it(`renders "${pageId}" (${path}) without crashing`, async () => {
      const memoryRouter = createMemoryRouter(router.routes, { initialEntries: [path] })
      const { container } = render(<RouterProvider router={memoryRouter} />)

      await waitFor(() => {
        expect(container.querySelector('nav')).toBeInTheDocument()
        expect(container.querySelector('footer')).toBeInTheDocument()
      })
    })
  }

  it('falls back to the home page for an unknown path', async () => {
    const memoryRouter = createMemoryRouter(router.routes, { initialEntries: ['/this-page-does-not-exist'] })
    const { findByText } = render(<RouterProvider router={memoryRouter} />)

    expect(await findByText(/Better\s*health\./i)).toBeInTheDocument()
  })
})
