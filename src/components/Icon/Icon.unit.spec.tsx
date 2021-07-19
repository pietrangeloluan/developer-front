import { render } from '@testing-library/react'

import { Icon } from '.'

describe('<Icon />', () => {
  it('should has default values to height and width', () => {
    const { container } = render(<Icon icon="card-panel" />)
    const { firstChild: el } = container

    expect(el).toHaveAttribute('height', '48')
    expect(el).toHaveAttribute('width', '48')
  })

  it('should be able to override height and width props', () => {
    const { container } = render(
      <Icon icon="card-panel" height={32} width={32} />
    )
    const { firstChild: el } = container

    expect(el).toHaveAttribute('height', '32')
    expect(el).toHaveAttribute('width', '32')
  })
})
