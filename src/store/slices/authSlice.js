import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchData, postData } from '@/utils/fetchUrl'
import { v4 as uuidv4 } from 'uuid'

const loginUser = createAsyncThunk('auth/loginUser', async (credentials) => {
  const result = await fetchData('users')
  const user = result.find(
    (u) => u.email === credentials.email && u.password === credentials.password
  )

  return user
})

const registerUser = createAsyncThunk('auth/registerUser', async (newUser) => {
  const userId = uuidv4()

  const newRegisterUser = { ...newUser, id: userId }

  await postData('users', newRegisterUser)
  const result = await postData('registrations', newRegisterUser)

  return result
})

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
          console.log('email or password is incorrect')
          state.isLoggedIn = false
        }
      })
      .addCase(loginUser.rejected, (state) => {
        console.log('server error logging in user')
        state.loading = false
      })

      .addCase(registerUser.pending, (state) => {
        state.loading = true
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.isLoggedIn = true
      })
      .addCase(registerUser.rejected, (state) => {
        console.log('Registration failed')
        state.loading = false
      })
  },
})

export const { LOGOUT_ACTION } = authSlice.actions
export { loginUser, registerUser }
export default authSlice.reducer
