import JobCard from '../JobCard/JobCard'
import JobCardDate from '../JobCardDate/JobCardDate'
import JobCardInfo from '../JobCardInfo/JobCardInfo'
import Tag from '../Tag/Tag'
import { H4 } from '../Typography'

const JobCardList = ({ jobnumber }) => {
  let newArray = Array.from({ length: jobnumber })
  return newArray.map((i, index) => (
    <JobCard key={`jobcard-${i}-${index}`}>
      <JobCardInfo>
        <Tag>TryGun Company</Tag>
        <H4 className="tag">Fornt-End Developer</H4>
        <Tag>FULL TIME</Tag>
      </JobCardInfo>
      <JobCardDate>May 15th</JobCardDate>
    </JobCard>
  ))
}

export default JobCardList
