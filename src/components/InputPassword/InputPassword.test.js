import InputPassword from './InputPassword'
import { render, screen, fireEvent } from '@testing-library/react'

describe('InputPassword Component', () => {
  test('Password Type', () => {
    render(<InputPassword inplaceholder="Sample Password" />)
    const inputElement = screen.getByPlaceholderText(/Sample Password/i)

    // تایید اینکه تایپ اینپوت حتما password است
    expect(inputElement).toHaveAttribute('type', 'password')
  })

  test('Handle Onchange', () => {
    const mockOnChange = jest.fn()
    render(<InputPassword inplaceholder="Pass" onChange={mockOnChange} />)

    const inputElement = screen.getByPlaceholderText(/Pass/i)
    fireEvent.change(inputElement, { target: { value: '123456' } })

    expect(mockOnChange).toHaveBeenCalledWith('123456')
  })
})
