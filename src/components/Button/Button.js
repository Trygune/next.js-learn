import { button } from '../../../styled-system/recipes'

const Button = ({
  visual,
  widthSize,
  children,
  handleclick = () => {},
  ...props
}) => {
  return (
    <button
      className={button({ visual, widthSize })}
      onClick={handleclick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
