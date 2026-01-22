import { css } from '../../../styled-system/css'

const H2 = ({ children, hcolor = 'secondary' }) => {
  return (
    <h2
      className={css({
        fontSize: 'h2',
        fontWeight: 600,
        lineHeight: 'h2',
        color: hcolor,
      })}
    >
      {children}
    </h2>
  )
}
export default H2
