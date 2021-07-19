import { screen } from '@testing-library/react'

import { renderWithThemeProvider } from '__tests__/utils'

import { Footer } from '.'

describe('Footer', () => {
  it('should render the component with label', () => {
    renderWithThemeProvider(Footer)

    const found = screen.getByTestId('footer')
    expect(found).toBeInTheDocument()
  })

  it('should match the snapshot', () => {
    const { container } = renderWithThemeProvider(Footer)
    expect(container).toMatchSnapshot()
  })
})
