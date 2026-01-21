'use client'
import { css } from '../../../styled-system/css'
import Form from '@/components/Form/Form'
import Button from '@/components/Button/Button'
import InputEmail from '@/components/InputEmail/InputEmail'
import Image from 'next/image'
import { H2, Space } from '@/components/Typography'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { usePageTitle } from '@/hooks'

const Forgot = () => {
  usePageTitle('Forgot | TryGun')

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
      <H2>Forgot Your Password?</H2>
      <Space />
      <div
        className={css({
          maxWidth: 'lg',
          width: 'full',
        })}
      >
        <Form handleSubmit={loginhandleSubmit}>
          <InputEmail onChange={(value) => inputHandleChange('email', value)} />
          <Button w={'full'} type="submit">
            Send Password Change Request
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Forgot
