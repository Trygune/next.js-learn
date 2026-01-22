import JobCard from '../JobCard/JobCard'
import JobCardDate from '../JobCardDate/JobCardDate'
import JobCardInfo from '../JobCardInfo/JobCardInfo'
import Tag from '../Tag/Tag'
import { H4 } from '../Typography'

const JobCardList = () =>
  [0, 1].map((i) => (
    <JobCard key={`car-${i}`}>
      <JobCardInfo>
        <Tag>TryGun Company</Tag>
        <H4 className="tag">Fornt-End Developer</H4>
        <Tag>FULL TIME</Tag>
      </JobCardInfo>
      <JobCardDate>May 15th</JobCardDate>
    </JobCard>
  ))

export default JobCardList
