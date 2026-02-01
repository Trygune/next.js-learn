import { H1, H2, H3, H4, H5, H6, Space } from './index'
import { render, screen } from '@testing-library/react'

describe('Typography Components', () => {
  test('H1', () => {
    render(<H1>Sample H1</H1>)
    const H1Element = screen.getByText(/Sample H1/i)

    // تایید اینکه محتوای H1 درست است
    expect(H1Element).toBeInTheDocument()
  })
  test('H2', () => {
    render(<H2>Sample H2</H2>)
    const H2Element = screen.getByText(/Sample H2/i)

    // تایید اینکه محتوای H2 درست است
    expect(H2Element).toBeInTheDocument()
  })
  test('H3', () => {
    render(<H3>Sample H3</H3>)
    const H3Element = screen.getByText(/Sample H3/i)

    // تایید اینکه محتوای H3 درست است
    expect(H3Element).toBeInTheDocument()
  })
  test('H4', () => {
    render(<H4>Sample H4</H4>)
    const H4Element = screen.getByText(/Sample H4/i)

    // تایید اینکه محتوای H4 درست است
    expect(H4Element).toBeInTheDocument()
  })
  test('H5', () => {
    render(<H5>Sample H5</H5>)
    const H5Element = screen.getByText(/Sample H5/i)

    // تایید اینکه محتوای H5 درست است
    expect(H5Element).toBeInTheDocument()
  })
  test('H6', () => {
    render(<H6>Sample H6</H6>)
    const H6Element = screen.getByText(/Sample H6/i)

    // تایید اینکه محتوای H6 درست است
    expect(H6Element).toBeInTheDocument()
  })
  test('Space', () => {
    render(<Space />)
    const spaceElement = screen.getByTestId('space-div')

    // تایید اینکه محتوای Space درست است
    expect(spaceElement).toBeInTheDocument()
  })
  test('Space with custom height', () => {
    render(<Space sp="5" />)
    const spaceElement = screen.getByTestId('space-div')

    expect(spaceElement).toHaveStyle({ height: 'var(--space-5)' })
  })
})
