import { articlesConfig, FiltersFormSchemaType } from '@/features'
import { axiosClient } from '@/lib'
import { SourceNameEnum } from '@/types'

import { mapFiltersToApiParams } from '../utils'

export const getArticles = async (
  source: SourceNameEnum,
  filters: FiltersFormSchemaType
) => {
  const sourceConfig = articlesConfig.sources[source]
  const params = mapFiltersToApiParams(filters, source)
  const fullParams = { ...sourceConfig.defaultParams, ...params }

  return axiosClient.get(`${sourceConfig.baseUrl}/${sourceConfig.endpoint}`, {
    params: fullParams
  })
}
