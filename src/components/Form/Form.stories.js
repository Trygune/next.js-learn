import Button from '../Button/Button'
import InputEmail from '../InputEmail/InputEmail'
import InputName from '../InputName/InputName'
import InputPassword from '../InputPassword/InputPassword'
import Form from './Form'

const meta = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'component',
    },
    handleSubmit: { action: 'submitted' },
  },
}

export default meta

export const DefaultForm = {
  args: {
    children: (
      <>
        <InputName />
        <InputEmail />
        <InputPassword inplaceholder={'Enter Your Password...'} />
        <Button visual="primary" widthSize={'full'} type="submit">
          Send Password Change Request
        </Button>
      </>
    ),
  },
}
