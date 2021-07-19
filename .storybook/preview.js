import { themes } from '@storybook/theming'

import withGlobalStyle from './withGlobalStyle'
import withThemeProvider from './withThemeProvider'

export const decorators = [withGlobalStyle, withThemeProvider]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: { theme: themes.dark },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
