'use client'
import { css } from '../../../styled-system/css'
import LayoutAuth from '@/container/LayoutAuth'
import { InputEmail, InputPassword, Button } from '@/components'

const Login = () => {
  const handleSubmit = (event) => {
    if (event) event.preventDefault()
    console.log('Submitted')
  }
  return (
    <LayoutAuth>
      <>
        <form onSubmit={handleSubmit} className={css({ spaceY: '2', mt: '3' })}>
          <InputEmail />
          <InputPassword />
          <Button w={'full'} type="submit">
            Submit
          </Button>
        </form>
      </>
    </LayoutAuth>
  )
}

export default Login
