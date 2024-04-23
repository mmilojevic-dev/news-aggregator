import { useQueries } from '@tanstack/react-query'
import React from 'react'

import { FiltersFormSchemaType } from '@/features/filters'
import { AsyncStatusEnum } from '@/types'
import { handleError } from '@/utils'

import { getArticles } from '../api/getArticles'
import { ArticleType, SourceNameEnum } from '../types'
import { normalizeArticles } from '../utils/responseNormalizers'

export const useArticles = (filters: FiltersFormSchemaType) => {
  const [articles, setArticles] = React.useState<ArticleType[]>([])
  const [status, setStatus] = React.useState<AsyncStatusEnum>(
    AsyncStatusEnum.Idle
  )
  const sourcesToQuery = filters.source
    ? [filters.source]
    : Object.values(SourceNameEnum)

  const queryResults = useQueries({
    queries: sourcesToQuery.map((source) => ({
      queryKey: ['articles', source, JSON.stringify(filters)],
      queryFn: () => getArticles(source, filters),
      select: (data: any) => normalizeArticles(data, source),
      onError: (error: Error) => {
        handleError(new Error(`Error fetching data from ${source}:`, error))
      }
    }))
  })

  React.useEffect(() => {
    const allArticles: ArticleType[] = []
    let allSuccess = true
    let anyLoading = false

    for (const result of queryResults) {
      if (result.isLoading) anyLoading = true
      if (result.isError) allSuccess = false
      if (result.status === 'success' && result.data) {
        allArticles.push(...result.data)
      }
    }

    if (allSuccess && !anyLoading) {
      allArticles.sort((a, b) => b.date.getTime() - a.date.getTime())
      setArticles(allArticles)
      setStatus(AsyncStatusEnum.Success)
    } else if (anyLoading) {
      setStatus(AsyncStatusEnum.Loading)
    } else {
      setStatus(AsyncStatusEnum.Fail)
    }
  }, [queryResults])

  return { articles, status }
}
