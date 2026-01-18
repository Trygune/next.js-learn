const article = async ({ params }) => {
  const { slug } = await params
  console.log('url name slug: ', slug)

  return (
    <div>
      <h1>{slug} Page</h1>
    </div>
  )
}

export default article
