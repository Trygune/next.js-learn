import { css } from '../../../styled-system/css'
const Input = ({
  intype = 'text',
  inplace = 'Write Your Text...',
  ...props
}) => (
  <input
    className={css({
      px: '4',
      py: '3',
      border: '1px solid rgba(0,0,0,0.1)',
      borderRadius: 'md',
      width: 'full',
    })}
    type={intype}
    placeholder={inplace}
    {...props}
  />
)

export default Input
