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

export type FiltersFormSchemaType = z.infer<typeof filtersConfig.schema>

export type FilterConfigType = {
  name: string
  placeholder: string
  options?: SelectOptionType[]
}

export enum FilterEnum {
  Search = 'search',
  Category = 'category',
  FromDate = 'fromDate',
  ToDate = 'toDate'
}

export type FiltersConfigType = {
  schema: any
  default: FiltersFormSchemaType
  fields: Record<FilterEnum, FilterConfigType>
}

export type QueryParamsType = Record<string, string>

export type SourceConfigType = {
  baseUrl: string
  endpoint: string
  params: Partial<QueryParamsType>
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
