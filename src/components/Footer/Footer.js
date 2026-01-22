import { css } from '../../../styled-system/css'
import Link from 'next/link'
import Container from '../Container/Container'

const Footer = () => {
  return (
    <div
      className={css({
        width: 'full',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        py: '3.5',
        shadow: 'inset-sm',
      })}
    >
      <Container>
        <div className={css({ display: 'flex', gap: '3' })}>
          <Link href="/">About</Link>
          <Link href="/">Contact Us</Link>
        </div>
      </Container>
    </div>
  )
}

export default Footer
