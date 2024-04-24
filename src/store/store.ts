import { configureStore } from '@reduxjs/toolkit'

import notificationsReducer from './notificationsSlice'
import preferencesReducer from './preferencesSlice'
import themeReducer from './themeSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    notifications: notificationsReducer,
    preferences: preferencesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
