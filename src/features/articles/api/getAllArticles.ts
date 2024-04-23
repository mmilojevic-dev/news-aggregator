import { getData } from '@/api/getData'

import { articlesConfig } from '../config'

export const getAllArticles = async () => {
  const [guardianResponse, newsApiResponse, nyTimesResponse] =
    await Promise.all([
      getData(
        `${articlesConfig.sources.guardian.baseUrl}/${articlesConfig.sources.guardian.endpoint}`,
        articlesConfig.sources.guardian.params
      ),
      getData(
        `${articlesConfig.sources.newsApi.baseUrl}/${articlesConfig.sources.newsApi.endpoint}`,
        articlesConfig.sources.newsApi.params
      ),
      getData(
        `${articlesConfig.sources.nyTimes.baseUrl}/${articlesConfig.sources.nyTimes.endpoint}`,
        articlesConfig.sources.nyTimes.params
      )
    ])
  return {
    guardianResponse,
    newsApiResponse,
    nyTimesResponse
  }
}
