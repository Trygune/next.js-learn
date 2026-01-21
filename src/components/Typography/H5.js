import { css } from '../../../styled-system/css'

const H5 = ({ children }) => {
  return (
    <h5
      className={css({
        fontSize: 'h5',
        fontWeight: 400,
        lineHeight: 'h5',
      })}
    >
      {children}
    </h5>
  )
}
export default H5
