import env from 'env-var'

export default Object.freeze({
  env: env.get('NODE_ENV').default('development').asString()
})
