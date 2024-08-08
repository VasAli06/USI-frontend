<script>
export default {
  mounted() {
    const svgElement = document.getElementById("mySVG");
    const path = document.getElementById("myPath");

    if (path) {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;

      const updatePath = () => {
        const svgRect = svgElement.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        let startOffset = 0.5; // Start of the animation when SVG is 50% visible
        let extraSpacePercentage = 60;  // Extra space below SVG, in percentage of viewport height

        if (window.innerWidth < 400) {
           startOffset = 0.1; // Start of the animation when SVG is 50% visible
           extraSpacePercentage = 40;  // Extra space below SVG, in percentage of viewport height

        }
        else {
           startOffset = 0.5; // Start of the animation when SVG is 50% visible
           extraSpacePercentage = 60;  // Extra space below SVG, in percentage of viewport height
        }


        const svgTop = svgRect.top;
        const svgBottom = svgRect.bottom;

        const visibleHeight = Math.min(viewportHeight, svgBottom) - Math.max(0, svgTop);
        const totalHeight = svgBottom - svgTop;

        let visibilityPercentage = 0;
        if (totalHeight > 0) {
          const extraSpace = viewportHeight * (extraSpacePercentage / 100); // Convert percentage to pixels
          const adjustedBottom = svgBottom + extraSpace;
          const adjustedViewportBottom = viewportHeight;

          const totalVisibleHeight = Math.min(adjustedViewportBottom, adjustedBottom) - Math.max(0, svgTop);
          const totalAdjustedHeight = adjustedBottom - svgTop;
          const visiblePercentage = totalVisibleHeight / totalAdjustedHeight;

          visibilityPercentage = (visiblePercentage - startOffset) / (1 - startOffset);
          visibilityPercentage = Math.max(0, Math.min(1, visibilityPercentage));
        }

        path.style.strokeDashoffset = length * (1 - visibilityPercentage);
      };

      window.addEventListener("scroll", updatePath);
      window.addEventListener("resize", updatePath);

      updatePath();
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.updatePath);
    window.removeEventListener("resize", this.updatePath);
  }
};
</script>

<template>
  <article class="about-USI-container">

    <section>

      <h2>Co je UŠI?</h2>
      <p class="basic-text">Unie škol inovativních spojuje pokrokové žáky kantory i vedení, za účelem sdílení
        dobré
        praxe a pro možnost
        organizace nejrůznějších akcí, které mohou jak studenty tak pedagogy posunout.</p>
    </section>

    <svg width="731" height="996" viewBox="0 0 731 996" fill="none" xmlns="http://www.w3.org/2000/svg" id="mySVG">
      <path
        d="M18 18V834C18 834 18.5672 850.571 22.5 867.5C25.6318 880.981 28.5337 888.581 33.5 901.5C37.5128 911.938 40.8467 917.511 47.5 926.5C53.2525 934.271 55.8467 938.591 63.5 944.5C72.5121 951.458 78.359 957.324 88.5 962.5C104.683 970.76 113.964 973.806 132 976C158.443 979.216 168.073 979.293 192.5 974C210.078 970.191 222.711 967.127 239 959.5C254.991 952.012 280.5 932.5 280.5 932.5C280.5 932.5 293.703 922.211 303 912C312.881 901.147 327.5 883.5 327.5 883.5L523 588L538 563.5C538 563.5 545.096 551.49 547.5 543C549.013 537.656 549.29 534.508 550 529C550.552 524.722 551.409 522.294 551 518C550.596 513.755 549.407 511.526 548 507.5C547.45 505.925 547.275 504.977 546.5 503.5C545.846 502.253 545.298 501.66 544.5 500.5C543.548 499.116 543.15 498.224 542 497C540.956 495.889 540.185 495.46 539 494.5C537.27 493.098 536.42 492.127 534.5 491C532.841 490.027 531.757 489.781 530 489C528.243 488.219 527.294 487.692 525.5 487C523.022 486.045 519 485 519 485C519 485 515.982 484.194 514 484C512.057 483.809 509 484 509 484H506L498 484C498 484 418.313 484.328 353.5 483.235C349.434 483.166 345.426 483.088 341.5 483C337.574 482.911 322.049 480.192 311.5 474C305.504 470.48 302.479 467.854 297.5 463C291.932 457.571 285 447.5 285 447.5C285 447.5 282.356 443.341 281 440.5C275.967 429.954 275.791 422.683 276 411C276.116 404.51 276.747 400.869 278 394.5C279.491 386.92 280.645 382.677 283.5 375.5C286.858 367.058 289.366 362.496 294.5 355C298.032 349.842 304.5 342.5 304.5 342.5L317 329L333.5 311C442 197.5 593.5 42.9998 593.5 42.9998C593.5 42.9998 603.45 35.041 610.5 30.9998C619.687 25.7338 625.266 23.2204 635.5 20.4998C642.201 18.7183 646.124 18.679 653 18.4998C659.648 18.3265 663.497 18.1096 670 19.4998C675.677 20.7134 678.845 21.8302 684 24.4998C688.617 26.8905 691.056 28.6117 695 31.9998C699.932 36.2371 706 44.4998 706 44.4998C706 44.4998 711.084 53.2574 712 59.4998C712.567 63.3637 712.011 69.4998 712.011 69.4998L713 979.5"
        stroke="#030304" stroke-width="35" id="myPath" />
      <path d="M245 14.5L326 104.5C326 104.5 363.5 144 370.5 144C377.5 144 406 108.5 406 108.5L492 14.5"
        stroke="#030304" stroke-width="35" />
    </svg>


  </article>

</template>
<style lang="scss" scoped>
@use "@/assets/variables.scss" as var;


svg {
  width: 200px;
  height: auto;
}



.about-USI-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 100px;
  justify-content: space-between;
  justify-items: space-between;
  align-items: center;
  margin-bottom: 100px;
  width: 100%;

  @media (max-width: 600px) {
    margin-bottom: 80px;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }


  h2 {
    padding-bottom: 20px;

    @media (max-width: 600px) {
      padding-bottom: 0px;
    }

  }

  p {
    line-height: 35px;

    @media (max-width: 600px) {
      line-height: 30px;
    }
  }

  img {
    width: 50%;
  }
}
</style>
