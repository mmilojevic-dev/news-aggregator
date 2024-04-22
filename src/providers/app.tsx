import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { ErrorFallback, LoadingFallback, Notifications } from '@/components'
import { store } from '@/store'

import { Theme } from './theme'

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Provider store={store}>
      <Theme>
        <React.Suspense fallback={<LoadingFallback fullscreen />}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Notifications />
            <BrowserRouter>{children}</BrowserRouter>
          </ErrorBoundary>
        </React.Suspense>
      </Theme>
    </Provider>
  )
}
