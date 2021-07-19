import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import faker from 'faker'

import { renderWithThemeProvider } from '__tests__/utils'

import { Input } from '.'

describe('Input', () => {
  it('should render the component', () => {
    renderWithThemeProvider(Input, { 'data-testid': 'input' })

    const found = screen.getByTestId('input')
    expect(found.firstChild).toBeInTheDocument()
  })

  it('should renders with default value', () => {
    const label = faker.lorem.word()
    const defaultValue = faker.lorem.words()

    renderWithThemeProvider(Input, {
      label,
      defaultValue
    })

    const found = screen.getByDisplayValue(defaultValue)
    expect(found).toBeInTheDocument()
  })

  it('should renders with Label', () => {
    const label = faker.lorem.word()
    const id = faker.lorem.word()
    renderWithThemeProvider(Input, { label, id })

    const found = screen.getByLabelText(label)
    expect(found).toBeInTheDocument()
  })

  it('should renders with placeholder', () => {
    const placeholder = faker.lorem.words()
    renderWithThemeProvider(Input, { placeholder })

    const found = screen.getByPlaceholderText(placeholder)
    expect(found).toBeInTheDocument()
  })

  it('should have the variant outlined as default and cannot be changed', () => {
    const { container } = renderWithThemeProvider(Input)

    const test = container.children.item(0).children.item(0).children.item(0)

    expect(test.firstChild).toHaveClass('MuiOutlinedInput-root')
  })

  it('should has light border as default', () => {
    const { container } = renderWithThemeProvider(Input)

    const test = container.children.item(0).children.item(0)

    expect(test.firstChild).toHaveAttribute('border', 'light')
  })

  it('should has another border when receives it', () => {
    const border = 'dark'
    const { container } = renderWithThemeProvider(Input, { border })

    const test = container.children.item(0).children.item(0)

    expect(test.firstChild).toHaveAttribute('border', border)
  })

  it('should has medium padding as default', () => {
    const { container } = renderWithThemeProvider(Input)
    const test = container.children.item(0).children.item(0)
    expect(test.firstChild).toHaveAttribute('padding', 'medium')
  })

  it('should has another padding when receives it', () => {
    const padding = 'large'
    const { container } = renderWithThemeProvider(Input, { padding })
    const test = container.children.item(0).children.item(0)
    expect(test.firstChild).toHaveAttribute('padding', padding)
  })

  it('should changes its value when typing', async () => {
    const onInput = jest.fn()
    const label = faker.lorem.word()
    const id = faker.lorem.word()

    renderWithThemeProvider(Input, { label, id, onInput })

    const input = screen.getByRole('textbox')
    const text = faker.lorem.words()
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('should is accessible by tab', () => {
    const label = faker.lorem.word()
    const id = faker.lorem.word()

    renderWithThemeProvider(Input, { label, id })

    const input = screen.getByLabelText(label)
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('should renders with icon left', () => {
    const label = faker.lorem.word()
    const iconLeft = 'input-user'
    renderWithThemeProvider(Input, {
      label,
      iconLeft
    })

    const found = screen.getByText(iconLeft)
    expect(found).toBeInTheDocument()
  })

  it('should renders with icon right', () => {
    const label = faker.lorem.word()
    const iconRight = 'input-user'
    renderWithThemeProvider(Input, {
      label,
      iconRight
    })

    const found = screen.getByText(iconRight)
    expect(found).toBeInTheDocument()
  })

  it('should renders with errors', () => {
    const error = true
    const helperText = faker.lorem.words()
    renderWithThemeProvider(Input, { error, helperText })

    const found = screen.getByText(helperText)
    expect(found).toBeInTheDocument()
  })

  it('should match the snapshot', () => {
    const { container } = renderWithThemeProvider(Input, {
      value: 'Hello World!'
    })
    expect(container).toMatchSnapshot()
  })
})
