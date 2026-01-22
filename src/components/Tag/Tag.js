import { css } from '../../../styled-system/css'

const Tag = ({ children, size = 'xs' }) => (
  <span
    className={css({
      fontSize: size,
      fontWeight: 'medium',
      color: 'gray.600',
    })}
  >
    {children}
  </span>
)

export default Tag
