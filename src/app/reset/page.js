'use client'
import { css } from '../../../styled-system/css'
import Form from '@/components/Form/Form'
import Button from '@/components/Button/Button'
import InputPassword from '@/components/InputPassword/InputPassword'
import Image from 'next/image'
import { H2, Space } from '@/components/Typography'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { usePageTitle } from '@/hooks'

const Reset = () => {
  usePageTitle('Reset | TryGun')

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
    console.log('Form Submitted', formValue)
    console.log('pathname', pathname)
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
      {
        <Image
          src="/trygun.PNG"
          alt="logo"
          width={100}
          height={100}
          loading="eager"
        />
      }
      <Space sp="1" />
      <H2>Reset Your Password</H2>
      <Space />
      <div
        className={css({
          maxWidth: 'lg',
          width: 'full',
        })}
      >
        <Form handleSubmit={loginhandleSubmit}>
          <InputPassword
            onChange={(value) => inputHandleChange('password', value)}
            inplaceholder={'Enter Your Password...'}
          />
          <InputPassword
            onChange={(value) => inputHandleChange('password', value)}
            inplaceholder={'Enter Your Password Again...'}
          />
          <Button visual="primary" widthSize={'full'} type="submit">
            Reset Password
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Reset
