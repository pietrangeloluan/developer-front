export function mapErrors(errors, context) {
  const errorKeys = Object.keys(errors)
  const regex = new RegExp(`${context}\\[\\d+\\]`, 'g')
  const contextErrors = errorKeys.filter(err => err.match(regex))

  if (!contextErrors.length) return [{}]

  const updated = []

  contextErrors.forEach(err => {
    const found = [...err.matchAll(/\[(\d+)\]\.(\w+)/g)]

    if (found.length) {
      found[0].shift()
      const errIndex = found[0][0]
      const errField = found[0][1]

      updated[errIndex] = {
        ...updated[errIndex],
        [errField]: errors[`${context}[${errIndex}].${errField}`]
      }
    }
  })

  return updated
}
