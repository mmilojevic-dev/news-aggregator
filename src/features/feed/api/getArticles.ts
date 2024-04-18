import { useQuery } from 'react-query'

import { FEED } from '@/config'
import { getAxiosInstance } from '@/lib/axios'
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query'
import { DataSourceNameEnum } from '@/types'

import { ArticleType } from '../types'

export const getArticles = (): Promise<ArticleType[]> => {
  const axiosInstance = getAxiosInstance(DataSourceNameEnum.GUARDIAN)
  return axiosInstance.get(FEED.DATA.GUARDIAN.ENDPOINT)
}

type QueryFnType = typeof getArticles

type UseArticlesOptions = {
  config?: QueryConfig<QueryFnType>
}

export const useArticles = ({ config }: UseArticlesOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: [FEED.DATA.GUARDIAN.QUERY_KEY],
    queryFn: () => getArticles()
  })
}
