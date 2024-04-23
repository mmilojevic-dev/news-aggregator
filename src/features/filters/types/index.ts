import { z } from 'zod'

import { SelectOptionType } from '@/types'

import { filtersConfig } from '../config'

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
