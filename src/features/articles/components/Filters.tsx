import { DatePickerField, Form, InputField, SelectField } from '@/components'

import {
  categoryFilterConfig,
  fromDateFilterConfig,
  searchFilterConfig,
  toDateFilterConfig
} from '../config'
import { useFilters } from '../hooks/useFilters'
import { FiltersFormSchemaType } from '../types'

type FiltersProps = {
  onFilterChange: (data: FiltersFormSchemaType) => void
}

export const Filters = ({ onFilterChange }: FiltersProps) => {
  const { form } = useFilters(onFilterChange)

  return (
    <Form {...form}>
      <form className="grid grid-cols-2 gap-2 md:grid-cols-4">
        <InputField
          form={form}
          name={searchFilterConfig.name}
          placeholder={searchFilterConfig.placeholder}
        />
        <SelectField
          form={form}
          name={categoryFilterConfig.name}
          placeholder={categoryFilterConfig.placeholder}
          options={categoryFilterConfig.options!}
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
      </form>
    </Form>
  )
}
