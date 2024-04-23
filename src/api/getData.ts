import axios from 'axios'

import { handleError } from '@/utils'

export const getData = async <T>(
  url: string,
  params: Partial<Record<string, string>>
): Promise<any> => {
  try {
    const response = await axios.get<T>(url, { params })
    return response.data
  } catch (error) {
    handleError(error)
  }
}
