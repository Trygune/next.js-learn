import Button from './Button'
import { render } from '@testing-library/react'

describe('Button', () => {
  test('Render Correctly', () => {
    const { asFragment } = render(<Button>Sample Button</Button>)
    expect(asFragment()).toMatchSnapshot()
  })
})
