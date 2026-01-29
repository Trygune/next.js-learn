import JobCardList from './JobCardList'

const meta = {
  title: 'Components/JobCardList',
  component: JobCardList,
  tags: ['autodocs'],
  argTypes: {
    jobnumber: { control: 'number', defaultValue: 2 },
  },
}

export default meta

export const DefaultJobCardList = {
  args: {
    jobnumber: 2,
  },
}
export const LongJobCardList = {
  args: {
    jobnumber: 5,
  },
}
