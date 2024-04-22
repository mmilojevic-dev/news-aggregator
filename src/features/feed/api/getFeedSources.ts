import { getData } from '@/api/getData'
import { FEED } from '@/config'

export const getNewsSources = async () => {
  const [guardianResponse, newsApiResponse, nyTimesResponse] =
    await Promise.all([
      getData(
        `${FEED.SOURCE.GUARDIAN.BASE_URL}/${FEED.SOURCE.GUARDIAN.ENDPOINT}`,
        FEED.SOURCE.GUARDIAN.PARAMS.DEFAULT
      ),
      getData(
        `${FEED.SOURCE.NEWSAPI.BASE_URL}/${FEED.SOURCE.NEWSAPI.ENDPOINT}`,
        FEED.SOURCE.NEWSAPI.PARAMS.DEFAULT
      ),
      getData(
        `${FEED.SOURCE.NYTIMES.BASE_URL}/${FEED.SOURCE.NYTIMES.ENDPOINT}`,
        FEED.SOURCE.NYTIMES.PARAMS.DEFAULT
      )
    ])
  return {
    guardianResponse,
    newsApiResponse,
    nyTimesResponse
  }
}
