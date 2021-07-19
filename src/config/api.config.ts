import env from 'env-var'

const config = Object.freeze({
  baseURL: env.get('REACT_APP_API_BASE_URL').asUrlString()
})

export default config
