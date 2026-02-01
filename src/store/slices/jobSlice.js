import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchData } from '@/utils/fetchUrl'

const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  // for development purpose
  // const data = await fetchData('jobs')

  const data = await fetchData('api/jobs.json')

  return data
})

const initialState = {
  items: [],
  loading: false,
  error: null,
}

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.items = action.payload
      state.loading = false
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        console.log('fetching jobs successful')
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        console.log('server error fetching jobs')
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const { setJobs } = jobSlice.actions
export { fetchJobs }
export default jobSlice.reducer
