import { UseFormReturn } from 'react-hook-form'

import {
  Button,
  DatePickerField,
  Form,
  InputField,
  SelectField
} from '@/components'

import {
  categoryFilterConfig,
  fromDateFilterConfig,
  searchFilterConfig,
  sourceFilterConfig,
  toDateFilterConfig
} from '../config'
import { FiltersFormSchemaType } from '../types'

type FiltersProps = {
  form: UseFormReturn<FiltersFormSchemaType>
}

export const Filters = ({ form }: FiltersProps) => {
  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    form.reset()
  }

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
            options={categoryFilterConfig.options!}
          />
          <SelectField
            form={form}
            name={sourceFilterConfig.name}
            placeholder={sourceFilterConfig.placeholder}
            options={sourceFilterConfig.options!}
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
          <div className="text-right">
            <Button onClick={handleReset}>Reset</Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
