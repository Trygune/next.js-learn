import Image from 'next/image'
import { css } from '../../styled-system/css'

const LayoutAuth = ({ children }) => {
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
      <div>
        {<Image src="/trygun.PNG" alt="logo" width={100} height={100} />}
      </div>
      <h2
        className={css({
          fontSize: '2xl',
          fontWeight: 'bold',
        })}
      >
        TryGun
      </h2>
      <div>{children}</div>
    </div>
  )
}

export default LayoutAuth
