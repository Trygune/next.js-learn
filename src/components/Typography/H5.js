import { css } from '../../../styled-system/css'

const H5 = ({ children, hcolor = 'secondary' }) => {
  return (
    <h5
      className={css({
        fontSize: 'h5',
        fontWeight: 400,
        lineHeight: 'h5',
        color: hcolor,
      })}
    >
      {children}
    </h5>
  )
}
export default H5
