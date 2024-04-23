import { z } from 'zod'

import {
  ArticlesConfigType,
  FilterConfigType,
  FiltersConfigType,
  SourceConfigType,
  SourceNameEnum
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

export const guardianConfig: SourceConfigType = {
  baseUrl: 'https://content.guardianapis.com',
  endpoint: 'search',
  defaultParams: {
    'show-fields': 'publication,trailText,headline,thumbnail,short-url',
    'show-tags': 'contributor',
    lang: 'en',
    'page-size': '5',
    'api-key': process.env.REACT_APP_GUARDIAN_API_KEY || ''
  },
  paramMappings: {
    search: 'q',
    fromDate: {
      key: 'from-date',
      transform: (date: Date) => date.toISOString().split('T')[0]
    },
    toDate: {
      key: 'to-date',
      transform: (date: Date) => date.toISOString().split('T')[0]
    },
    category: 'section'
  },
  normalization: {
    responseEntryPath: 'response.results',
    article: {
      id: (article: any) => article.id,
      author: (article: any) => article.tags[0]?.webTitle || 'Unknown Author',
      category: (article: any) => article.pillarName || '',
      date: (article: any) => new Date(article.webPublicationDate),
      image: (article: any) => article.fields.thumbnail || '',
      link: (article: any) => article.webUrl,
      source: () => 'The Guardian',
      text: (article: any) => article.fields.trailText || '',
      title: (article: any) => article.webTitle || ''
    }
  }
}

const newsApiConfig: SourceConfigType = {
  baseUrl: 'https://newsapi.org/v2',
  endpoint: 'everything',
  defaultParams: {
    q: 'a',
    apiKey: process.env.REACT_APP_NEWSAPI_KEY || '',
    pageSize: '5'
  },
  paramMappings: {
    search: 'q',
    fromDate: {
      key: 'from',
      transform: (date: Date) => date.toISOString().split('T')[0]
    },
    toDate: {
      key: 'to',
      transform: (date: Date) => date.toISOString().split('T')[0]
    }
  },
  normalization: {
    responseEntryPath: 'articles',
    article: {
      id: (article: any) => article.publishedAt,
      author: (article: any) => article.author || 'Unknown Author',
      category: (article: any) => article.category || '',
      date: (article: any) => new Date(article.publishedAt),
      image: (article: any) => article.urlToImage || '',
      link: (article: any) => article.url,
      source: (article: any) => article.source.name,
      text: (article: any) => article.description || '',
      title: (article: any) => article.title || ''
    }
  }
}

const nyTimesConfig: SourceConfigType = {
  baseUrl: 'https://api.nytimes.com/svc/search/v2',
  endpoint: 'articlesearch.json',
  defaultParams: {
    'page-size': '5',
    'api-key': process.env.REACT_APP_NYTIMES_API_KEY || ''
  },
  paramMappings: {
    search: 'q',
    fromDate: {
      key: 'begin_date',
      transform: (date: Date) => date.toISOString().split('T')[0]
    },
    toDate: {
      key: 'end_date',
      transform: (date: Date) => date.toISOString().split('T')[0]
    },
    category: {
      key: 'fq',
      transform: (category: string) => `news_desk:("${category}")`
    }
  },
  normalization: {
    responseEntryPath: 'response.docs',
    article: {
      id: (article: any) => article._id,
      author: (article: any) =>
        `${article.byline.person[0]?.firstname} ${article.byline.person[0]?.lastname}` ||
        'Unknown Author',
      category: (article: any) => article.subsection_name || '',
      date: (article: any) => new Date(article.pub_date),
      image: (article: any) =>
        `https://static01.nyt.com/${article.multimedia?.find((media: any) => media.subtype === 'thumbLarge')?.url || ''}`,
      link: (article: any) => article.web_url,
      source: () => 'NYTimes',
      text: (article: any) => article.lead_paragraph || '',
      title: (article: any) => article.headline.main || ''
    }
  }
}

export const sourcesConfig: Record<SourceNameEnum, SourceConfigType> = {
  [SourceNameEnum.Guardian]: guardianConfig,
  [SourceNameEnum.NewsApi]: newsApiConfig,
  [SourceNameEnum.NYTimes]: nyTimesConfig
}

export const articlesConfig: ArticlesConfigType = {
  title: 'Articles',
  filters: filtersConfig,
  sources: sourcesConfig
}
