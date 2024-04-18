import Axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios'

import { ERRORS, FEED } from '@/config'
import { store } from '@/store'
import { addNotification } from '@/store'
import {
  DataSourceConfigType,
  DataSourceNameEnum,
  FeedData,
  NotificationEnum
} from '@/types'
import { getErrorMessage } from '@/utils/errors'

type AxiosInstances = {
  [key in DataSourceNameEnum]: AxiosInstance
}

const cachedInstances: Partial<AxiosInstances> = {}

const handleError = (error: Error) => {
  store.dispatch(
    addNotification(
      NotificationEnum.Error,
      ERRORS.GENERAL_NETWORK,
      getErrorMessage(error)
    )
  )
  return Promise.reject(error)
}

const setupRequestInterceptor = (
  instance: AxiosInstance,
  dataSourceConfig: DataSourceConfigType
) => {
  instance.interceptors.request.use(
    (axiosConfig: InternalAxiosRequestConfig) => {
      axiosConfig.params = {
        ...axiosConfig.params,
        [dataSourceConfig.PARAMS.API_KEY.NAME]:
          dataSourceConfig.PARAMS.API_KEY.VALUE
      }
      return axiosConfig
    },
    handleError
  )
}

const setupResponseInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.response.use((response) => response.data, handleError)
}

const createAxiosInstance = (baseUrl: string) => {
  return Axios.create({
    baseURL: baseUrl,
    headers: {
      Accept: 'application/json'
    }
  })
}

export const getAxiosInstance = (dataSourceName: keyof FeedData) => {
  const dataSourceConfig: DataSourceConfigType = FEED.DATA[dataSourceName]
  if (!cachedInstances[dataSourceName]) {
    const instance = createAxiosInstance(dataSourceConfig.BASE_URL)

    setupRequestInterceptor(instance, dataSourceConfig)
    setupResponseInterceptor(instance)

    cachedInstances[dataSourceName] = instance
  }

  return cachedInstances[dataSourceName]!
}
