import { getData } from '@/api/getData'

import { articlesConfig } from '../config'
import { FiltersFormSchemaType, SourceNameEnum } from '../types'
import { mapFiltersToApiParams } from '../utils/filtersMapper'

export const getArticlesFromSource = async (
  source: SourceNameEnum,
  filters: FiltersFormSchemaType
) => {
  const sourceConfig = articlesConfig.sources[source]
  const params = mapFiltersToApiParams(filters, source)
  const fullParams = { ...sourceConfig.defaultParams, ...params }

  return getData(`${sourceConfig.baseUrl}/${sourceConfig.endpoint}`, fullParams)
}
