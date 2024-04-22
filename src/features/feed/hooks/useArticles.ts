import React from 'react'

import { ArticleTypeUniformed } from '@/features/feed'
import {
  normalizeGuardianArticles,
  normalizeNewsApiArticles,
  normalizeNYTimesArticles
} from '@/features/feed/utils/responseNormalizers'
import { AsyncStatusEnum } from '@/types'
import { handleError } from '@/utils'

import { getNewsSources } from '../api/getFeedSources'

export const useArticles = () => {
  const [articles, setArticles] = React.useState<ArticleTypeUniformed[]>([])
  const [status, setStatus] = React.useState<AsyncStatusEnum>(
    AsyncStatusEnum.Idle
  )

  React.useEffect(() => {
    setStatus(AsyncStatusEnum.Loading)
    getNewsSources()
      .then(({ guardianResponse, newsApiResponse, nyTimesResponse }) => {
        const normalizedArticles = [
          ...normalizeGuardianArticles(guardianResponse.response.results),
          ...normalizeNewsApiArticles(newsApiResponse.articles),
          ...normalizeNYTimesArticles(nyTimesResponse.response.docs)
        ]
        setArticles(normalizedArticles)
        setStatus(AsyncStatusEnum.Success)
      })
      .catch((error) => {
        handleError(error)
        setStatus(AsyncStatusEnum.Fail)
      })
  }, [])

  return { articles, status }
}
