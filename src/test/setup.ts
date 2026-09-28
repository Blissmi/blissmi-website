import '@testing-library/jest-dom/vitest'

// jsdom doesn't implement these; motion/react's useInView/useScroll need them.
class MockObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
}

if (!window.IntersectionObserver) {
  window.IntersectionObserver = MockObserver as unknown as typeof IntersectionObserver
}

if (!window.ResizeObserver) {
  window.ResizeObserver = MockObserver as unknown as typeof ResizeObserver
}

if (!window.matchMedia) {
  window.matchMedia = (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }) as unknown as MediaQueryList
}

if (!window.HTMLElement.prototype.scrollIntoView) {
  window.HTMLElement.prototype.scrollIntoView = () => {}
}
