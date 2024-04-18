import { ROUTES } from '@/config'
import { lazyImport } from '@/utils'

const { LayoutProvider } = lazyImport(
  () => import('@/providers'),
  'LayoutProvider'
)
const { Feed } = lazyImport(() => import('@/features/feed'), 'Feed')

export const publicRoutes = [
  {
    path: ROUTES.PUBLIC.NEWS.PATH,
    element: <LayoutProvider />,
    children: [{ path: ROUTES.PUBLIC.FEED.PATH, element: <Feed /> }]
  }
]
