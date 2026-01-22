import { css } from '../../../styled-system/css'
import LineBorder from '../LineBorder/LineBorder'
import Tag from '../Tag/Tag'

const JobCardDate = ({ children }) => (
  <>
    <div
      className={css({
        w: 'full',
        h: 'full',
        display: 'flex',
        breakInside: 'avoid',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <Tag size={'sm'}>{children}</Tag>
    </div>
    <LineBorder />
  </>
)

export default JobCardDate
