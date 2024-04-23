import { ContentLayout } from '@/components'

import { ArticlesList } from '../components/ArticlesList'
import { Filters } from '../components/Filters'
import { articlesConfig } from '../config'
import { useArticles } from '../hooks/useArticles'
import { useFilters } from '../hooks/useFilters'

export const Articles = () => {
  const { form, filters } = useFilters()
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
