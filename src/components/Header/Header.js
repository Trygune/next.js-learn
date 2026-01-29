'use client'
import { css } from '../../../styled-system/css'
import Nav from '@/components/Nav/Nav'
import withlocation from '@/hoc/withlocation'
import { H2, H4, Space } from '../Typography'
import Link from 'next/link'
import Button from '../Button/Button'
import Container from '../Container/Container'
import { useSelector } from 'react-redux'

const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.auth)

  return (
    <div
      className={css({
        width: 'full',
        backgroundColor: 'whitesmoke',
      })}
    >
      <Container>
        <Space sp="1" />
        <Nav />
        <Space sp="1" />
        <div
          className={css({
            width: 'md',
            mx: 'auto',
            display: 'flex',
            flexDir: 'column',
            alignItems: 'center',
            textAlign: 'justify',
            textAlignLast: 'center',
            spaceY: '1',
          })}
        >
          <H2>Let&apos;s TryGun</H2>
          <Space sp="2" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            fuga tempore dolores in recusandae maiores ipsam, omnis nisi non
            dolor?
          </p>
          <Space sp="1" />
          {!isLoggedIn && (
            <Link href="/register">
              <Button
                handleclick={
                  () => {}
                  //signed
                }
                visual="primary"
                widthSize={'md'}
              >
                Sign Up
              </Button>
            </Link>
          )}
          {isLoggedIn && <H4> Welcome! </H4>}
        </div>
        <Space sp="5" />
      </Container>
    </div>
  )
}

export default withlocation(Header)
