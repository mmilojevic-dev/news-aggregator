import { z } from 'zod'

import { SelectOptionType } from '@/types'

import { filtersConfig } from '../config'

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

export type FiltersFormSchemaType = z.infer<typeof filtersConfig.schema>

export type FilterConfigType = {
  name: string
  placeholder: string
  options?: SelectOptionType[]
}

export enum FilterEnum {
  Search = 'search',
  Category = 'category',
  Source = 'source',
  FromDate = 'fromDate',
  ToDate = 'toDate'
}

export type FiltersConfigType = {
  schema: any
  default: FiltersFormSchemaType
  fields: Record<FilterEnum, FilterConfigType>
}

export type QueryParamsType = Record<string, string>

export type NormalizationConfigType = {
  responseEntryPath: string
  article: ArticleNormalizationType<ArticleType>
}

export type SourceConfigType = {
  baseUrl: string
  endpoint: string
  defaultParams: Record<string, string>
  paramMappings: Record<string, ParamMappingEntryType>
  normalization: NormalizationConfigType
}

export enum SourceNameEnum {
  Guardian = 'guardian',
  NewsApi = 'newsApi',
  NYTimes = 'nyTimes'
}

export type SourcesConfigType = Record<SourceNameEnum, SourceConfigType>

export type ArticlesConfigType = {
  title: string
  filters: FiltersConfigType
  sources: SourcesConfigType
}
