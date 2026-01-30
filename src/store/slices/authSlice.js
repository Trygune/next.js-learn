import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials) => {
    const response = await axios.get('http://localhost:8000/users')
    const user = response.data.find(
      (u) =>
        u.email === credentials.email && u.password === credentials.password
    )
    return user
  }
)

const initialState = {
  user: null,
  isLoggedIn: false,
  loading: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    LOGOUT_ACTION: (state) => {
      state.user = null
      state.isLoggedIn = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        if (action.payload) {
          state.user = action.payload
          state.isLoggedIn = true
        } else {
          state.isLoggedIn = false
          console.log('email or password is incorrect')
        }
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false
        console.log('server error logging in user')
      })
  },
})

export const { LOGOUT_ACTION } = authSlice.actions

export default authSlice.reducer
