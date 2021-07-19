import { fireEvent, screen } from '@testing-library/react'
import faker from 'faker'

import { renderWithThemeProvider } from '__tests__/utils'

import { Button } from '.'

describe('Button', () => {
  it('should render the component', () => {
    const children = faker.lorem.words()
    renderWithThemeProvider(Button, { children })

    const found = screen.getByRole('button', { name: children })
    expect(found).toBeInTheDocument()
  })

  it('should match the snapshot', () => {
    const { container } = renderWithThemeProvider(Button, {
      children: 'Hello World!'
    })
    expect(container).toMatchSnapshot()
  })

  it('should has blue variant as default', () => {
    const { container } = renderWithThemeProvider(Button, {
      children: 'Hello World!'
    })
    expect(container.firstChild).toHaveClass('blue')
  })

  it('should has another variant when receives it', () => {
    const variant = 'gray'
    const { container } = renderWithThemeProvider(Button, {
      children: faker.lorem.words(),
      variant
    })
    expect(container.firstChild).toHaveClass(variant)
  })

  it('should has medium size as default', () => {
    const { container } = renderWithThemeProvider(Button, {
      children: 'Hello World!'
    })
    expect(container.firstChild).toHaveClass('medium')
  })

  it('should has another size when receives it', () => {
    const size = 'large'
    const { container } = renderWithThemeProvider(Button, {
      children: faker.lorem.words(),
      size
    })
    expect(container.firstChild).toHaveClass(size)
  })

  it('should call onClick when get clicked', () => {
    // arrange
    // arrumando todas as 'dependências' do teste
    const stub = jest.fn()
    const { container } = renderWithThemeProvider(Button, {
      children: faker.lorem.words(),
      onClick: stub
    })

    // act
    // executando o que precisa ser testado
    fireEvent.click(container.firstChild)

    // assert
    // verificando o resultado
    expect(stub).toHaveBeenCalledTimes(1)
  })
})
