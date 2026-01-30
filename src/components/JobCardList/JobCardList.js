'use client'
import JobCard from '../JobCard/JobCard'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJobs, setJobs } from '@/store/slices/jobSlice'
import JobCardSkeleton from '../JobCardSkeleton/JobCardSkeleton'

const JobCardList = ({ initialData }) => {
  const dispatch = useDispatch()

  const { items, loading } = useSelector((state) => state.jobs)

  //use ssr data
  const displayData = items.length > 0 ? items : initialData

  useEffect(() => {
    if (initialData && items.length === 0) {
      dispatch(setJobs(initialData))
    } else if (!initialData && items.length === 0) {
      dispatch(fetchJobs())
    }
  }, [initialData, dispatch, items.length])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     dispatch(fetchJobs())
  //   }, 5000)

  //   return () => clearInterval(interval)
  // }, [])

  if (loading && (!displayData || displayData.length === 0))
    return (
      <>
        {[1, 2, 3, 4, 5].map((i) => (
          <JobCardSkeleton key={i} />
        ))}
      </>
    )

  return (
    displayData &&
    displayData.map((job) => <JobCard key={`${job.id}`} data={job} />)
  )
}

export default JobCardList
