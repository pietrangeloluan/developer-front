export default function (params: any) {
  let filter = {}
  for (const key in params) {
    if (Object.hasOwnProperty.call(params, key)) {
      const parameter = params[key]
      if (parameter) {
        filter = { ...filter, [key]: parameter }
      }
    }
  }
  return filter
}
