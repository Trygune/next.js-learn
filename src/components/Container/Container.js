import { css } from '../../../styled-system/css'

const Container = ({ children }) => (
  <div
    className={css({
      width: '7xl',
      backgroundColor: 'transparent',
      mx: 'auto',
    })}
  >
    {children}
  </div>
)

export default Container
