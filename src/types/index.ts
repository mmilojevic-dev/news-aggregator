export enum ThemeEnum {
  Dark = 'Dark',
  Light = 'Light',
  System = 'System'
}

export interface ThemeContextInterface {
  theme: ThemeEnum
  setTheme: (theme: ThemeEnum) => void
}

export enum NotificationEnum {
  Info = 'INFO',
  Success = 'SUCCESS',
  Warning = 'WARNING',
  Error = 'ERROR'
}

export type DataSourceConfigParamType = {
  NAME: string
  VALUE: string
}

export type DataSourceConfigType = {
  QUERY_KEY: string
  BASE_URL: string
  ENDPOINT: string
  PARAMS: {
    API_KEY: DataSourceConfigParamType
    SEARCH: DataSourceConfigParamType
  }
}

export enum DataSourceNameEnum {
  GUARDIAN = 'GUARDIAN',
  NEWSAPI = 'NEWSAPI'
}

export type FeedData = {
  [key in DataSourceNameEnum]: DataSourceConfigType
}
