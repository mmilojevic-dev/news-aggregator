import { nanoid } from '@reduxjs/toolkit'

import { SourceNameEnum } from '@/types'

import { SourceConfigType } from '../types'

export const guardianConfig: SourceConfigType = {
  name: 'The Guardian',
  domainName: 'theguardian.com',
  baseUrl: 'https://content.guardianapis.com',
  endpoint: 'search',
  defaultParams: {
    'show-fields': 'publication,trailText,headline,thumbnail,short-url',
    'show-tags': 'contributor',
    lang: 'en',
    'page-size': '10',
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
      source: () => guardianConfig.domainName,
      text: (article: any) => article.fields.trailText || '',
      title: (article: any) => article.webTitle || ''
    }
  }
}

const newsApiConfig: SourceConfigType = {
  name: 'NewsAPI',
  domainName: 'newsapi.org',
  baseUrl: 'https://newsapi.org/v2',
  endpoint: 'everything',
  defaultParams: {
    q: 'a',
    apiKey: process.env.REACT_APP_NEWSAPI_KEY || '',
    pageSize: '10'
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
      id: () => nanoid(),
      author: (article: any) => article.author || 'Unknown Author',
      category: (article: any) => article.category || '',
      date: (article: any) => new Date(article.publishedAt),
      image: (article: any) => article.urlToImage || '',
      link: (article: any) => article.url || '',
      source: () => newsApiConfig.domainName,
      text: (article: any) => article.description || '',
      title: (article: any) => article.title || ''
    }
  }
}

const nyTimesConfig: SourceConfigType = {
  name: 'The New York Times',
  domainName: 'nytimes.com',
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
      link: (article: any) => article.web_url || '',
      source: () => nyTimesConfig.domainName,
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
