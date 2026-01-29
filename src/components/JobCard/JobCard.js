import { css } from '../../../styled-system/css'
import { Space } from '../Typography'

const JobCard = ({ children }) => (
  <>
    <div
      className={css({
        w: 'full',
        h: '110px',
        backgroundColor: 'whitesmoke',
        borderRadius: 'card',
        py: '4',
        px: '12',
        columnCount: '2',
        columnGap: '0',
        cursor: 'pointer',
        color: 'lightgray',
        overflowX: 'hidden',
        transitionDuration: 'fast',
        _hover: {
          backgroundColor: 'primary',
          '& span': {
            color: 'bg',
          },
          '& section': {
            backgroundColor: 'bg',
          },
          '& h4': {
            color: 'bg',
          },
        },
      })}
    >
      {children}
    </div>
    <Space />
  </>
)

export default JobCard
