import { css } from '../../../styled-system/css'

const Button = ({
  children,
  handleclick = () => {},
  w = 'max-content',
  bord = 'inset',
  bordw = '2px',
  changetxt = 'primary',
  bgcolor = 'primary',
  txtcolor = 'white',
  ...props
}) => {
  return (
    <button
      className={css({
        color: txtcolor,
        p: '4',
        width: w,
        backgroundColor: bgcolor,
        borderRadius: 'lg',
        border: bord,
        borderColor: 'primary',
        borderWidth: bordw,
        borderStyle: 'solid',
        cursor: 'pointer',
        transitionDuration: 'fast',
        transitionDuration: 'normal',
        fontWeight: 'medium',
        _hover: {
          backgroundColor: txtcolor,
          color: changetxt,
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
