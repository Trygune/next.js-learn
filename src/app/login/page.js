'use client'
import { css } from '../../../styled-system/css'
import Form from '@/components/Form/Form'
import Button from '@/components/Button/Button'
import InputEmail from '@/components/InputEmail/InputEmail'
import InputPassword from '@/components/InputPassword/InputPassword'
import Image from 'next/image'
import { H2 } from '@/components/Typography'
import { usePathname } from 'next/navigation'

const Login = () => {
  const pathname = usePathname()
  console.log(pathname)

  const loginhandleSubmit = (event) => {
    if (event) event.preventDefault()
    console.log('Submitted')
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
      <H2>Welcome</H2>
      <Form handleSubmit={loginhandleSubmit}>
        <InputEmail />
        <InputPassword />
        <Button w={'full'} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Login
