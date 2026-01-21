import { css } from '../../../styled-system/css'
const Input = ({
  intype = 'text',
  inplace = 'Write Your Text...',
  ...props
}) => {
  const handleOnChange = (event) => {
    onChange(event.target.value)
  }

  return (
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
      onChange={handleOnChange}
      {...props}
    />
  )
}

export default Input
