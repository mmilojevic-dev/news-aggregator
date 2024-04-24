import { routesConfig } from '@/config'
import { lazyImport } from '@/utils'

const { LayoutProvider } = lazyImport(
  () => import('@/providers'),
  'LayoutProvider'
)
const { Articles } = lazyImport(() => import('@/features'), 'Articles')
const { Preferences } = lazyImport(() => import('@/features'), 'Preferences')

export const publicRoutes = [
  {
    path: routesConfig.public.feed.path,
    element: <LayoutProvider />,
    children: [
      { path: routesConfig.public.articles.path, element: <Articles /> },
      { path: routesConfig.public.preferences.path, element: <Preferences /> }
    ]
  }
]
