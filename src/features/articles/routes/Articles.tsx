import { ContentLayout } from '@/components'
import { articlesConfig } from '@/features'
import { Filters, useFilters } from '@/features/filters'

import { ArticlesList } from '../components'
import { useArticles } from '../hooks'

export const Articles = () => {
  const { filters, form } = useFilters()
  const { articles, status } = useArticles(filters)

  return (
    <ContentLayout title={articlesConfig.title}>
      <Filters form={form} />
      <div className="mt-4">
        <ArticlesList articles={articles} status={status} />
      </div>
    </ContentLayout>
  )
}
