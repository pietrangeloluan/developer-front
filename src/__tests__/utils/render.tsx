import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { standard } from 'themes'
import { store } from 'store'

export function renderWithThemeProvider(Component, args = {}) {
  return render(
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={standard}>
          <Component {...args} />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  )
}
