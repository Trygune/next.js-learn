'use client'
import { css } from '../../../styled-system/css'
import { Nav } from '@/components'
import Link from 'next/link'
import Button from '../Button/Button'
import withlocation from '@/hoc/withlocation'
import useLocalStorage from '../../hooks/useLocalStorage'

const Header = (props) => {
  const [name, setName] = useLocalStorage('sample')

  console.log('header props ith HOC', props)

  const logged = () => {
    console.log('logged clicked')
    setName('Hook Test')
  }
  const signed = () => {
    console.log('signed clicked')
    setName('this is sign')
  }
  console.log('key', name)

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
        <Link href="/login">
          <Button handleclick={signed}>Sign Up</Button>
        </Link>
      </div>
    </div>
  )
}

export default withlocation(Header)
