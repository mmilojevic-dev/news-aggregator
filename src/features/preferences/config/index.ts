import { z } from 'zod'

export const preferencesFormSchema = z.object({
  sources: z.array(z.string()).refine((value) => value.some((item) => item)),
  categories: z.array(z.string()).refine((value) => value.some((item) => item)),
  authors: z.array(z.string())
})

export const preferencesConfig = {
  title: 'Preferences',
  localStorageKey: 'preferences',
  formschema: preferencesFormSchema
}
