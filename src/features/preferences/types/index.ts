import { z } from 'zod'

import { preferencesFormSchema } from '../config'

export enum PreferencesEnum {
  Sources = 'sources',
  Categories = 'categories',
  Authors = 'authors'
}

export type PreferencesFormType = z.infer<typeof preferencesFormSchema>
