import { css } from '../../../styled-system/css'

const H3 = ({ children }) => {
  return (
    <h3
      className={css({
        fontSize: 'h3',
        fontWeight: 500,
        lineHeight: 'h3',
      })}
    >
      {children}
    </h3>
  )
}
export default H3
