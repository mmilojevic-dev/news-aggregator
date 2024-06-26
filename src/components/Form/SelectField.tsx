import { UseFormReturn } from 'react-hook-form'

import { OptionType } from '@/types'
import { cn } from '@/utils'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../Elements'
import { FormControl, FormField } from './Form'

export type SelectFieldProps = {
  form: UseFormReturn<any>
  name: string
  placeholder: string
  options: OptionType[]
  className?: string
}

export const SelectField = ({
  form,
  name,
  placeholder,
  options
}: SelectFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <Select
          disabled={!options.length}
          onValueChange={field.onChange}
          defaultValue={field.value}
        >
          <FormControl>
            <SelectTrigger
              className={cn(!field.value && 'text-muted-foreground')}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  )
}
