import { Navigate, useRoutes } from 'react-router-dom'

import { routesConfig } from '@/config'

import { publicRoutes } from './public'

export const AppRoutes = () => {
  const commonRoutes = [
    {
      path: '*',
      element: <Navigate to="/" />
    },
    {
      path: '/',
      element: <Navigate to={`/${routesConfig.public.home.path}`} />
    }
  ]

  const routes = useRoutes([...publicRoutes, ...commonRoutes])

  return <>{routes}</>
}
