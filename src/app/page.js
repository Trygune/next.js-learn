import { circle, stack } from '../../styled-system/patterns'
import { css } from '../../styled-system/css'

const Home = async () => {
  // const data = await fetch('https://api.vercel.app/blog')
  // const posts = await data.json()

  return (
    <>
      <main>
        <h1>React Advanced Next.JS</h1>
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

          <h1 className={css({ fontSize: '2xl', fontWeight: 'bold' })}>
            Panda Is Running Hello 🐼!
          </h1>
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
