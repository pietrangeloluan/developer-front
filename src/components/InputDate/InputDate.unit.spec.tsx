import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import faker from 'faker'

import { renderWithThemeProvider } from '__tests__/utils'

import { InputDate } from '.'

describe('InputDate', () => {
  it('should render the component', () => {
    renderWithThemeProvider(InputDate)

    const found = screen.getByTestId('input')
    expect(found.firstChild).toBeInTheDocument()
  })

  it('should initial name attribute', () => {
    renderWithThemeProvider(InputDate)

    const input = screen.getByRole('textbox')

    expect(input).toHaveAttribute('name', 'date')
  })

  it('should render another name attribute', () => {
    const name = 'date_ok'
    renderWithThemeProvider(InputDate, { name })

    const input = screen.getByRole('textbox')

    expect(input).toHaveAttribute('name', name)
  })

  it('should initial error attribute false and helperText must be empty', () => {
    renderWithThemeProvider(InputDate)

    const input = screen.getByRole('textbox')

    expect(input).toHaveAttribute('aria-invalid', 'false')
  })

  it('should render error', () => {
    const error = true
    const helperText = faker.lorem.words()
    renderWithThemeProvider(InputDate, { error, helperText })

    const input = screen.getByRole('textbox')

    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('should renders with value null', () => {
    const label = faker.lorem.word()

    renderWithThemeProvider(InputDate, {
      label
    })

    const found = screen.getByDisplayValue('')
    expect(found).toBeInTheDocument()
  })

  it('should renders with value', () => {
    const label = faker.lorem.word()
    const value = '01/01/2021'

    renderWithThemeProvider(InputDate, {
      label,
      value
    })

    const found = screen.getByDisplayValue(value)
    expect(found).toBeInTheDocument()
  })

  it('should changes its value when typing', async () => {
    const onInput = jest.fn()
    const label = faker.lorem.word()
    const id = faker.lorem.word()

    renderWithThemeProvider(InputDate, { label, id, onInput })

    const input = screen.getByRole('textbox')
    const text = '01/01/2021'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(onInput).toHaveBeenCalledTimes(text.replace(/\D/g, '').length)
    })
  })

  it('should match the snapshot', () => {
    const { container } = renderWithThemeProvider(InputDate, {
      value: '01/01/2021'
    })
    expect(container).toMatchSnapshot()
  })
})
