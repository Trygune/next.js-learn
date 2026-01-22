'use client'
import { css } from '../../../styled-system/css'
import Form from '@/components/Form/Form'
import Button from '@/components/Button/Button'
import InputEmail from '@/components/InputEmail/InputEmail'
import InputPassword from '@/components/InputPassword/InputPassword'
import Image from 'next/image'
import { H2, Space } from '@/components/Typography'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { usePageTitle } from '@/hooks'
import Link from 'next/link'

const Login = () => {
  usePageTitle('Login | TryGun')

  const router = useRouter()
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
    console.log('pathname', pathname)

    //handle calling API
    console.log('Form Submitted', formValue)

    //if success
    router.push('/')
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
      <Image
        src="/trygun.PNG"
        alt="logo"
        width={100}
        height={100}
        loading="eager"
      />
      <Space sp="1" />
      <H2>Welcome</H2>
      <Space />
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
          <Button w={'full'} type="submit">
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
