import React from 'react'
import { useSelector } from 'react-redux'

import { categoryFilterConfig, sourceFilterConfig } from '@/features/filters'
import { selectPreferences } from '@/store/preferencesSlice'

export const useFilterOptions = () => {
  const preferences = useSelector(selectPreferences)

  const filteredCategories = React.useMemo(() => {
    return categoryFilterConfig.options!.filter((option) =>
      preferences.categories.includes(option.value)
    )
  }, [preferences.categories])

  const filteredSources = React.useMemo(() => {
    return sourceFilterConfig.options!.filter((option) =>
      preferences.sources.includes(option.value)
    )
  }, [preferences.sources])

  return { filteredCategories, filteredSources }
}
