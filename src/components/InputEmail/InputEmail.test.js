import InputEmail from './InputEmail'
import { render, screen, fireEvent } from '@testing-library/react'

describe('InputEmail Component', () => {
  test('Render Correctly', () => {
    const { asFragment } = render(<InputEmail />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('Handle Onchange', () => {
    const mockOnChange = jest.fn()
    render(<InputEmail onChange={mockOnChange} />)
    const inputElement = screen.getByPlaceholderText(/Email/i)
    fireEvent.change(inputElement, { target: { value: 'john@example.com' } })

    expect(mockOnChange).toHaveBeenCalledWith('john@example.com')
  })
})
