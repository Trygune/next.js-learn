import { css } from '../../../styled-system/css'

const H6 = ({ children, hcolor = 'secondary' }) => {
  return (
    <h6
      className={css({
        fontSize: 'h6',
        fontWeight: 400,
        lineHeight: 'h6',
        color: hcolor,
      })}
    >
      {children}
    </h6>
  )
}
export default H6
