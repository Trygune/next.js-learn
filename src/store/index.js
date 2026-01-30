import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'

export const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
    },
  })
