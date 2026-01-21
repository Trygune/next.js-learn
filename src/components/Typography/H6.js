import { css } from '../../../styled-system/css'

const H6 = ({ children }) => {
  return (
    <h6
      className={css({
        fontSize: 'h6',
        fontWeight: 400,
        lineHeight: 'h6',
      })}
    >
      {children}
    </h6>
  )
}
export default H6
