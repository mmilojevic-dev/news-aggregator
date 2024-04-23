import { z } from 'zod'

import {
  ArticlesConfigType,
  FilterConfigType,
  FiltersConfigType,
  SourceConfigType
} from '../types'

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
    fromDate: z.date().optional(),
    toDate: z.date().optional(),
    category: z.string().optional()
  }),
  default: {
    search: '',
    fromDate: undefined,
    toDate: undefined,
    category: ''
  },
  fields: {
    search: searchFilterConfig,
    category: categoryFilterConfig,
    fromDate: fromDateFilterConfig,
    toDate: toDateFilterConfig
  }
}

const guardianConfig: SourceConfigType = {
  baseUrl: 'https://content.guardianapis.com',
  endpoint: 'search',
  params: {
    'show-fields': 'publication,trailText,headline,thumbnail,short-url',
    'show-tags': 'contributor',
    lang: 'en',
    'page-size': '5',
    'api-key': process.env.REACT_APP_GUARDIAN_API_KEY || ''
  }
}

const newsApiConfig: SourceConfigType = {
  baseUrl: 'https://newsapi.org/v2',
  endpoint: 'everything',
  params: {
    q: 'random',
    apiKey: process.env.REACT_APP_NEWSAPI_KEY || '',
    pageSize: '5'
  }
}

const nyTimesConfig: SourceConfigType = {
  baseUrl: 'https://api.nytimes.com/svc/search/v2',
  endpoint: 'articlesearch.json',
  params: {
    'page-size': '5',
    'api-key': process.env.REACT_APP_NYTIMES_API_KEY || ''
  }
}

export const articlesConfig: ArticlesConfigType = {
  title: 'Articles',
  filters: filtersConfig,
  sources: {
    guardian: guardianConfig,
    newsApi: newsApiConfig,
    nyTimes: nyTimesConfig
  }
}
