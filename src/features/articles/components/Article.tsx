import { Link } from 'react-router-dom'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components'

import { ArticleType } from '../types'

type ArticleProps = {
  data?: ArticleType
}

export const Article = ({ data }: ArticleProps) => {
  return (
    <Link to={data?.link ?? ''} target="_blank">
      <Card className="h-full transition-colors hover:border-accent">
        <CardHeader className="mx-auto flex-col items-center justify-center">
          <div className="flex w-full max-w-[345px]">
            <img src={data?.image} className="size-full object-cover" />
          </div>
        </CardHeader>
        <div className="flex flex-col gap-2 px-6">
          <CardTitle>{data?.title}</CardTitle>
          <CardDescription>{data?.date.toLocaleString()}</CardDescription>
        </div>
        <CardContent>
          <p>{data?.text}</p>
        </CardContent>
        <CardFooter className="justify-between">
          <p>{data?.author}</p>
          <p>{data?.source}</p>
        </CardFooter>
      </Card>
    </Link>
  )
}
