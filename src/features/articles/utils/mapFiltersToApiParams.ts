import { FiltersFormSchemaType } from '../types'

export const mapFiltersToApiParams = (
  filters: FiltersFormSchemaType,
  source: string
): Record<string, string> => {
  switch (source) {
    case 'GUARDIAN':
      return {
        q: filters.search || '',
        'from-date': filters.fromDate?.toISOString().split('T')[0] || '',
        'to-date': filters.toDate?.toISOString().split('T')[0] || '',
        section: filters.category || ''
      }
    // case 'NEWSAPI':
    //   return {
    //     q: filters.keyword,
    //     from: filters.fromDate?.toISOString() ,
    //     to: filters.toDate?.toISOString(),
    //     category: filters.categories?.[0] || '',
    //     apiKey: process.env.REACT_APP_NEWSAPI_KEY || '',
    //     pageSize: '10'
    //   }
    // case 'NYTIMES':
    //   return {
    //     q: filters.keyword,
    //     begin_date: filters.fromDate?.toISOString().replace(/-/g, ''),
    //     end_date: filters.toDate?.toISOString().replace(/-/g, ''),
    //     fq: `news_desk:(${filters.categories?.join(' OR ')})`,
    //     'api-key': process.env.REACT_APP_NYTIMES_API_KEY || ''
    //   }
    default:
      return {}
  }
}
