import Input from '../Input/Input'
const InputPassword = ({ inplaceholder, ...props }) => (
  <Input intype="password" inplace={inplaceholder} {...props} />
)

export default InputPassword
