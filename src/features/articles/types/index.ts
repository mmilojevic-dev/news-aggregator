import { filtersConfig, FiltersConfigType } from '@/features/filters'
import { SourceNameEnum } from '@/types'

import { sourcesConfig } from '../config'

export type ArticleType = {
  id: string
  date: Date
  category: string
  author: string
  source: string
  title: string
  text: string
  image: string
  link: string
}

export type ArticleNormalizationType<T> = {
  [Property in keyof T]: (article: any) => T[Property]
}

export type ParamMappingEntryType =
  | string
  | {
      key: string
      transform?: (value: any) => string
    }

export type NormalizationConfigType = {
  responseEntryPath: string
  article: ArticleNormalizationType<ArticleType>
}

export type ArticlesConfigType = {
  title: string
  filters: FiltersConfigType
  sources: Record<SourceNameEnum, SourceConfigType>
}

export type SourceConfigType = {
  baseUrl: string
  endpoint: string
  defaultParams: Record<string, string>
  paramMappings: Record<string, ParamMappingEntryType>
  normalization: NormalizationConfigType
  name: string
  domainName: string
}

export const articlesConfig: ArticlesConfigType = {
  title: 'Articles',
  filters: filtersConfig,
  sources: sourcesConfig
}
