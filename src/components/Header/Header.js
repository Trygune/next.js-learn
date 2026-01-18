'use client'
import { css } from '../../../styled-system/css'
import Nav from '@/components/Nav/Nav'
import Link from 'next/link'
import Button from '../Button/Button'
import withlocation from '@/hoc/withlocation'
// import useLocalStorage from '../../hooks/useLocalStorage'

const Header = (props) => {
  console.log('header props ith HOC', props)

  // const [Test, setTest] = useLocalStorage('test')
  const logged = () => {
    console.log('logged')
    // setTest('this is log')
  }
  const signed = () => {
    console.log('signed')
    // setTest('this is sign')
  }
  // console.log('key', Test)

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
        <Link href="/sign">
          <Button handleclick={signed}>Sign Up</Button>
        </Link>
      </div>
    </div>
  )
}

export default withlocation(Header)
