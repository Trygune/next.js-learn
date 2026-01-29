import Image from 'next/image'
import { H2, Space } from '../Typography'
import Link from 'next/link'

const FormLogo = ({ children }) => {
  return (
    <>
      <Link href={'/'}>
        <Image
          src="/trygun.PNG"
          alt="logo"
          width={100}
          height={100}
          loading="eager"
        />
      </Link>
      <Space sp="1" />
      <H2>{children}</H2>
      <Space />
    </>
  )
}
export default FormLogo
