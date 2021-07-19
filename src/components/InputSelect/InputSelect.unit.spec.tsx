import { fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import faker from 'faker'

import { renderWithThemeProvider } from '__tests__/utils'

import { InputSelect } from '.'

const states = [
  { title: 'São Paulo' },
  { title: 'Cianorte' },
  { title: 'Mato Gosso' },
  { title: 'Vinhedo' },
  { title: 'Maringá' }
]

describe('InputSelect', () => {
  it('should render the component', () => {
    const options = states
    const label = faker.lorem.word()
    const optionLabel = 'title'
    renderWithThemeProvider(InputSelect, {
      label,
      options,
      optionLabel
    })

    const found = screen.getByRole('combobox')
    expect(found.firstChild).toBeInTheDocument()
  })

  it('should initial error attribute false and helperText must be empty', () => {
    const options = states
    const label = faker.lorem.word()
    const optionLabel = 'title'
    renderWithThemeProvider(InputSelect, {
      label,
      options,
      optionLabel
    })

    const input = screen.getByRole('textbox')

    expect(input).toHaveAttribute('aria-invalid', 'false')
  })

  it('should render error', () => {
    const options = states
    const label = faker.lorem.word()
    const optionLabel = 'title'
    const error = true
    const helperText = faker.lorem.words()
    renderWithThemeProvider(InputSelect, {
      label,
      options,
      optionLabel,
      error,
      helperText
    })

    const input = screen.getByRole('textbox')

    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('should renders with value null', () => {
    const options = states
    const label = faker.lorem.word()
    const optionLabel = 'title'

    renderWithThemeProvider(InputSelect, {
      label,
      options,
      optionLabel
    })

    const found = screen.getByDisplayValue('')
    expect(found).toBeInTheDocument()
  })

  // it('should renders with value', () => {
  //   const options = states
  //   const label = faker.lorem.word()
  //   const optionLabel = 'title'
  //   const defaultValue = { title: 'São Paulo' }

  //   renderWithThemeProvider(InputSelect, {
  //     label,
  //     options,
  //     optionLabel,
  //     defaultValue
  //   })

  //   const found = screen.getByDisplayValue('São Paulo')
  //   expect(found).toBeInTheDocument()
  // })

  it('should renders with width default', () => {
    const options = states
    const label = faker.lorem.word()
    const optionLabel = 'title'

    const { container } = renderWithThemeProvider(InputSelect, {
      label,
      options,
      optionLabel
    })

    const found2 = container.getElementsByClassName('MuiAutocomplete-root')
    expect(found2.item(0)).toHaveStyle('width: 200px')
  })

  it('should renders with another width', () => {
    const options = states
    const label = faker.lorem.word()
    const optionLabel = 'title'
    const width = '600px'

    const { container } = renderWithThemeProvider(InputSelect, {
      label,
      options,
      optionLabel,
      width
    })

    const found2 = container.getElementsByClassName('MuiAutocomplete-root')
    expect(found2.item(0)).toHaveStyle(`width: ${width}`)
  })

  it('should renders with fullwidth false', () => {
    const options = states
    const label = faker.lorem.word()
    const optionLabel = 'title'

    const { container } = renderWithThemeProvider(InputSelect, {
      label,
      options,
      optionLabel
    })

    const found2 = container.getElementsByClassName('MuiAutocomplete-root')
    expect(found2.item(0)).not.toHaveClass('MuiAutocomplete-fullWidth')
  })

  it('should renders with fullwidth true', () => {
    const options = states
    const label = faker.lorem.word()
    const optionLabel = 'title'
    const fullWidth = true

    const { container } = renderWithThemeProvider(InputSelect, {
      label,
      options,
      optionLabel,
      fullWidth
    })

    const found2 = container.getElementsByClassName('MuiAutocomplete-root')
    expect(found2.item(0)).toHaveClass('MuiAutocomplete-fullWidth')
  })

  it('should changes its value when typing or click', async () => {
    const onSelected = jest.fn()
    const options = states
    const label = faker.lorem.word()
    const optionLabel = 'title'

    renderWithThemeProvider(InputSelect, {
      label,
      options,
      optionLabel,
      onSelected
    })

    const select = screen.getByRole('combobox')
    const input = screen.getByRole('textbox')

    const text = 'São Paulo'
    userEvent.type(input, text)

    select.focus()
    await waitFor(() => {
      expect(input).toHaveValue(text)
      fireEvent.change(input, { target: { value: 'São Paulo' } })
      fireEvent.keyDown(select, { key: 'ArrowDown' })
      fireEvent.keyDown(select, { key: 'Enter' })
    })
    expect(input).toHaveValue('São Paulo')
  })
})
