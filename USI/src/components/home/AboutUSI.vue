<template>
  <article class="about-USI-container">

    <section>

      <h2>Co je UŠI?</h2>
      <p class="basic-text">Unie škol inovativních spojuje pokrokové žáky kantory i vedení, za účelem sdílení
        dobré
        praxe a pro možnost
        organizace nejrůznějších akcí, které mohou jak studenty tak pedagogy posunout.</p>
    </section>
    <img src="/logo-cerna-zkracena.png" alt="">

  </article>

</template>
<style lang="scss" scoped>
@use "@/assets/variables.scss" as var;

.about-USI-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 100px;
  justify-content: space-between;
  justify-items: space-between;
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
    width: 40%;
  }
}
</style>
