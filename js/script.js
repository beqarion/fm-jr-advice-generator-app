import get from "./utilities/getElement.js"
import { fetchAdvice } from "./utilities/fetchAdvice.js"
import { displayAdvice } from "./utilities/displayAdvice.js"
import { startAnimations } from "./animations.js"

const URL = "https://api.adviceslip.com/advice"

// button targeted such way because
// main html content, which contains
// this BUTTON, will be generated
// after the page fetches the data
// from the API endpoint.
// so it's being targeted after the
// displayAdvice function call,
// which renders the html.
let radnomBtn

const start = async () => {
  const data = await fetchAdvice(URL)
  displayAdvice(data)
  radnomBtn = get("#random-btn")
  radnomBtn.addEventListener("click", start)
  startAnimations()
}

document.addEventListener("DOMContentLoaded", start)
