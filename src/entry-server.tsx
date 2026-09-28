// This is a Node-only SSR entry (see scripts/prerender.mjs) — it's never
// loaded by the Vite dev server, so react-refresh's "only export components"
// rule doesn't apply to this file.
/* eslint-disable react-refresh/only-export-components */
import { renderToString } from 'react-dom/server'
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import { routeConfig } from './routes.server'

export { PAGE_TO_PATH } from './routing/pageMap'

// react-helmet-async v3 detects React 19 and, under it, <Helmet> just renders
// plain <title>/<meta>/<script> elements in place — React 19's own SSR
// renderer hoists the hoistable ones (title/meta/link) to the front of the
// renderToString() output itself. So there's no server context to read here;
// the caller (scripts/prerender.mjs) splits the hoisted head tags out of the
// returned html string instead.
export async function render(url: string) {
  const handler = createStaticHandler(routeConfig)
  const context = await handler.query(new Request(`http://localhost${url}`))

  if (context instanceof Response) {
    throw context
  }

  const router = createStaticRouter(handler.dataRoutes, context)

  const html = renderToString(
    <HelmetProvider>
      <StaticRouterProvider router={router} context={context} />
    </HelmetProvider>
  )

  return { html }
}
