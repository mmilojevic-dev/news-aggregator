import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm, useWatch } from 'react-hook-form'

import { filtersFormSchema } from '@/config'
import { useDebounce } from '@/hooks'

import { FiltersFormSchemaType } from '../types'

export type UseFiltersReturnType = ReturnType<typeof useFilters>

export function useFilters(
  onFilterChange: (data: FiltersFormSchemaType) => void,
  debounceDelay = 500
) {
  const form = useForm<FiltersFormSchemaType>({
    resolver: zodResolver(filtersFormSchema),
    defaultValues: {
      query: '',
      fromDate: undefined,
      toDate: undefined,
      category: ''
    },
    mode: 'onChange'
  })

  const values = useWatch({ control: form.control })
  const debouncedValues = useDebounce(values, debounceDelay)

  React.useEffect(() => {
    onFilterChange(debouncedValues)
  }, [debouncedValues, onFilterChange])

  return { form }
}
