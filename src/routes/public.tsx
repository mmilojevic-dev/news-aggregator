import { ROUTES } from '@/config'
import { lazyImport } from '@/utils'

const { LayoutProvider } = lazyImport(
  () => import('@/providers'),
  'LayoutProvider'
)
const { Posts } = lazyImport(() => import('@/features/posts'), 'Posts')

export const publicRoutes = [
  {
    path: ROUTES.PUBLIC.NEWS.PATH,
    element: <LayoutProvider />,
    children: [{ path: ROUTES.PUBLIC.FEED.PATH, element: <Posts /> }]
  }
]
