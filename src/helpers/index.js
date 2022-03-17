
export const validateData = (data) => {
  const JSONArray = []
  const rows = data.split('\n')
  const columns = rows[0].split(',')

  // validate columns and data in the first row
  if (
    !columns.every(col => col === 'file' || col === 'text' || col === 'number' || col === 'hex') || rows.length <= 1
  ) {
    return {
      isInvalid: true,
      data
    }
  }

  for (let i = 1; i < rows.length; i++) {
    const obj = {}
    const lines = {}
    const values = rows[i].split(',')
    obj[columns[0]] = values[0]
    for (let j = 1; j < values.length; j++) {
      if (values[j] && values[j].length > 0) {
        columns[j] === 'number'
          ? lines[columns[j]] = parseInt(values[j], 10)
          : lines[columns[j]] = values[j]
      }
      obj.lines = [lines]
    }

    JSONArray.push(obj)
  }
  return JSONArray
}
