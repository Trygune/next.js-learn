import Image from 'next/image'
import { css } from '../../../styled-system/css'
import Link from 'next/link'
import Button from '../Button/Button'
import { useLocalStorage } from '@/hooks'

const Nav = () => {
  const [myvalue, setMyValue] = useLocalStorage('Hook Test')

  const logged = () => {
    console.log('logged clicked')
    setMyValue('This is Log in')
  }
  const signed = () => {
    console.log('signed clicked')
    setMyValue('This is Sign in')
  }
  console.log('key', myvalue)
  return (
    <nav
      className={css({
        width: 'full',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '4',
      })}
    >
      <Link href="/">
        <Image
          src="/code.png"
          alt="logo"
          width={130}
          height={130}
          loading="eager"
        />
      </Link>
      <div className={css({ display: 'flex', gap: '3' })}>
        <Link href="/login">
          <Button handleclick={logged} visual="secondary" widthSize={'medium'}>
            Login
          </Button>
        </Link>
        <Link href="/register">
          <Button handleclick={signed}>Sign Up</Button>
        </Link>
      </div>
    </nav>
  )
}

export default Nav
