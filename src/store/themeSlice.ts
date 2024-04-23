import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { themeConfig } from '@/config'
import { ThemeEnum } from '@/types'
import { getFromLocalStorage, setToLocalStorage } from '@/utils/storage'

const themeKey = themeConfig.localStorageKey

interface ThemeState {
  activeTheme: ThemeEnum
}

const initialState: ThemeState = {
  activeTheme: getFromLocalStorage<ThemeEnum>(themeKey, ThemeEnum.System)
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeEnum>) => {
      const newTheme = action.payload
      setToLocalStorage(themeKey, newTheme)
      state.activeTheme = newTheme
    }
  }
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer
