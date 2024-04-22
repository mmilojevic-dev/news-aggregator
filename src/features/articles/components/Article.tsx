import { Link } from 'react-router-dom'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components'

import { ArticleTypeUniformed } from '../types'

type ArticleProps = {
  data?: ArticleTypeUniformed
}

export const Article = ({ data }: ArticleProps) => {
  return (
    <Link to={data?.link ?? ''} target="_blank">
      <Card>
        <CardHeader>
          <CardTitle>{data?.title}</CardTitle>
          <CardDescription>{data?.date.toLocaleString()}</CardDescription>
        </CardHeader>
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
