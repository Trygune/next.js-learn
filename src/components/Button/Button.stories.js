// import { YourComponent } from './YourComponent';

// //👇 This default export determines where your story goes in the story list
// export default {
//   component: YourComponent,
// };

// export const Basic = {
//   args: {
//     //👇 The args you need here will depend on your component
//   },
// };

import Button from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Click Me',
    },
    visual: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    widthSize: {
      control: 'select',
      options: ['sm', 'md', 'full'],
    },
    handleclick: { action: 'clicked' },
  },
}

export default meta

export const Primary = {
  args: {
    children: 'Primary Button',
    visual: 'primary',
    widthSize: 'md',
    handleclick: {},
  },
}

export const Secondary = {
  args: {
    children: 'Secondary Button',
    visual: 'secondary',
    widthSize: 'md',
    handleclick: {},
  },
}

export const Disabled = {
  args: {
    visual: 'primary',
    widthSize: 'md',
    isdisabled: true,
  },
}

export const FullWidth = {
  args: {
    visual: 'primary',
    children: 'Full Primary',
    widthSize: 'full',
    handleclick: {},
  },
}

export const SmallWidth = {
  args: {
    visual: 'primary',
    children: 'Small Primary',
    widthSize: 'sm',
    handleclick: {},
  },
}
