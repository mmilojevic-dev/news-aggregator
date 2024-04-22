import { ContentLayout } from '@/components'
import { ARTICLES } from '@/config'

import { ArticlesList } from '../components/ArticlesList'

export const Articles = () => {
  return (
    <ContentLayout title={ARTICLES.TITLE}>
      <div className="mt-4">
        <ArticlesList />
      </div>
    </ContentLayout>
  )
}
