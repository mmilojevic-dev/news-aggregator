import { ArticleType } from '../types'

export const normalizeGuardianArticles = (articles: any[]): ArticleType[] => {
  return articles.map((article) => ({
    id: article.id,
    author: article.tags[0].webTitle || 'Unknown Author',
    category: article.pillarName || '',
    date: new Date(article.webPublicationDate),
    image: article.fields.thumbnail || '',
    link: article.webUrl || '',
    source: 'The Guardian',
    text: article.fields.trailText || '',
    title: article.webTitle || ''
  }))
}

export const normalizeNewsApiArticles = (articles: any[]): ArticleType[] => {
  return articles.map((article) => ({
    id: article.publishedAt,
    author: article.author || 'Unknown Author',
    category: article.category || '',
    date: new Date(article.publishedAt),
    image: article.urlToImage || '',
    link: article.url || '',
    source: article.source.name,
    text: article.description || '',
    title: article.title || ''
  }))
}

export const normalizeNYTimesArticles = (articles: any[]): ArticleType[] => {
  const imagesServer = 'https://static01.nyt.com'
  return articles.map((article) => {
    const image = article.multimedia.find(
      (media: any) => media.subtype === 'thumbLarge'
    )

    return {
      id: article._id,
      author:
        `${article.byline.person[0]?.firstname} ${article.byline.person[0]?.lastname}` ||
        'Unknown Author',
      category: article.subsection_name || '',
      date: new Date(article.pub_date),
      image: `${imagesServer}/${image?.url || ''}`,
      link: article.web_url || '',
      source: article.source || '',
      text: article.lead_paragraph || '',
      title: article.headline.main || ''
    }
  })
}
