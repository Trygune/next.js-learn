import Input from './Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      defaultValue: 'Write...',
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'name'],
      defaultValue: 'text',
    },
    onChange: { action: 'changed' },
  },
}

export default meta

export const DefaultInput = {
  args: {
    onChange: {},
  },
}
export const EmailtInput = {
  args: {
    placeholder: 'Enter Your Email...',
    type: 'email',
    onChange: {},
  },
}
export const NameInput = {
  args: {
    placeholder: 'Name...',
    type: 'name',
    onChange: {},
  },
}
export const PasswordInput = {
  args: {
    placeholder: 'Enter Your Password...',
    type: 'password',
    onChange: {},
  },
}
