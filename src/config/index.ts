import { List, Settings, Target } from 'lucide-react'

import { ThemeEnum } from '@/types'

export const appDefaultConfig = {
  author: 'Miloš Milojević',
  description:
    'News aggregator website that pulls articles from various sources and displays them in a clean, easy-to-read format.',
  title: 'News Aggregator',
  version: '1.0.0',
  github: 'https://github.com/mmilojevic-dev/news-aggregator',
  logo: Target
}

export const routesConfig = {
  public: {
    feed: {
      label: '',
      path: 'feed',
      navItem: false,
      icon: null
    },
    articles: {
      label: 'FEED',
      path: '',
      navItem: true,
      icon: List
    },
    preferences: {
      label: 'PREFERENCES',
      path: 'preferences',
      navItem: true,
      icon: Settings
    }
  }
}

export const themeConfig = {
  togglerLabel: 'Toggle theme',
  initial: ThemeEnum.System,
  localStorageKey: 'theme'
}

export const errorsConfig = {
  errorTitle: 'Network Error',
  fallbackText: 'Ooops, something went wrong:',
  fallbackButtonLabel: 'Refresh'
}
