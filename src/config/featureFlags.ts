// Simple feature-flagging for which pages should appear in the UI.
// Configure visible pages via Vite env `VITE_VISIBLE_PAGES` (comma-separated),
// e.g. VITE_VISIBLE_PAGES=home,users,contact

export const DEFAULT_VISIBLE_PAGES = ['home', 'about', 'users', 'customers', 'insurers'] as const;

const env = typeof import.meta !== 'undefined' ? (import.meta as any).env : {};
const fromEnv = env && typeof env.VITE_VISIBLE_PAGES === 'string' && env.VITE_VISIBLE_PAGES.length
  ? String(env.VITE_VISIBLE_PAGES).split(',').map(s => s.trim()).filter(Boolean)
  : null;

export const VISIBLE_PAGES: string[] = fromEnv && fromEnv.length ? fromEnv : Array.from(DEFAULT_VISIBLE_PAGES);

export function isPageVisible(page: string) {
  return VISIBLE_PAGES.includes(page);
}

export default {
  VISIBLE_PAGES,
  isPageVisible,
};
