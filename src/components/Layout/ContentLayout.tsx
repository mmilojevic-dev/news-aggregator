import * as React from 'react'

type ContentLayoutProps = {
  children: React.ReactNode
  title: string
}

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <div className="h-[calc(100vh-4rem)] py-6">
        <div className="mx-auto mb-4 max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-foreground/70">{title}</h1>
        </div>
        <div className="mx-auto max-w-7xl p-4 sm:p-6 md:p-8">{children}</div>
      </div>
    </>
  )
}
