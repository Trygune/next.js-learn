import { css } from '../../../styled-system/css'

const Form = ({ handleSubmit, children }) => {
  return (
    <form onSubmit={handleSubmit} className={css({ spaceY: '2' })}>
      {children}
    </form>
  )
}

export default Form
