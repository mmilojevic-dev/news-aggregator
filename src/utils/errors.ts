export const getErrorMessage = (error: any) => {
  if (error.response?.data?.message) return error.response?.data?.message
  if (error instanceof Error) return error.message
  return String(error)
}
