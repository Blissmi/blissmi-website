import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StickyNav } from './StickyNav'

describe('StickyNav', () => {
  it('calls onNavigate with the page id when a nav link is clicked', async () => {
    const onNavigate = vi.fn()
    render(<StickyNav currentPage="home" onNavigate={onNavigate} />)

    await userEvent.click(screen.getByRole('button', { name: 'Why Blissmi' }))

    expect(onNavigate).toHaveBeenCalledWith('why-blissmi')
  })

  it('calls onNavigate("home") when the logo is clicked', async () => {
    const onNavigate = vi.fn()
    render(<StickyNav currentPage="about" onNavigate={onNavigate} />)

    await userEvent.click(screen.getByRole('button', { name: 'BLiSSMi' }))

    expect(onNavigate).toHaveBeenCalledWith('home')
  })

  it('opens the "Who it\'s for" dropdown and navigates to a linked page', async () => {
    const onNavigate = vi.fn()
    render(<StickyNav currentPage="home" onNavigate={onNavigate} />)

    await userEvent.click(screen.getByRole('button', { name: /who it's for/i }))
    await userEvent.click(screen.getByRole('button', { name: /Health Insurers/i }))

    expect(onNavigate).toHaveBeenCalledWith('insurers')
  })

  it('toggles the mobile menu button aria state', async () => {
    render(<StickyNav currentPage="home" onNavigate={vi.fn()} />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await userEvent.click(toggle)

    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true')
  })
})
