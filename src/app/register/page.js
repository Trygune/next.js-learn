'use client'
import { css } from '../../../styled-system/css'
import Form from '@/components/Form/Form'
import Button from '@/components/Button/Button'
import InputEmail from '@/components/InputEmail/InputEmail'
import InputPassword from '@/components/InputPassword/InputPassword'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { usePageTitle } from '@/hooks'
import InputName from '@/components/InputName/InputName'
import Link from 'next/link'
import FormLogo from '@/components/FormLogo/FormLogo'

const Resgister = () => {
  usePageTitle('SignUp | TryGun')

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
      <FormLogo>Sign Up</FormLogo>
      <div
        className={css({
          maxWidth: 'lg',
          width: 'full',
        })}
      >
        <Form handleSubmit={loginhandleSubmit}>
          <InputName onChange={(value) => inputHandleChange('name', value)} />
          <InputEmail onChange={(value) => inputHandleChange('email', value)} />
          <InputPassword
            onChange={(value) => inputHandleChange('password', value)}
            inplaceholder={'Enter Your Password...'}
          />
          <Button visual="primary" widthSize={'full'} type="submit">
            Resgister
          </Button>
          <div
            className={css({
              textDecoration: 'underline',
            })}
          >
            <Link href="/login">Already have an acount?</Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Resgister
