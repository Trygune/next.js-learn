import { button } from '../../../styled-system/recipes'
import { TfiReload } from 'react-icons/tfi'

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
      {isdisabled ? <TfiReload /> : children}
    </button>
  )
}

export default Button
