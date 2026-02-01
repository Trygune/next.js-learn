import Form from './Form'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import InputEmail from '../InputEmail/InputEmail'
import InputPassword from '../InputPassword/InputPassword'
import Button from '../Button/Button'

describe('Form', () => {
  test('Render Correctly', () => {
    const { asFragment } = render(<Form>Sample Render Form</Form>)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Calls handleSubmit when clicked', () => {
    const mockSubmit = jest.fn((e) => e.preventDefault()) // یک تابع قلابی
    render(
      <Form handleSubmit={mockSubmit}>
        <InputEmail onChange={(value) => inputHandleChange('email', value)} />
        <InputPassword
          onChange={(value) => inputHandleChange('password', value)}
          inplaceholder={'Enter Your Password...'}
        />
        <Button visual="primary" widthSize={'full'} type="submit">
          Submit
        </Button>
      </Form>
    )

    const submitButton = screen.getByRole('button', { name: /submit/i })
    fireEvent.click(submitButton)

    expect(mockSubmit).toHaveBeenCalledTimes(1)
  })
  test('Render in DOM Correctly', () => {
    const mockSubmit = jest.fn((e) => e.preventDefault()) // یک تابع قلابی
    render(<Form handleSubmit={mockSubmit}>Form Content</Form>)

    const formElement = screen.getByText(/Form Content/i).closest('form')
    fireEvent.submit(formElement)

    expect(mockSubmit).toHaveBeenCalledTimes(1)
  })
})
