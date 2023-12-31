import get from "./getElement.js"

import patternDividerDesktop from "../../assets/images/pattern-divider-desktop.svg"
import patternDividerMobile from "../../assets/images/pattern-divider-mobile.svg"
import iconDice from "../../assets/images/icon-dice.svg"

const adviceContainer = get("#advice-container")

export const displayAdvice = (data) => {
  const { id, advice } = data
  adviceContainer.innerHTML = `
  <!-- article -->
  <article
    id="article"
    class="text-center bg-neutral-darkGrayishBlue px-6 pt-10 pb-16 rounded-[10px] relative sm:p-12 sm:pb-[72px]"
  >
    <!-- advice # -->
    <h1
      id="advice-num"
      class="text-[11px] text-primary-neonGreen tracking-[3.457px] sm:text-[13px] sm:tracking-[4.086px]"
    >
      ADVICE #${id}
    </h1>
    <!-- advice value -->
    <p
      id="advice"
      class="mt-6 text-2xl sm:text-[28px] -tracking-[0.257] sm:-tracking-[0.3px]"
    >
      “${advice}”
    </p>
    <!-- divider -->
    <picture>
      <source
        srcset=${patternDividerDesktop}
        media="(min-width: 640px)"
      />

      <img
        src=${patternDividerMobile}
        alt="Responsive Image"
        class="inline-block mt-6 w-full sm:mt-10"
      />
    </picture>
    <!-- dice -->
    <button
      id="random-btn"
      class="bg-primary-neonGreen w-16 h-16 rounded-full grid place-content-center mx-auto absolute -bottom-8 left-1/2 -translate-x-1/2 sm:cursor-pointer"
      type="button"
      aria-label="Generate Random Advice"
    >
      <img
        src=${iconDice}
        alt=""
      />
    </button>
  </article>
  `
}
