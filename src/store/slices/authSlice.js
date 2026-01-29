import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isLoggedIn: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      console.log('action', action)
      state.isLoggedIn = true
      state.user = action.payload
    },
    signup: (state, action) => {
      state.isLoggedIn = true
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
      state.isLoggedIn = false
    },
  },
})

export const { login, signup, logout } = authSlice.actions

export default authSlice.reducer
