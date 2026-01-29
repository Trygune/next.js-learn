'use client'
import { H3, Space } from '@/components/Typography'
import Header from '@/components/Header/Header'
import Container from '@/components/Container/Container'
import Footer from '@/components/Footer/Footer'
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
          <JobCardList jobnumber={2} />
        </Container>
        <Space />
        <PageFooter />
        <Footer />
      </main>
    </>
  )
}

export default Home
