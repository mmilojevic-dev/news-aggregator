import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import { CheckboxGroupField, Form, InputTagsField } from '@/components'
import { categoryFilterConfig, sourceFilterConfig } from '@/features/filters'
import { useDebounce } from '@/hooks' // Make sure the path is correct
import { selectPreferences, setPreferences } from '@/store/preferencesSlice'

import { preferencesFormSchema } from '../config'

const PreferencesForm = () => {
  const dispatch = useDispatch()
  const preferences = useSelector(selectPreferences)
  const form = useForm({
    resolver: zodResolver(preferencesFormSchema),
    defaultValues: preferences
  })

  const watchedPreferences = form.watch()
  const debouncedPreferences = useDebounce(watchedPreferences)

  React.useEffect(() => {
    dispatch(setPreferences(debouncedPreferences))
  }, [debouncedPreferences, dispatch])

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit((data) => {
          dispatch(setPreferences(data))
        })}
      >
        <InputTagsField form={form} name="authors" placeholder="Add Authors" />

        <div className="flex justify-center gap-6">
          <CheckboxGroupField
            form={form}
            name="categories"
            placeholder="Select Categories"
            options={categoryFilterConfig.options!}
          />
          <CheckboxGroupField
            form={form}
            name="sources"
            placeholder="Select Sources"
            options={sourceFilterConfig.options!}
          />
        </div>
      </form>
    </Form>
  )
}

export default PreferencesForm
