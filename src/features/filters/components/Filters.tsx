import { UseFormReturn } from 'react-hook-form'

import { DatePickerField, Form, InputField, SelectField } from '@/components'

import {
  authorFilterConfig,
  categoryFilterConfig,
  fromDateFilterConfig,
  searchFilterConfig,
  sourceFilterConfig,
  toDateFilterConfig
} from '../config'
import { usePreferredOptions } from '../hooks'
import { FiltersFormSchemaType } from '../types'

type FiltersProps = {
  form: UseFormReturn<FiltersFormSchemaType>
}

export const Filters = ({ form }: FiltersProps) => {
  const { preferredCategories, preferredSources, preferredAuthors } =
    usePreferredOptions()

  return (
    <Form {...form}>
      <form className="flex flex-col gap-y-2">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <InputField
            form={form}
            name={searchFilterConfig.name}
            placeholder={searchFilterConfig.placeholder}
          />
          <SelectField
            form={form}
            name={categoryFilterConfig.name}
            placeholder={categoryFilterConfig.placeholder}
            options={preferredCategories}
          />
          <SelectField
            form={form}
            name={sourceFilterConfig.name}
            placeholder={sourceFilterConfig.placeholder}
            options={preferredSources}
          />
          <DatePickerField
            form={form}
            name={fromDateFilterConfig.name}
            placeholder={fromDateFilterConfig.placeholder}
          />
          <DatePickerField
            form={form}
            name={toDateFilterConfig.name}
            placeholder={toDateFilterConfig.placeholder}
          />
          <SelectField
            form={form}
            name={authorFilterConfig.name}
            placeholder={authorFilterConfig.placeholder}
            options={preferredAuthors!}
          />
        </div>
      </form>
    </Form>
  )
}
