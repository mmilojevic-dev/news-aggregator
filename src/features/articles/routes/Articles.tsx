import { ContentLayout } from '@/components'

import { ArticlesList } from '../components/ArticlesList'
import { Filters } from '../components/Filters'
import { articlesConfig } from '../config'
import { useArticles } from '../hooks/useArticles'
import { FiltersFormSchemaType } from '../types'

export const Articles = () => {
  const { articles, status } = useArticles()

  const handleFiltersChange = (filters: FiltersFormSchemaType) => {
    console.log(filters)
  }

  return (
    <ContentLayout title={articlesConfig.title}>
      <Filters onFilterChange={handleFiltersChange} />
      <div className="mt-4">
        <ArticlesList articles={articles} status={status} />
      </div>
    </ContentLayout>
  )
}
