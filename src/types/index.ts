export enum AsyncStatusEnum {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Fail = 'fail'
}

export enum ThemeEnum {
  Dark = 'dark',
  Light = 'light',
  System = 'system'
}

export enum NotificationEnum {
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Error = 'error'
}

export type NotificationType = {
  id: string
  type: NotificationEnum
  title: string
  message?: string
}

export type ParamsType = {
  [key: string]: string
}

export type SourceConfigType = {
  BASE_URL: string
  ENDPOINT: string
  PARAMS: {
    DEFAULT: ParamsType
  }
}

export enum SourceNameEnum {
  Guardian = 'GUARDIAN',
  NewsApi = 'NEWSAPI',
  NYTimes = 'NYTIMES'
}

export type ArticlesSourceType = {
  [key in SourceNameEnum]: SourceConfigType
}
