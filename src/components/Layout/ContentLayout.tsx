import * as React from 'react'

type ContentLayoutProps = {
  children: React.ReactNode
  title: string
}

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <div className="h-[calc(100vh-4rem)] py-6">
        <div className="mx-auto mb-1 max-w-7xl px-4 md:mb-2 md:px-6 lg:mb-4 lg:px-8">
          <h1 className="text-2xl font-semibold text-foreground/70">{title}</h1>
        </div>
        <div className="mx-auto max-w-7xl p-4 md:p-6 lg:p-8">{children}</div>
      </div>
    </>
  )
}
