export default function (obj, filter) {
  const filtered = obj.filter(item => {
    for (const key in filter) {
      if (item[key] === undefined || !filter[key].includes(item[key])) {
        return false
      }
    }
    return true
  })

  return filtered
}
