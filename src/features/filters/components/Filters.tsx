import { UseFormReturn } from 'react-hook-form'

import { DatePickerField, Form, InputField, SelectField } from '@/components'

import {
  categoryFilterConfig,
  fromDateFilterConfig,
  searchFilterConfig,
  sourceFilterConfig,
  toDateFilterConfig
} from '../config'
import { useFilterOptions } from '../hooks'
import { FiltersFormSchemaType } from '../types'

type FiltersProps = {
  form: UseFormReturn<FiltersFormSchemaType>
}

export const Filters = ({ form }: FiltersProps) => {
  const { filteredCategories, filteredSources } = useFilterOptions()

  return (
    <Form {...form}>
      <form className="flex flex-col gap-y-2">
        <div className="grid grid-cols-3 gap-x-2">
          <InputField
            form={form}
            name={searchFilterConfig.name}
            placeholder={searchFilterConfig.placeholder}
          />
          <SelectField
            form={form}
            name={categoryFilterConfig.name}
            placeholder={categoryFilterConfig.placeholder}
            options={filteredCategories}
          />
          <SelectField
            form={form}
            name={sourceFilterConfig.name}
            placeholder={sourceFilterConfig.placeholder}
            options={filteredSources}
          />
        </div>
        <div className="grid grid-cols-3 gap-x-2">
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
        </div>
      </form>
    </Form>
  )
}
