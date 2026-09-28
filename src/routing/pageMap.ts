import { useOutletContext } from 'react-router-dom'

// page-id → URL path
// Keep public/sitemap.xml in sync with this list when adding/removing/renaming routes.
export const PAGE_TO_PATH: Record<string, string> = {
  home:             '/',
  'why-blissmi':    '/why-blissmi',
  'how-it-works':   '/how-it-works',
  'clinical-trust': '/clinical-trust',
  'how-to-start':   '/pilot',
  resources:        '/resources',
  about:            '/about',
  users:            '/members',
  customers:        '/employers',
  insurers:         '/insurers',
  brokers:          '/for/brokers-consultants',
  partners:         '/partners',
  hospitality:      '/hospitality',
  solutions:        '/solutions',
  outcomes:         '/outcomes',
  proof:            '/proof',
  'experience-labs':'/experience-labs',
  research:         '/research',
  contact:          '/contact',
  privacy:          '/privacy',
  terms:            '/terms',
}

// URL path → page-id (derived, for active-state detection)
export const PATH_TO_PAGE: Record<string, string> = Object.fromEntries(
  Object.entries(PAGE_TO_PATH).map(([id, path]) => [path, id])
)

export type NavCtx = { onNavigate: (pageId: string) => void }

export function useNavCtx() {
  return useOutletContext<NavCtx>()
}
