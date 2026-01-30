'use client'
import { css } from '../../../styled-system/css'
import Form from '@/components/Form/Form'
import Button from '@/components/Button/Button'
import InputEmail from '@/components/InputEmail/InputEmail'
import InputPassword from '@/components/InputPassword/InputPassword'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { usePageTitle } from '@/hooks'
import InputName from '@/components/InputName/InputName'
import Link from 'next/link'
import FormLogo from '@/components/FormLogo/FormLogo'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '@/store/slices/authSlice'

const Resgister = () => {
  usePageTitle('SignUp | TryGun')

  const pathname = usePathname()

  const { isLoggedIn, loading } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const router = useRouter()

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
      registerUser({
        name: formValue.name,
        email: formValue.email,
        password: formValue.password,
        role: 'user',
      })
    )

    //handle calling API
    console.log('Form Submitted', formValue)

    //if not success
    if (!registerUser.fulfilled.match(result) || !result.payload) {
      console.log('Registration failed')
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
          <Button
            visual="primary"
            widthSize={'full'}
            type="submit"
            isdisabled={loading}
          >
            Register
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
