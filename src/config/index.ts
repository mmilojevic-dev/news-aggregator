import { List, Target } from 'lucide-react'

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
    home: {
      label: '',
      path: '',
      navItem: true,
      icon: null
    },
    articles: {
      label: 'ARTICLES',
      path: '',
      navItem: false,
      icon: List
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
