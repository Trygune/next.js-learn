import { H1 } from '@/components/Typography'

const article = async ({ params }) => {
  const { slug } = await params
  console.log('url name slug: ', slug)

  return (
    <div>
      <H1>{slug} Page</H1>
    </div>
  )
}

export default article
