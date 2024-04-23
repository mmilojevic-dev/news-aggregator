import { DatePickerField, Form, InputField, SelectField } from '@/components'

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
        <InputField form={form} name="query" placeholder="Enter keyword" />

        <SelectField
          form={form}
          name="category"
          placeholder="Select category"
          options={[
            { label: 'Business', value: 'business' },
            { label: 'Culture', value: 'culture' },
            { label: 'Education', value: 'education' },
            { label: 'Politics', value: 'politics' },
            { label: 'Science', value: 'science' },
            { label: 'Society', value: 'society' },
            { label: 'Sport', value: 'sport' },
            { label: 'Technology', value: 'technology' }
          ]}
        />

        <DatePickerField form={form} name="fromDate" placeholder="From" />

        <DatePickerField form={form} name="toDate" placeholder="To" />
      </form>
    </Form>
  )
}
