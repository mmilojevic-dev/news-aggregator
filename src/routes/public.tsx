import { ROUTES } from '@/config'
import { lazyImport } from '@/utils'

const { LayoutProvider } = lazyImport(
  () => import('@/providers'),
  'LayoutProvider'
)
const { Articles } = lazyImport(() => import('@/features/articles'), 'Articles')

export const publicRoutes = [
  {
    path: ROUTES.PUBLIC.NEWS.PATH,
    element: <LayoutProvider />,
    children: [{ path: ROUTES.PUBLIC.ARTICLES.PATH, element: <Articles /> }]
  }
]
