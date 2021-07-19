import { screen } from '@testing-library/react'
import { renderWithThemeProvider } from '__tests__/utils'

import { AddButton } from '.'

describe('AddButton', () => {
  it('should render the component', () => {
    renderWithThemeProvider(AddButton)

    const found = screen.getByRole('button')
    expect(found).toBeInTheDocument()
  })

  it('should match the snapshot', () => {
    const { container } = renderWithThemeProvider(AddButton)
    expect(container).toMatchSnapshot()
  })
})
