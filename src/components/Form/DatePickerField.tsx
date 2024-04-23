'use client'

import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'
import { UseFormReturn } from 'react-hook-form'

import { cn } from '@/utils'

import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger
} from '../Elements'
import { FormControl, FormField, FormItem } from './Form'

type DatePickerField = {
  form: UseFormReturn<any>
  name: string
  placeholder: string
}

export const DatePickerField = ({
  form,
  name,
  placeholder
}: DatePickerField) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  className={cn(
                    'w-full text-left font-normal',
                    !field.value && 'text-muted-foreground',
                    'hover:bg-transparent'
                  )}
                >
                  <CalendarIcon className="mr-2 size-4" />
                  {field.value ? (
                    format(field.value, 'PPP')
                  ) : (
                    <span>{placeholder}</span>
                  )}
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="flex w-auto flex-col space-y-2 p-2"
            >
              <div className="rounded-md border">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                />
              </div>
            </PopoverContent>
          </Popover>
        </FormItem>
      )}
    />
  )
}
