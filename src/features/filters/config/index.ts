import { z } from 'zod'

import { sourcesConfig } from '@/features/articles'
import { SourceNameEnum } from '@/types'

import { FilterConfigType, FiltersConfigType } from '../types'

export const searchFilterConfig: FilterConfigType = {
  name: 'search',
  placeholder: 'Search articles...'
}

export const categoryFilterConfig: FilterConfigType = {
  name: 'category',
  placeholder: 'Select category:',
  options: [
    { label: 'Business', value: 'business' },
    { label: 'Culture', value: 'culture' },
    { label: 'Education', value: 'education' },
    { label: 'Politics', value: 'politics' },
    { label: 'Science', value: 'science' },
    { label: 'Society', value: 'society' },
    { label: 'Sport', value: 'sport' },
    { label: 'Technology', value: 'technology' }
  ]
}

export const sourceFilterConfig: FilterConfigType = {
  name: 'source',
  placeholder: 'Filter by source:',
  options: Object.values(SourceNameEnum).map((source) => ({
    label: sourcesConfig[source].domainName,
    value: source
  }))
}

export const authorFilterConfig: FilterConfigType = {
  name: 'author',
  placeholder: 'Filter by author:'
}

export const fromDateFilterConfig: FilterConfigType = {
  name: 'fromDate',
  placeholder: 'From date:'
}

export const toDateFilterConfig: FilterConfigType = {
  name: 'toDate',
  placeholder: 'To date:'
}

export const filtersConfig: FiltersConfigType = {
  schema: z.object({
    search: z.string().optional(),
    category: z.string().optional(),
    author: z.string().optional(),
    source: z.nativeEnum(SourceNameEnum).optional(),
    fromDate: z.date().optional(),
    toDate: z.date().optional()
  }),
  default: {
    search: '',
    category: '',
    author: '',
    source: '',
    fromDate: undefined,
    toDate: undefined
  },
  fields: {
    search: searchFilterConfig,
    category: categoryFilterConfig,
    source: sourceFilterConfig,
    author: authorFilterConfig,
    fromDate: fromDateFilterConfig,
    toDate: toDateFilterConfig
  }
}
