import { getData } from '@/api/getData'
import { ARTICLES } from '@/config'

export const getAllArticles = async () => {
  const [guardianResponse, newsApiResponse, nyTimesResponse] =
    await Promise.all([
      getData(
        `${ARTICLES.SOURCE.GUARDIAN.BASE_URL}/${ARTICLES.SOURCE.GUARDIAN.ENDPOINT}`,
        ARTICLES.SOURCE.GUARDIAN.PARAMS.DEFAULT
      ),
      getData(
        `${ARTICLES.SOURCE.NEWSAPI.BASE_URL}/${ARTICLES.SOURCE.NEWSAPI.ENDPOINT}`,
        ARTICLES.SOURCE.NEWSAPI.PARAMS.DEFAULT
      ),
      getData(
        `${ARTICLES.SOURCE.NYTIMES.BASE_URL}/${ARTICLES.SOURCE.NYTIMES.ENDPOINT}`,
        ARTICLES.SOURCE.NYTIMES.PARAMS.DEFAULT
      )
    ])
  return {
    guardianResponse,
    newsApiResponse,
    nyTimesResponse
  }
}
