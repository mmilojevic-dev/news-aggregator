import { errorsConfig } from '@/config'
import { addNotification, store } from '@/store'
import { NotificationEnum } from '@/types'

export const getErrorMessage = (error: any) => {
  if (error.response?.data?.message) return error.response?.data?.message
  if (error instanceof Error) return error.message
  return String(error)
}

export const handleError = (error: any) => {
  store.dispatch(
    addNotification(
      NotificationEnum.Error,
      errorsConfig.errorTitle,
      getErrorMessage(error)
    )
  )
}
