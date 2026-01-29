import Tag from '../Tag/Tag'
import { H4 } from '../Typography'
import JobCardInfo from './JobCardInfo'

const meta = {
  title: 'Components/JobCardInfo',
  component: JobCardInfo,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'components',
    },
  },
}

export default meta

export const DefaultJobCardInfo = {
  args: {
    children: (
      <>
        <Tag>TryGun Company</Tag>
        <H4 className="tag">Fornt-End Developer</H4>
        <Tag>FULL TIME</Tag>
      </>
    ),
  },
}
