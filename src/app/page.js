import { circle, stack } from '../../styled-system/patterns'
import { H1, H3, Space } from '@/components/Typography'

const Home = async () => {
  // const data = await fetch('https://api.vercel.app/blog')
  // const posts = await data.json()

  return (
    <>
      <main>
        <Space sp="4" />
        <H1>React Advanced Next.JS</H1>
        <div
          className={stack({
            align: 'center',
            justify: 'center',
            h: 'screen',
            gap: '8',
          })}
        >
          <div
            className={circle({
              size: '100px',
              bg: 'orange.400',
              color: 'white',
            })}
          >
            CSS
          </div>

          <H3>Panda Is Running Hello 🐼!</H3>
        </div>
        {/* <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul> */}
      </main>
    </>
  )
}

export default Home
