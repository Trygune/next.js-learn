import { button } from '../../../styled-system/recipes'

const Button = ({
  visual,
  widthSize,
  children,
  isdisabled,
  handleclick = () => {},
  ...props
}) => {
  return (
    <button
      className={button({ visual, widthSize })}
      onClick={handleclick}
      disabled={isdisabled}
      {...props}
    >
      {isdisabled ? 'Checking...' : children}
    </button>
  )
}

export default Button
