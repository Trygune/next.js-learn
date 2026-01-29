import Tag from './Tag'

const meta = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Tag Example',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      defaultValue: 'xs',
    },
  },
}

export default meta

export const TinyTag = {
  args: {
    children: 'Tiny Tag',
    size: 'xs',
  },
}
export const SmallTag = {
  args: {
    children: 'Small Tag',
    size: 'sm',
  },
}
export const MediumTag = {
  args: {
    children: 'Medium Tag',
    size: 'md',
  },
}
export const LargeTag = {
  args: {
    children: 'Large Tag',
    size: 'lg',
  },
}
