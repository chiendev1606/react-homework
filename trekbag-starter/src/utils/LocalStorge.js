export const saveDataToLS = (data) => {
  localStorage.setItem('trekbag', JSON.stringify(data))
}

export const getDataFromLS = () => {
  const str = localStorage.getItem('trekbag')
  if (str) {
    return JSON.parse(str)
  }
  return []
}
