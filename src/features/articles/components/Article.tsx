import { Link } from 'react-router-dom'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle
} from '@/components'

import { ArticleType } from '../types'

type ArticleProps = {
  data?: ArticleType
}

const Article = ({ data }: ArticleProps) => {
  return (
    <Link to={data?.link || '#'} target="_blank" className="block">
      <Card className="flex h-full flex-col gap-4 transition-colors hover:border-accent">
        <CardHeader className="h-48 overflow-hidden p-0">
          <CardImage
            src={data?.image}
            alt={data?.title}
            className="rounded-lg"
          />
        </CardHeader>
        <CardContent className="grow">
          <CardTitle className="leading-5">{data?.title}</CardTitle>
          <p className="mt-2">{data?.date.toLocaleString()}</p>
          <CardDescription className="line-clamp-5">
            {data?.text}
          </CardDescription>
        </CardContent>
        <CardFooter className="mt-auto flex justify-between">
          <p className="text-sm">{data?.author}</p>
          <p className="text-sm">{data?.source}</p>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default Article
