import { css } from '../../../styled-system/css'
const Button = ({ children, handleclick = () => {}, w, ...props }) => (
  <button
    className={css({
      p: '4',
      width: `${w}`,
      backgroundColor: 'transparent',
      borderRadius: 'lg',
      border: '1px solid rgba(0,0,0,0.1)',
      cursor: 'pointer',
      transitionDuration: 'fast',
      _hover: {
        backgroundColor: 'blue',
        color: 'white',
      },
    })}
    onClick={handleclick}
    {...props}
  >
    {children}
  </button>
)

export default Button
