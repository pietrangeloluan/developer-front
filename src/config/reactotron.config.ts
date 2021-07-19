import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'

const tron: any = { createEnhancer: () => null }

if (process.env.NODE_ENV !== 'production') {
  const _tron = Reactotron.configure().use(reactotronRedux()).connect()
  _tron.clear()
  Object.assign(tron, _tron)
}

export default tron
