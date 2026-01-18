import Link from 'next/link'
import { css } from '../../../styled-system/css'

const Nav = () => {
  return (
    <header className={css({ display: 'flex', gap: '4' })}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/blog/first-post">First Post</Link>
      <Link href="/blog/second-post">Second Post</Link>
    </header>
  )
}

export default Nav
