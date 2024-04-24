import { ArchiveIcon } from 'lucide-react'
import React from 'react'

type ItemType<T> = {
  isLoading?: boolean
  item?: T
}

type ListProps<T> = {
  data?: T[]
  isLoading?: boolean
  renderItem: ({ item, isLoading }: ItemType<T>) => React.ReactElement
}
export const List = <T,>({ data, isLoading, renderItem }: ListProps<T>) => {
  if (!data?.length) {
    return (
      <div className="flex h-80 flex-col items-center justify-center bg-background text-muted">
        <ArchiveIcon className="size-16" />
        <h4>No Entries Found</h4>
      </div>
    )
  }

  const items = data?.map((item) => renderItem({ item, isLoading }))

  return (
    <div className="grid auto-rows-fr gap-5 lg:grid-cols-2 2xl:grid-cols-3">
      {items}
    </div>
  )
}
