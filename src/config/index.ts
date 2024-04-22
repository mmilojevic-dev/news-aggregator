import { List, Target } from 'lucide-react'

import { FeedSource, ThemeEnum } from '@/types'

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
    FEED: {
      LABEL: 'FEED',
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

export const FEED: { TITLE: string; SOURCE: FeedSource } = {
  TITLE: 'Feed',
  SOURCE: {
    GUARDIAN: {
      BASE_URL: 'https://content.guardianapis.com',
      ENDPOINT: 'search',
      PARAMS: {
        DEFAULT: {
          'show-fields': 'publication,trailText,headline,thumbnail,short-url',
          'show-tags': 'contributor',
          lang: 'en',
          'page-size': '5',
          'api-key': process.env.REACT_APP_GUARDIAN_API_KEY || ''
        }
      }
    },
    NEWSAPI: {
      BASE_URL: 'https://newsapi.org/v2',
      ENDPOINT: 'everything',
      PARAMS: {
        DEFAULT: {
          q: 'random',
          apiKey: process.env.REACT_APP_NEWSAPI_KEY || '',
          pageSize: '5'
        }
      }
    },
    NYTIMES: {
      BASE_URL: 'https://api.nytimes.com/svc/search/v2',
      ENDPOINT: 'articlesearch.json',
      PARAMS: {
        DEFAULT: {
          'page-size': '5',
          'api-key': process.env.REACT_APP_NYTIMES_API_KEY || ''
        }
      }
    }
  }
}

export const ERRORS = {
  GENERAL_NETWORK: 'Network Error',
  FALLBACK_TEXT: 'Ooops, something went wrong:',
  FALLBACK_BUTTON_LABEL: 'Refresh'
}
