import React from 'react'

import { NavLink } from '@/components'
import { ROUTES } from '@/config'

export const Navigation: React.FC = () => {
  const navigationItems = React.useMemo(
    () =>
      Object.keys(ROUTES.PUBLIC)
        .map((key) => ROUTES.PUBLIC[key as keyof typeof ROUTES.PUBLIC])
        .filter((route) => !route.NAV_ITEM),
    []
  )

  return (
    <nav className="flex-1 space-y-1 px-2 py-4">
      {navigationItems.map((route) => (
        <NavLink key={route.PATH} route={route} />
      ))}
    </nav>
  )
}
