import { List, LoadingFallback } from '@/components'
import { AsyncStatusEnum } from '@/types'

import { useArticles } from '../hooks/useArticles'
import { ArticleTypeUniformed } from '../types'
import { Article } from './Article'

export const ArticlesList = () => {
  const { articles, status } = useArticles()

  if (status === AsyncStatusEnum.Loading) {
    return <LoadingFallback />
  }

  if (!articles) return null

  return (
    <List<ArticleTypeUniformed>
      data={articles}
      renderItem={({ item }) => <Article key={item?.id} data={item} />}
    />
  )
}
