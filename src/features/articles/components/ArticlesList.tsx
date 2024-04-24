import { List, LoadingFallback } from '@/components'
import { AsyncStatusEnum } from '@/types'

import { ArticleType } from '../types'
import { Article } from './Article'

type ArticlesListProps = {
  articles: ArticleType[]
  status: AsyncStatusEnum
}

export const ArticlesList = ({ articles, status }: ArticlesListProps) => {
  if (status === AsyncStatusEnum.Loading) {
    return <LoadingFallback className="mt-20" />
  }

  if (!articles) return null

  return (
    <List<ArticleType>
      data={articles}
      renderItem={({ item }) => <Article key={item?.id} data={item} />}
    />
  )
}
