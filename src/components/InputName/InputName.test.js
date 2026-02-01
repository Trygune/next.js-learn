import InputName from './InputName'
import { render, screen, fireEvent } from '@testing-library/react'

describe('InputName Component', () => {
  test('Render Correctly', () => {
    const { asFragment } = render(<InputName />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('Handle Onchange', () => {
    const mockOnChange = jest.fn()
    render(<InputName onChange={mockOnChange} />)
    const inputElement = screen.getByPlaceholderText(/Name/i)
    fireEvent.change(inputElement, { target: { value: 'John Doe' } })

    expect(mockOnChange).toHaveBeenCalledWith('John Doe')
  })
})
