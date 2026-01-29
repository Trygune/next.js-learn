import Tag from '../Tag/Tag'
import JobCardDate from './JobCardDate'

const meta = {
  title: 'Components/JobCardDate',
  component: JobCardDate,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Posted 2 days ago',
    },
  },
}

export default meta

export const DefaultJobCardDate = {
  args: {
    children: <Tag size={'sm'}>Posted 2 days ago</Tag>,
  },
}
