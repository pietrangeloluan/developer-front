import { ThemeProvider } from 'styled-components'

import { standard } from '../src/themes'

export default function withThemeProvider(storyFn) {
  return <ThemeProvider theme={standard}>{storyFn()}</ThemeProvider>
}
