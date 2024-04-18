import { ContentLayout } from '@/components'
import { FEED } from '@/config'

import { ArticlesList } from '../components/ArticlesList'

export const Feed = () => {
  return (
    <ContentLayout title={FEED.TITLE}>
      <div className="mt-4">
        <ArticlesList />
      </div>
    </ContentLayout>
  )
}
