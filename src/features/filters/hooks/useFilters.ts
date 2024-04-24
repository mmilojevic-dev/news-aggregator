import { zodResolver } from '@hookform/resolvers/zod'
import { format, parseISO } from 'date-fns'
import { useEffect, useMemo } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'

import { useDebounce } from '@/hooks'

import { filtersConfig } from '../config'
import { FiltersFormSchemaType } from '../types'

export const useFilters = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const params = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  )

  const defaultValues = useMemo(() => {
    return Object.keys(filtersConfig.default).reduce(
      (acc, key) => {
        const paramValue = params.get(key)
        if (paramValue) {
          acc[key] =
            key === 'fromDate' || key === 'toDate'
              ? parseISO(paramValue)
              : paramValue
        }
        return acc
      },
      { ...filtersConfig.default }
    )
  }, [params])

  const form = useForm<FiltersFormSchemaType>({
    resolver: zodResolver(filtersConfig.schema),
    defaultValues,
    mode: 'onChange'
  })

  const filters = useWatch({ control: form.control })
  const debouncedFilters = useDebounce(filters)

  useEffect(() => {
    const queryString = Object.entries(debouncedFilters)
      .filter(([, value]) => value)
      .map(([key, value]) => {
        if (!value) return
        const formattedValue =
          value instanceof Date ? format(value, 'yyyy-MM-dd') : value.toString()
        return `${encodeURIComponent(key)}=${encodeURIComponent(formattedValue)}`
      })
      .join('&')

    navigate(`?${queryString}`, { replace: true })
  }, [debouncedFilters, navigate])

  return { form, filters: debouncedFilters }
}
