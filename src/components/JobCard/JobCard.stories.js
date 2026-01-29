import JobCardDate from '../JobCardDate/JobCardDate'
import JobCardInfo from '../JobCardInfo/JobCardInfo'
import Tag from '../Tag/Tag'
import { H4 } from '../Typography'
import JobCard from './JobCard'

const meta = {
  title: 'Components/JobCard',
  component: JobCard,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'components',
    },
  },
}

export default meta

export const PrimaryJobCard = {
  args: {
    children: (
      <>
        <JobCardInfo>
          <Tag>TryGun Company</Tag>
          <H4 className="tag">Fornt-End Developer</H4>
          <Tag>FULL TIME</Tag>
        </JobCardInfo>
        <JobCardDate>May 15th</JobCardDate>
      </>
    ),
  },
}
