import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { preferencesConfig, PreferencesFormType } from '@/features'
import { getFromLocalStorage, setToLocalStorage } from '@/utils/storage'

import { RootState } from './store'

type PreferencesStateType = {
  currentPreferences: PreferencesFormType
}

const preferencesKey = preferencesConfig.localStorageKey
const initialState: PreferencesStateType = {
  currentPreferences: getFromLocalStorage(preferencesKey, {
    sources: [],
    categories: [],
    authors: []
  })
}

export const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setPreferences: (state, action: PayloadAction<PreferencesFormType>) => {
      state.currentPreferences = action.payload
      setToLocalStorage(preferencesKey, action.payload)
    },
    resetPreferences: () => initialState
  }
})

export const { setPreferences, resetPreferences } = preferencesSlice.actions
export const selectPreferences = (state: RootState) =>
  state.preferences.currentPreferences

export default preferencesSlice.reducer
