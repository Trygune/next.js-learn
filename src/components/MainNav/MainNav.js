import Link from 'next/link'
import { css } from '../../../styled-system/css'

const MainNav = (props) => {
  console.log('header props ith HOC', props)

  return (
    <header
      className={css({
        width: 'full',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: '5',
        shadow: 'sm',
        gap: '4',
      })}
    >
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/blog/first-post">First Post</Link>
      <Link href="/blog/second-post">Second Post</Link>
    </header>
  )
}

export default MainNav
