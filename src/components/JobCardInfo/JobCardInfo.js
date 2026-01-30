import { css } from '../../../styled-system/css'
import Tag from '../Tag/Tag'
import { H4 } from '../Typography'

const JobCardInfo = ({ dataInfo }) => (
  <div
    className={css({
      w: 'full',
      h: 'full',
      breakInside: 'avoid',
    })}
  >
    <Tag>{dataInfo.company}</Tag>
    <H4 className="tag">{dataInfo.title}</H4>
    <Tag>{dataInfo.time}</Tag>
  </div>
)

export default JobCardInfo
