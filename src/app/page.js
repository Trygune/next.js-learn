import { H3, Space } from '@/components/Typography'
import Header from '@/components/Header/Header'
import Container from '@/components/Container/Container'
import Footer from '@/components/Footer/Footer'
import PageFooter from '@/components/PageFooter/PageFooter'
import JobCardList from '@/components/JobCardList/JobCardList'
import { fetchData } from '@/utils/fetchUrl'

const Home = async () => {
  // این کد در سرور اجرا می‌شود (SSR واقعی)
  const initialJobs = await fetchData('jobs')
  console.log('hey there here is a server log')
  console.log('initialJobs', initialJobs)

  return (
    <>
      <main>
        <Header />
        <Container>
          <Space sp="4" />
          <H3>Gun Offers</H3>
          <Space sp="4" />
          <JobCardList initialData={initialJobs} />
        </Container>
        <Space />
        <PageFooter />
        <Footer />
      </main>
    </>
  )
}

export default Home
