import { css } from '../../../styled-system/css'

const spaceMap = {
  1: 'var(--space-1)',
  2: 'var(--space-2)',
  3: 'var(--space-3)',
  4: 'var(--space-4)',
  5: 'var(--space-5)',
  6: 'var(--space-6)',
}

const Space = ({ sp = '3' }) => {
  let value = spaceMap[sp]

  const style = { height: value, width: 'full' }

  return <div className={css({ display: 'block' })} style={style} />
}

export default Space
