import React from 'react'

import { AsyncStatusEnum } from '@/types'
import { handleError } from '@/utils'

import { getAllArticles } from '../api/getAllArticles'
import { ArticleTypeUniformed } from '../types'
import {
  normalizeGuardianArticles,
  normalizeNewsApiArticles,
  normalizeNYTimesArticles
} from '../utils/responseNormalizers'

export const useArticles = () => {
  const [articles, setArticles] = React.useState<ArticleTypeUniformed[]>([])
  const [status, setStatus] = React.useState<AsyncStatusEnum>(
    AsyncStatusEnum.Idle
  )

  React.useEffect(() => {
    setStatus(AsyncStatusEnum.Loading)
    getAllArticles()
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
