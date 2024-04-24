import { FiltersFormSchemaType } from '@/features/filters'
import { SourceNameEnum } from '@/types'

import { sourcesConfig } from '../config'

const getApiParamValue = (
  value: any,
  mapping: string | { key: string; transform?: (value: any) => string }
) => {
  const apiParam = typeof mapping === 'string' ? mapping : mapping.key
  const transformedValue =
    typeof mapping === 'object' && mapping.transform
      ? mapping.transform(value)
      : value
  return { apiParam, transformedValue }
}

export const mapFiltersToApiParams = (
  filters: FiltersFormSchemaType,
  source: SourceNameEnum
): Record<string, string> => {
  const config = sourcesConfig[source]
  const paramEntries = Object.entries(config.paramMappings || {})

  return paramEntries
    .filter(([key]) => !!filters[key])
    .reduce(
      (params, [filterKey, mapping]) => {
        const value = filters[filterKey]
        if (value) {
          const { apiParam, transformedValue } = getApiParamValue(
            value,
            mapping
          )
          params[apiParam] = transformedValue
        }
        return params
      },
      { ...config.defaultParams }
    )
}
