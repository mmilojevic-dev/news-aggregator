import { ContentLayout } from '@/components'

import PreferencesForm from '../components/PreferencesForm'
import { preferencesConfig } from '../config'

export const Preferences = () => {
  return (
    <ContentLayout title={preferencesConfig.title}>
      <div className="mx-auto mt-4 max-w-xl">
        <PreferencesForm />
      </div>
    </ContentLayout>
  )
}
