const getElement = (query) => {
  const el = document.querySelector(query)
  if (el) {
    return el
  } else {
    throw new Error(`cannot find element with query: ${query}`)
  }
}
export default getElement
