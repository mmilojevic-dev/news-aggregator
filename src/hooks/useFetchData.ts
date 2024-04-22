import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { ERRORS } from '@/config'
import { addNotification, AppDispatch } from '@/store'
import { AsyncStatusEnum, NotificationEnum } from '@/types'
import { getErrorMessage } from '@/utils'

type UseFetchDataProps = {
  url: string
  params: {
    [key: string]: string
  }
}

export const useFetchData = <T>({ url, params }: UseFetchDataProps) => {
  const [data, setData] = useState<T | null>(null)
  const [status, setStatus] = useState(AsyncStatusEnum.Idle)
  const dispatch = useDispatch<AppDispatch>()

  const handleError = useCallback(
    (error: unknown) => {
      dispatch(
        addNotification(
          NotificationEnum.Error,
          ERRORS.GENERAL_NETWORK,
          getErrorMessage(error)
        )
      )
    },
    [dispatch]
  )

  const fetchData = useCallback(async () => {
    setStatus(AsyncStatusEnum.Loading)
    try {
      const response = await axios.get<T>(url, { params })
      setData(response.data)
      setStatus(AsyncStatusEnum.Success)
    } catch (error) {
      setStatus(AsyncStatusEnum.Fail)
      handleError(error)
    }
  }, [url, params, handleError])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, status }
}
