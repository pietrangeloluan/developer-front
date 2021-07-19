import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { store } from 'store'
import { GlobalStyle } from 'styles/global.styles'
import { standard } from 'themes'

import { ToastContainer } from './components/ToastContainer'
import { Router } from './router'

function App() {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={standard}>
        <GlobalStyle />
        <CssBaseline />
        <Router />
        <ToastContainer />
      </ThemeProvider>
    </ReduxProvider>
  )
}

export default App
