import { UseFormReturn } from 'react-hook-form'

import { OptionType } from '@/types'

import { Checkbox, Label } from '../Elements'
import { FormControl, FormField, FormItem } from './Form'

export type CheckboxGroupFieldProps = {
  form: UseFormReturn<any>
  name: string
  placeholder: string
  options: OptionType[]
}

export const CheckboxGroupField = ({
  form,
  name,
  options
}: CheckboxGroupFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem>
          {options.map((option) => (
            <FormField
              key={option.value}
              control={form.control}
              name={name}
              render={({ field }) => {
                return (
                  <FormItem
                    key={option.value}
                    className="flex flex-row items-center space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(option.value)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, option.value])
                            : field.onChange(
                                field.value?.filter(
                                  (value: string) => value !== option.value
                                )
                              )
                        }}
                      />
                    </FormControl>
                    <Label className="text-sm font-normal">
                      {option.label}
                    </Label>
                  </FormItem>
                )
              }}
            />
          ))}
        </FormItem>
      )}
    />
  )
}
