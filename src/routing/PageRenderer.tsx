import { useNavCtx } from './pageMap'

type LegacyPageProps = { onNavigate: (pageId: string) => void; currentPage: string }

// Thin wrapper: pulls onNavigate from outlet context and passes {onNavigate, currentPage} to legacy page components
export function R({ Page, pageId }: { Page: React.ComponentType<LegacyPageProps>; pageId: string }) {
  const { onNavigate } = useNavCtx()
  return <Page onNavigate={onNavigate} currentPage={pageId} />
}
