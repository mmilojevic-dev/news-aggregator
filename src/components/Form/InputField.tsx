import { UseFormReturn } from 'react-hook-form'

import { Input } from '../Elements'
import { FormControl, FormField } from './Form'

export type InputFieldProps = {
  form: UseFormReturn<any>
  name: string
  placeholder: string
}

export const InputField = ({ form, name, placeholder }: InputFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormControl>
          <Input className="h-auto" placeholder={placeholder} {...field} />
        </FormControl>
      )}
    />
  )
}
