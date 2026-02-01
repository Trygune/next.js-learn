import Button from './Button'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Button', () => {
  test('Render Correctly', () => {
    const { asFragment } = render(<Button>Sample Render Button</Button>)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Primary', () => {
    const { asFragment } = render(
      <Button visual="primary">Sample Primary Button</Button>
    )
    expect(asFragment()).toMatchSnapshot()
  })
  test('Secondary', () => {
    const { asFragment } = render(
      <Button visual="secondary">Sample Secondary Button</Button>
    )
    expect(asFragment()).toMatchSnapshot()
  })
  test('Small Width Size', () => {
    const { asFragment } = render(
      <Button widthSize="sm">Sample Small Width Size Button</Button>
    )
    expect(asFragment()).toMatchSnapshot()
  })
  test('Medium Width Size', () => {
    const { asFragment } = render(
      <Button widthSize="md">Sample Medium Width Size Button</Button>
    )
    expect(asFragment()).toMatchSnapshot()
  })
  test('Full Width Size', () => {
    const { asFragment } = render(
      <Button widthSize="full">Sample Full Width Button</Button>
    )
    expect(asFragment()).toMatchSnapshot()
  })
  test('Show Loading & Disabled State', () => {
    const { asFragment } = render(
      <Button isdisabled={true}>Sample Disabled Button</Button>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('Calls onClick when clicked', () => {
    const TestHandleClick = jest.fn() // یک تابع قلابی
    render(<Button handleclick={TestHandleClick}>Click Me</Button>)
    const buttonElement = screen.getByText(/Click Me/i)
    fireEvent.click(buttonElement)

    expect(TestHandleClick).toHaveBeenCalledTimes(1)
  })
  test('Render in DOM Correctly', () => {
    render(<Button>Sample Button in DOM</Button>)
    const element = screen.getByText(/Sample Button/i)
    //regex
    expect(element).toBeInTheDocument()
  })
  test('Render Correctly with all variants', () => {
    const TestHandleClick = jest.fn() // یک تابع قلابی
    const { asFragment } = render(
      <Button
        visual={'secondary'}
        widthSize={'md'}
        handleclick={TestHandleClick}
      >
        Sample Click Render Button
      </Button>
    )

    fireEvent.click(screen.getByText(/Sample Click Render Button/i))
    expect(TestHandleClick).toHaveBeenCalledTimes(1)
    expect(asFragment()).toMatchSnapshot()
  })
})
