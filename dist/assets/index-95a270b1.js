(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p=()=>{anime({targets:"#article",translateY:[-50,0],opacity:[0,1]}),anime({targets:"#random-btn img",rotate:"360deg",easing:"easeOutBack"}),anime({targets:"#advice",translateX:[150,0],duration:1e3,opacity:[0,1],easing:"easeOutBack"}),anime({targets:"#advice-num",translateY:[-75,0],duration:1e3,opacity:[0,1]})},o=r=>{const n=document.querySelector(r);if(n)return n;throw new Error(`cannot find element with query: ${r}`)},c=o("#advice-container"),m=async r=>{c.innerHTML=`
  <!-- loading -->
        <div class="spinner text-center">
          <div
            class="animate-spin rounded-full h-16 w-16 border-4 border-y-transparent border-primary-neonGreen border-solid mx-auto"
          ></div>
          <br />
          Loading...
        </div>`;try{const i=await(await fetch(r)).json(),{slip:a}=i;return a}catch{c.innerHTML=`
    <!-- error -->
        <p class="text-center">
          There was problem fetching data, please try again
        </p>
    `}},u=o("#advice-container"),g=r=>{console.log(r);const{id:n,advice:i}=r;u.innerHTML=`
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
      ADVICE #${n}
    </h1>
    <!-- advice value -->
    <p
      id="advice"
      class="mt-6 text-2xl sm:text-[28px] -tracking-[0.257] sm:-tracking-[0.3px]"
    >
      “${i}”
    </p>
    <!-- divider -->
    <picture>
      <source
        srcset="./assets/images/pattern-divider-desktop.svg"
        media="(min-width: 640px)"
      />

      <img
        src="./assets/images/pattern-divider-mobile.svg"
        alt="Responsive Image"
        class="inline-block mt-6 w-full sm:mt-10"
      />
    </picture>
    <!-- dice -->
    <button
      id="random-btn"
      class="bg-primary-neonGreen w-16 h-16 rounded-full grid place-content-center mx-auto absolute -bottom-8 left-1/2 -translate-x-1/2 sm:cursor-pointer"
      type="button"
    >
      <img
        src="./assets/images/icon-dice.svg"
        alt=""
      />
    </button>
  </article>
  `},f="https://api.adviceslip.com/advice";let d;const l=async()=>{const r=await m(f);g(r),d=o("#random-btn"),d.addEventListener("click",l),p()};document.addEventListener("DOMContentLoaded",l);
