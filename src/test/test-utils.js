// test-utils.js
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '@/store' // استور خودت

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      {/* اگر تم خاصی داشتی اینجا اضافه می‌کنی */}
      {children}
    </Provider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// همه چیز را از Testing Library دوباره اکسپورت می‌کنیم + متد رندرِ خودمان
export * from '@testing-library/react'
export { customRender as render }
