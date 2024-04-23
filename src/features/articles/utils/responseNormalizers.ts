import { getNestedProperty } from '@/utils'

import { sourcesConfig } from '../config'
import { ArticleType, SourceNameEnum } from '../types'

export const normalizeArticles = (
  data: unknown[],
  source: SourceNameEnum
): ArticleType[] => {
  const config = sourcesConfig[source].normalization
  const articles = getNestedProperty(data, config.responseEntryPath) || []

  return articles.map((article: unknown) => ({
    id: config.article.id(article),
    author: config.article.author(article),
    category: config.article.category(article),
    date: config.article.date(article),
    image: config.article.image(article),
    link: config.article.link(article),
    source: config.article.source(article),
    text: config.article.text(article),
    title: config.article.title(article)
  }))
}
