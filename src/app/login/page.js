'use client'
import { css } from '../../../styled-system/css'
import Form from '@/components/Form/Form'
import Button from '@/components/Button/Button'
import InputEmail from '@/components/InputEmail/InputEmail'
import InputPassword from '@/components/InputPassword/InputPassword'
import { usePathname } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { login } from '@/store/slices/authSlice'
import { useState } from 'react'
import { usePageTitle } from '@/hooks'
import Link from 'next/link'
import FormLogo from '@/components/FormLogo/FormLogo'

const Login = () => {
  usePageTitle('Login | TryGun')
  const dispatch = useDispatch()
  // const router = useRouter()
  const [formValue, setFormValue] = useState({})
  const inputHandleChange = (name, value) => {
    setFormValue({
      ...formValue,
      [name]: value,
    })
  }

  const pathname = usePathname()

  const loginhandleSubmit = (event) => {
    if (event) event.preventDefault()
    const userData = { id: 1, name: 'Farbod', email: 'Farbod@example.com' }

    dispatch(login(userData))

    console.log('pathname', pathname)

    //handle calling API
    console.log('Form Submitted', formValue)

    //if success
    // router.push('/')
  }
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'screen',
        flexDir: 'column',
      })}
    >
      <FormLogo>Welcome</FormLogo>
      <div
        className={css({
          maxWidth: 'lg',
          width: 'full',
        })}
      >
        <Form handleSubmit={loginhandleSubmit}>
          <InputEmail onChange={(value) => inputHandleChange('email', value)} />
          <InputPassword
            onChange={(value) => inputHandleChange('password', value)}
            inplaceholder={'Enter Your Password...'}
          />
          <Button visual="primary" widthSize={'full'} type="submit">
            Submit
          </Button>
          <div
            className={css({
              display: 'flex',
              flexDir: 'column',
              textDecoration: 'underline',
            })}
          >
            <Link href="/register">Sign Up</Link>
            <Link href="/forgot">Forgot your password?</Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login
