import { css } from '../../../styled-system/css'

const Button = ({ children, handleclick = () => {}, w, ...props }) => {
  return (
    <button
      className={css({
        color: 'text',
        p: '4',
        width: `${w}`,
        backgroundColor: 'bg',
        borderRadius: 'lg',
        border: '1px solid rgba(0,0,0,0.1)',
        cursor: 'pointer',
        transitionDuration: 'fast',
        _hover: {
          backgroundColor: 'primary',
          color: 'bg',
        },
      })}
      onClick={handleclick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
