import { List, Target } from 'lucide-react'

import { FeedData, ThemeEnum } from '@/types'

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

export const FEED: { TITLE: string; DATA: FeedData } = {
  TITLE: 'Feed',
  DATA: {
    GUARDIAN: {
      QUERY_KEY: 'guardian',
      BASE_URL: 'https://content.guardianapis.com/',
      ENDPOINT: 'search',
      PARAMS: {
        API_KEY: {
          NAME: 'api-key',
          VALUE: process.env.REACT_APP_GUARDIAN_API_KEY || ''
        },
        SEARCH: {
          NAME: 'q',
          VALUE: ''
        }
      }
    },
    NEWSAPI: {
      QUERY_KEY: 'newsapi',
      BASE_URL: 'https://newsapi.org/v2/',
      ENDPOINT: 'everything',
      PARAMS: {
        API_KEY: {
          NAME: 'apiKey',
          VALUE: process.env.REACT_APP_NEWSAPI_API_KEY || ''
        },
        SEARCH: {
          NAME: 'q',
          VALUE: ''
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
