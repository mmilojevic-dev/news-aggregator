import { Navigate, useRoutes } from 'react-router-dom'

import { ROUTES } from '@/config'

import { publicRoutes } from './public'

export const AppRoutes = () => {
  const commonRoutes = [
    {
      path: '*',
      element: <Navigate to="/" />
    },
    {
      path: '/',
      element: <Navigate to={`/${ROUTES.PUBLIC.NEWS.PATH}`} />
    }
  ]

  const routes = useRoutes([...publicRoutes, ...commonRoutes])

  return <>{routes}</>
}
