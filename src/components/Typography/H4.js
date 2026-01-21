import { css } from '../../../styled-system/css'

const H4 = ({ children }) => {
  return (
    <h4
      className={css({
        fontSize: 'h4',
        fontWeight: 500,
        lineHeight: 'h4',
      })}
    >
      {children}
    </h4>
  )
}
export default H4
