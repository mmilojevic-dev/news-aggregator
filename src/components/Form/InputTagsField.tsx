import { UseFormReturn } from 'react-hook-form'

import { InputTags } from '../Elements'
import { FormControl, FormField, FormItem, FormMessage } from './Form'

export type InputTagsFieldProps = {
  form: UseFormReturn<any>
  name: string
  placeholder: string
}

export const InputTagsField = ({
  form,
  name,
  placeholder
}: InputTagsFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <InputTags {...field} placeholder={placeholder} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
