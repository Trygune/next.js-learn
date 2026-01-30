'use client' // فقط این بخش کلاینت می‌شود

import { css } from '../../../styled-system/css'
import { useSelector, useDispatch } from 'react-redux'
import { LOGOUT_ACTION } from '@/store/slices/authSlice'
import Link from 'next/link'
import Button from '../Button/Button'
import { Space } from '../Typography'

const UserMenu = () => {
  const { isLoggedIn } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const loggedout = () => {
    console.log('logged out clicked')
    dispatch(LOGOUT_ACTION())
  }

  return (
    <div className={css({ textAlign: 'center' })}>
      {!isLoggedIn ? (
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
      ) : (
        <>
          <Space sp="1" />
          <Button visual="primary" widthSize={'md'} onClick={loggedout}>
            Log Out
          </Button>
        </>
      )}
    </div>
  )
}

export default UserMenu
