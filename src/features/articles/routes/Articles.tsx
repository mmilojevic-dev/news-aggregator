import { ContentLayout } from '@/components'

import { Filters } from '../../filters/components/Filters'
import { useFilters } from '../../filters/hooks/useFilters'
import { ArticlesList } from '../components/ArticlesList'
import { articlesConfig } from '../config'
import { useArticles } from '../hooks/useArticles'

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
