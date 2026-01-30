import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import jobSlice from './slices/jobSlice'
import logger from 'redux-logger'

export const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
      jobs: jobSlice,
    },
    middleware: (getDefaultMiddleware) => {
      const middlewares = getDefaultMiddleware()
      if (process.env.NODE_ENV === 'development') {
        middlewares.push(logger)
      }
      return middlewares
    },
  })
