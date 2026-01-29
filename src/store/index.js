import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from './slices/rootReducer'
import authReducer from './slices/authSlice'

export const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
    },
  })
