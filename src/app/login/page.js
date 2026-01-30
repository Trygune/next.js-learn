'use client'
import { css } from '../../../styled-system/css'
import Form from '@/components/Form/Form'
import Button from '@/components/Button/Button'
import InputEmail from '@/components/InputEmail/InputEmail'
import InputPassword from '@/components/InputPassword/InputPassword'
import { usePathname, useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '@/store/slices/authSlice'
import { useEffect, useState } from 'react'
import { usePageTitle } from '@/hooks'
import Link from 'next/link'
import FormLogo from '@/components/FormLogo/FormLogo'

const Login = () => {
  usePageTitle('Login | TryGun')

  const pathname = usePathname()

  const dispatch = useDispatch()
  const router = useRouter()

  const { isLoggedIn, loading } = useSelector((state) => state.auth)

  const [formValue, setFormValue] = useState({})
  const inputHandleChange = (name, e) => {
    const value = e.target ? e.target.value : e
    setFormValue({
      ...formValue,
      [name]: value,
    })
  }

  const loginhandleSubmit = async (event) => {
    if (event) event.preventDefault()
    console.log('pathname', pathname)

    // used logger
    const result = await dispatch(
      loginUser({
        email: formValue.email,
        password: formValue.password,
      })
    )

    //handle calling API
    console.log('Checking form values:', formValue)

    // used logger also
    console.log('Result from Redux:', result.payload)

    //if not success
    if (!loginUser.fulfilled.match(result) || !result.payload) {
      console.log('email or password is incorrect')
    }
  }

  useEffect(() => {
    //if success
    if (isLoggedIn) {
      console.log('Login Success, Redirecting...')
      router.push('/')
    }
  }, [isLoggedIn, router])

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
          <Button
            visual="primary"
            widthSize={'full'}
            type="submit"
            isdisabled={loading}
          >
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
