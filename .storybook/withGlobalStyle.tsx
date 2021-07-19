import { GlobalStyle } from '../src/styles/global.styles'

export default function withGlobalStyle(storyFn) {
  return (
    <>
      <GlobalStyle />
      {storyFn()}
    </>
  )
}
