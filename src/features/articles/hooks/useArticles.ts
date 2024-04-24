import { useQueries } from '@tanstack/react-query'
import React from 'react'

import { FiltersFormSchemaType } from '@/features/filters'
import { AsyncStatusEnum, SourceNameEnum } from '@/types'

import { getArticles } from '../api'
import { ArticleType } from '../types'
import { normalizeArticles } from '../utils'

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
      select: (data: any) => normalizeArticles(data, source)
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
      const filteredClientSide = allArticles.filter((article) =>
        article.author.toLowerCase().includes(filters.author.toLowerCase())
      )
      filteredClientSide.sort((a, b) => b.date.getTime() - a.date.getTime())
      setArticles(filteredClientSide)
      setStatus(AsyncStatusEnum.Success)
    } else if (anyLoading) {
      setStatus(AsyncStatusEnum.Loading)
    } else {
      setStatus(AsyncStatusEnum.Fail)
    }
  }, [queryResults, filters.author])

  return { articles, status }
}
