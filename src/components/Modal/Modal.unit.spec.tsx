import { fireEvent, screen } from '@testing-library/react'

import { renderWithThemeProvider } from '__tests__/utils'

import { Modal } from '.'

describe('Modal', () => {
  it('should render the component', () => {
    renderWithThemeProvider(Modal)

    const found = screen.getByTestId('modal')
    expect(found).toBeInTheDocument()
  })

  it('should match the snapshot', () => {
    const { container } = renderWithThemeProvider(Modal)
    expect(container).toMatchSnapshot()
  })

  it('should has no action button', () => {
    renderWithThemeProvider(Modal, {
      isActionsEnabled: false
    })
    const modal = screen.getByTestId('modal')
    const actions = screen.getByTestId('no-actions')

    expect(modal).toContainElement(actions)
  })

  it('should handle open modal ', () => {
    renderWithThemeProvider(Modal)
    const modal = screen.getByTestId('modal')

    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should handle close modal when cancel button clicked', () => {
    renderWithThemeProvider(Modal)
    const modal = screen.getByTestId('modal')

    fireEvent.click(screen.getByTestId('close-modal'))

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })
})
