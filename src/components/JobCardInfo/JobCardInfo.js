import { css } from '../../../styled-system/css'

const JobCardInfo = ({ children }) => (
  <div
    className={css({
      w: 'full',
      h: 'full',
      breakInside: 'avoid',
    })}
  >
    {children}
  </div>
)

export default JobCardInfo
