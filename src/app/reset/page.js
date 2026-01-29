'use client'
import { css } from '../../../styled-system/css'
import Form from '@/components/Form/Form'
import Button from '@/components/Button/Button'
import InputPassword from '@/components/InputPassword/InputPassword'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { usePageTitle } from '@/hooks'
import FormLogo from '@/components/FormLogo/FormLogo'

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
      <FormLogo>Reset Your Password</FormLogo>
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
