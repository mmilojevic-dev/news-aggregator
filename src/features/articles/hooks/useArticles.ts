import React from 'react'

import { AsyncStatusEnum } from '@/types'
import { handleError } from '@/utils'

import { getArticlesFromSource } from '../api/getAllArticles'
import { ArticleType, FiltersFormSchemaType, SourceNameEnum } from '../types'
import {
  normalizeGuardianArticles,
  normalizeNewsApiArticles,
  normalizeNYTimesArticles
} from '../utils/responseNormalizers'

export const useArticles = (filters: FiltersFormSchemaType) => {
  const [articles, setArticles] = React.useState<ArticleType[]>([])
  const [status, setStatus] = React.useState(AsyncStatusEnum.Idle)

  React.useEffect(() => {
    const fetchArticles = async () => {
      try {
        setStatus(AsyncStatusEnum.Loading)
        const responses = await Promise.all([
          getArticlesFromSource(SourceNameEnum.Guardian, filters),
          getArticlesFromSource(SourceNameEnum.NewsApi, filters),
          getArticlesFromSource(SourceNameEnum.NYTimes, filters)
        ])

        const normalizedArticles = [
          ...normalizeGuardianArticles(responses[0].response.results),
          ...normalizeNewsApiArticles(responses[1].articles),
          ...normalizeNYTimesArticles(responses[2].response.docs)
        ]
        setArticles(normalizedArticles)
        setStatus(AsyncStatusEnum.Success)
      } catch (error) {
        handleError(error)
        setStatus(AsyncStatusEnum.Fail)
      }
    }

    fetchArticles()
  }, [filters])

  return { articles, status }
}
