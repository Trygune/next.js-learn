import { css } from '../../../styled-system/css'

const H4 = ({ children, hcolor = 'secondary' }) => {
  return (
    <h4
      className={css({
        fontSize: 'h4',
        fontWeight: 500,
        lineHeight: 'h4',
        color: hcolor,
      })}
    >
      {children}
    </h4>
  )
}
export default H4
