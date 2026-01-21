'use client'
import { css } from '../../../styled-system/css'
import Nav from '@/components/Nav/Nav'
import Link from 'next/link'
import Button from '../Button/Button'
import withlocation from '@/hoc/withlocation'
import { useLocalStorage } from '@/hooks'

const Header = (props) => {
  const [myvalue, setMyValue] = useLocalStorage('Hook Test')

  console.log('header props ith HOC', props)

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
    <div
      className={css({
        width: 'full',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: '8',
        py: '3.5',
        shadow: 'sm',
      })}
    >
      <Nav />
      <div className={css({ display: 'flex', gap: '3' })}>
        <Link href="/login">
          <Button handleclick={logged}>Login</Button>
        </Link>
        <Link href="/register">
          <Button handleclick={signed}>Sign Up</Button>
        </Link>
      </div>
    </div>
  )
}

export default withlocation(Header)
