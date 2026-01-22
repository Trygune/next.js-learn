'use client'
import { H3, Space } from '@/components/Typography'
import Header from '@/components/Header/Header'
import Container from '@/components/Container/Container'
import PageFooter from '@/components/PageFooter/PageFooter'
import JobCardList from '@/components/JobCardList/JobCardList'

const Home = () => {
  return (
    <>
      <main>
        <Header />
        <Container>
          <Space sp="4" />
          <H3>Gun Offers</H3>
          <Space sp="4" />
          <JobCardList />
        </Container>
        <Space />
        <PageFooter />
      </main>
    </>
  )
}

export default Home
