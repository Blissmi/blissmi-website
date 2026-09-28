import { describe, it, expect, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useResponsive } from './useResponsive'

function setViewportWidth(width: number) {
  window.innerWidth = width
  window.dispatchEvent(new Event('resize'))
}

describe('useResponsive', () => {
  afterEach(() => {
    setViewportWidth(1024)
  })

  it('reports mobile at widths <= 640px', () => {
    setViewportWidth(375)
    const { result } = renderHook(() => useResponsive())
    act(() => setViewportWidth(375))

    expect(result.current.isMobile).toBe(true)
    expect(result.current.isTablet).toBe(false)
    expect(result.current.isDesktop).toBe(false)
  })

  it('reports tablet between 641px and 1024px', () => {
    const { result } = renderHook(() => useResponsive())
    act(() => setViewportWidth(800))

    expect(result.current.isMobile).toBe(false)
    expect(result.current.isTablet).toBe(true)
    expect(result.current.isDesktop).toBe(false)
  })

  it('reports desktop above 1024px', () => {
    const { result } = renderHook(() => useResponsive())
    act(() => setViewportWidth(1440))

    expect(result.current.isMobile).toBe(false)
    expect(result.current.isTablet).toBe(false)
    expect(result.current.isDesktop).toBe(true)
  })
})
