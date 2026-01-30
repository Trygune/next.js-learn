import Skeleton from 'react-loading-skeleton'
import { Space } from '../Typography'
import 'react-loading-skeleton/dist/skeleton.css'
import { css } from '../../../styled-system/css'

const JobCardSkeleton = () => (
  <>
    <div
      className={css({
        w: 'full',
        h: '110px',
        backgroundColor: 'whitesmoke',
        borderRadius: 'card',
        py: '4',
        px: '12',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      })}
    >
      <div
        className={css({ display: 'flex', flexDirection: 'column', gap: '0' })}
      >
        <Skeleton width={80} height={20} />
        <Skeleton width={200} height={30} />
        <Skeleton width={100} height={20} />
      </div>
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
        <Skeleton width={150} height={40} />
      </div>
    </div>
    <Space />
  </>
)

export default JobCardSkeleton
