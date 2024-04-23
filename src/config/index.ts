import { List, Target } from 'lucide-react'
import { z } from 'zod'

import { ArticlesConfigType } from '@/features/articles'
import { ThemeEnum } from '@/types'

export const APP_DEFAULT = {
  AUTHOR: 'Miloš Milojević',
  DESCRIPTION:
    'News aggregator website that pulls articles from various sources and displays them in a clean, easy-to-read format.',
  TITLE: 'News Aggregator',
  VERSION: '1.0.0',
  GITHUB_REPO_URL: 'https://github.com/mmilojevic-dev/news-aggregator',
  LOGO: Target
}

export const ROUTES = {
  PUBLIC: {
    NEWS: {
      LABEL: '',
      PATH: 'news',
      NAV_ITEM: true,
      ICON: null
    },
    ARTICLES: {
      LABEL: 'ARTICLES',
      PATH: '',
      NAV_ITEM: false,
      ICON: List
    }
  }
}

export const THEME = {
  TOGGLER_LABEL: 'Toggle theme',
  INITIAL: ThemeEnum.System,
  LOCAL_STORAGE_KEY: 'theme'
}

export const articlesConfig: ArticlesConfigType = {
  title: 'Articles',
  filters: {
    search: {
      name: 'search',
      placeholder: 'Search articles...'
    },
    category: {
      name: 'category',
      placeholder: 'Select category...',
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
    },
    fromDate: {
      name: 'fromDate',
      placeholder: 'From (Month Day, Year)...'
    },
    toDate: {
      name: 'toDate',
      placeholder: 'To (Month Day, Year)...'
    }
  },
  sources: {
    guardian: {
      baseUrl: 'https://content.guardianapis.com',
      endpoint: 'search',
      params: {
        'show-fields': 'publication,trailText,headline,thumbnail,short-url',
        'show-tags': 'contributor',
        lang: 'en',
        'page-size': '5',
        'api-key': process.env.REACT_APP_GUARDIAN_API_KEY || ''
      }
    },
    newsApi: {
      baseUrl: 'https://newsapi.org/v2',
      endpoint: 'everything',
      params: {
        q: 'random',
        apiKey: process.env.REACT_APP_NEWSAPI_KEY || '',
        pageSize: '5'
      }
    },
    nyTimes: {
      baseUrl: 'https://api.nytimes.com/svc/search/v2',
      endpoint: 'articlesearch.json',
      params: {
        'page-size': '5',
        'api-key': process.env.REACT_APP_NYTIMES_API_KEY || ''
      }
    }
  }
}

export const filtersFormSchema = z.object({
  query: z.string().optional(),
  fromDate: z.date().optional(),
  toDate: z.date().optional(),
  category: z.string().optional()
})

export const ERRORS = {
  GENERAL_NETWORK: 'Network Error',
  FALLBACK_TEXT: 'Ooops, something went wrong:',
  FALLBACK_BUTTON_LABEL: 'Refresh'
}
