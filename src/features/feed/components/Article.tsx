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
    <Card>
      <CardHeader>
        <CardTitle>{data?.webTitle}</CardTitle>
        <CardDescription>{data?.webPublicationDate}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{data?.webUrl}</p>
      </CardContent>
      <CardFooter>
        <p>{data?.sectionName}</p>
        <p>{data?.pillarName}</p>
      </CardFooter>
    </Card>
  )
}
