import { css } from '../../../styled-system/css'

const LineBorder = () => (
  <section
    className={css({
      w: '4px',
      h: 'full',
      backgroundColor: 'lightgray',
      borderRadius: 'lg',
    })}
  />
)

export default LineBorder
