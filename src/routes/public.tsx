import { routesConfig } from '@/config'
import { lazyImport } from '@/utils'

const { LayoutProvider } = lazyImport(
  () => import('@/providers'),
  'LayoutProvider'
)
const { Articles } = lazyImport(() => import('@/features'), 'Articles')

export const publicRoutes = [
  {
    path: routesConfig.public.home.path,
    element: <LayoutProvider />,
    children: [
      { path: routesConfig.public.articles.path, element: <Articles /> }
    ]
  }
]
