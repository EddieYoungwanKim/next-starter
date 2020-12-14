import { render, screen } from '@testing-library/react'
import App from './index.page'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App name="kim" />)
    expect(screen.getByRole('heading', { name: 'Hello world! kim' })).toBeInTheDocument()
  })
})
