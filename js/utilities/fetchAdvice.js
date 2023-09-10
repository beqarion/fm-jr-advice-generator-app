import get from "./getElement.js"
const adviceContainer = get("#advice-container")

export const fetchAdvice = async (url) => {
  adviceContainer.innerHTML = `
  <!-- loading -->
        <div class="spinner text-center">
          <div
            class="animate-spin rounded-full h-16 w-16 border-4 border-y-transparent border-primary-neonGreen border-solid mx-auto"
          ></div>
          <br />
          Loading...
        </div>`
  try {
    const response = await fetch(url)
    const data = await response.json()
    const { slip: advice } = data
    return advice
  } catch (error) {
    adviceContainer.innerHTML = `
    <!-- error -->
        <p class="text-center">
          There was problem fetching data, please try again
        </p>
    `
  }
}
