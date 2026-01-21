import { css } from '../../../styled-system/css'

const H1 = ({ children }) => {
  return (
    <h1
      className={css({
        fontSize: 'h1',
        fontWeight: 700,
        lineHeight: 'h1',
      })}
    >
      {children}
    </h1>
  )
}
export default H1
