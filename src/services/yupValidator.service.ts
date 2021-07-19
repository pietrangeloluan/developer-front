import '../utils/yup-translation'
import { fromPairs } from 'lodash'

export class YupValidator {
  __schema

  constructor(schema) {
    this.__schema = schema
  }

  async validate(payload) {
    try {
      await this.__schema.validate(payload, { abortEarly: false })
      return [true, null]
    } catch (ex) {
      const alreadyMappedErrors = new Set()
      const errPairs = ex.inner
        .map(err => {
          if (alreadyMappedErrors.has(err.path)) return false

          alreadyMappedErrors.add(err.path)
          return [err.path, err.message]
        })
        .filter(each => each)

      return [false, fromPairs(errPairs)]
    }
  }
}
