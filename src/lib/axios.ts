import axios, { InternalAxiosRequestConfig } from 'axios'
import { AxiosResponse } from 'axios'

import { errorsConfig } from '@/config'
import { addNotification, store } from '@/store'
import { NotificationEnum } from '@/types'
import { getErrorMessage } from '@/utils'

const handleError = (error: any) => {
  store.dispatch(
    addNotification(
      NotificationEnum.Error,
      errorsConfig.errorTitle,
      getErrorMessage(error)
    )
  )
}

export const axiosClient = axios.create({
  headers: {
    Accept: 'application/json'
  }
})

const requestInterceptor = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  return config
}

const responseSuccessHandler = (response: AxiosResponse): any => {
  return response.data
}

axiosClient.interceptors.request.use(requestInterceptor, handleError)

axiosClient.interceptors.response.use(responseSuccessHandler, handleError)
