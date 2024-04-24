import React from 'react'
import { useSelector } from 'react-redux'

import { categoryFilterConfig, sourceFilterConfig } from '@/features/filters'
import { selectPreferences } from '@/store/preferencesSlice'

export const usePreferredOptions = () => {
  const preferences = useSelector(selectPreferences)

  const preferredCategories = React.useMemo(() => {
    return categoryFilterConfig.options!.filter((option) =>
      preferences.categories.includes(option.value)
    )
  }, [preferences.categories])

  const preferredSources = React.useMemo(() => {
    return sourceFilterConfig.options!.filter((option) =>
      preferences.sources.includes(option.value)
    )
  }, [preferences.sources])

  const preferredAuthors = React.useMemo(() => {
    return preferences.authors.map((author) => ({
      label: author,
      value: author
    }))
  }, [preferences.authors])

  return { preferredCategories, preferredSources, preferredAuthors }
}
