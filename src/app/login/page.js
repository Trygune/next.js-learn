'use client'
import { css } from '../../../styled-system/css'
import { InputEmail, InputPassword, Button } from '@/components'
import Form from '@/components/Form/Form'
import Image from 'next/image'
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
      <h2
        className={css({
          fontSize: '2xl',
          fontWeight: 'bold',
        })}
      >
        TryGun
      </h2>
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
