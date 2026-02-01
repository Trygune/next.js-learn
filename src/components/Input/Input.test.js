import Input from './Input'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Input', () => {
  test('Render Correctly', () => {
    const { asFragment } = render(<Input />)
    expect(asFragment()).toMatchSnapshot()
  })
  test('PlaceHolder', () => {
    render(<Input intype="text" placeholder="Sample Placeholder" />)
    const inputElement = screen.getByPlaceholderText(/Sample Placeholder/i)
    expect(inputElement).toBeInTheDocument()
  })
  // بخشی از Input.test.js که باید اصلاح شود
  test('Handle onChange', () => {
    const TestHandleChange = jest.fn()

    render(
      <Input
        intype="email"
        inplace="Sample email Placeholder" // دقت کن اسم پراپ در کامپوننت تو inplace است
        onChange={TestHandleChange} // اینجا را اصلاح کن (باید با نام داخل کامپوننت یکی باشد)
      />
    )

    const inputElement = screen.getByPlaceholderText(
      /Sample email Placeholder/i
    )

    fireEvent.change(inputElement, { target: { value: 'example@comp.co' } })

    expect(TestHandleChange).toHaveBeenCalledTimes(1)
    expect(TestHandleChange).toHaveBeenCalledWith('example@comp.co')
  })
  test('Render in DOM Correctly', () => {
    const { getByPlaceholderText } = render(
      <Input intype="text" placeholder="Sample Input in DOM" />
    )
    //regex
    expect(getByPlaceholderText(/Sample Input/)).toBeInTheDocument()
  })
})
