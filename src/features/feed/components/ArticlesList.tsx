import React from 'react'

import { List, LoadingFallback } from '@/components'

import { useArticles } from '../api/getArticles'
import { ArticleType } from '../types'
import { Article } from './Article'

export const ArticlesList = () => {
  const articlesQuery = useArticles()

  React.useEffect(() => {
    console.log(articlesQuery.data)
  }, [articlesQuery])

  if (articlesQuery.isLoading) {
    return <LoadingFallback />
  }

  if (!articlesQuery.data) return null

  return (
    <List<ArticleType>
      data={articlesQuery.data.response.results}
      renderItem={({ item }) => <Article key={item?.id} data={item} />}
    />
  )
}
