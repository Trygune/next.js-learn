import Tag from './Tag'
import { render, screen } from '@testing-library/react'

describe('Tag Component', () => {
  test('renders correctly', () => {
    render(<Tag>Sample Tag</Tag>)
    const tagElement = screen.getByText(/Sample Tag/i)
    // تایید اینکه محتوای Tag درست است
    expect(tagElement).toBeInTheDocument()
  })
  test('different sizes', () => {
    render(<Tag size="md">Medium Sample Tag</Tag>)
    const tagElement = screen.getByText(/Medium Sample Tag/i)
    // تایید اینکه محتوای Tag درست است
    expect(tagElement).toBeInTheDocument()
  })
})
