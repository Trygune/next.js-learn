'use client'
import { H3, H4, Space } from '@/components/Typography'
import Header from '@/components/Header/Header'
import Container from '@/components/Container/Container'
import JobCard from '@/components/JobCard/JobCard'
import Tag from '@/components/Tag/Tag'
import JobCardInfo from '@/components/JobCardInfo/JobCardInfo'
import JobCardDate from '@/components/JobCardDate/JobCardDate'
import PageFooter from '@/components/PageFooter/PageFooter'

const Home = () => {
  return (
    <>
      <main>
        <Header />
        <Container>
          <Space sp="4" />
          <H3>Gun Offers</H3>
          <Space sp="4" />
          {[0, 1].map((i) => (
            <JobCard key={`car-${i}`}>
              <JobCardInfo>
                <Tag>TryGun Company</Tag>
                <H4 className="tag">Fornt-End Developer</H4>
                <Tag>FULL TIME</Tag>
              </JobCardInfo>
              <JobCardDate>May 15th</JobCardDate>
            </JobCard>
          ))}
        </Container>
        <Space />
        <PageFooter />
      </main>
    </>
  )
}

export default Home
