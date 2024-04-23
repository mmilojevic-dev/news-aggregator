import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, useWatch } from 'react-hook-form'

import { useDebounce } from '@/hooks'

import { filtersConfig } from '../config'
import { FiltersFormSchemaType } from '../types'

export type UseFiltersReturnType = ReturnType<typeof useFilters>

export const useFilters = (debounceDelay = 500) => {
  const form = useForm<FiltersFormSchemaType>({
    resolver: zodResolver(filtersConfig.schema),
    defaultValues: filtersConfig.default,
    mode: 'onChange'
  })

  const values = useWatch({ control: form.control })
  const debouncedValues = useDebounce(values, debounceDelay)

  return { form, filters: debouncedValues }
}
