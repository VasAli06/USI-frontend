<template>

<article class="container">
      <section class="div1">
        <i class="fa-solid fa-square-check"></i>
        <p>
          Souhlas ředitele/ředitelky. </p>
      </section>
      <section class="div2">
        <i class="fa-solid fa-hand-holding-dollar"></i>
        <p>Zaplatit členský příspěvek v hodnotě 10 000Kč.</p>
      </section>
      <section class="div3">
        <i class="fa-solid fa-comments"></i>
        <p>Projít výběrovým řízením, obsahující pohovor s HR managery, kteří do pěti školních dnů sdělí
          své rozhodnutí a jeho důvod.</p>
      </section>
      <section class="div4">
        <div>
          <i class="fa-solid fa-graduation-cap"></i>
          <i class="fa-solid fa-graduation-cap"></i>
          <i class="fa-solid fa-graduation-cap"></i>
        </div>

        <p>Mít na škole alespoň tři aktivní studenty, kteří mají zájem se podílet na společné práci unie.
        </p>
      </section>
    </article>
</template>

<style lang="scss" scoped>
@use "@/assets/variables.scss" as var;


.container {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);

  section {
    background-color: #F8F8F8;
    font-size: 25px;
    display: flex;
    flex-direction: column;
    gap:20px;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0 4px 3px rgb(0, 0, 0));
    border-radius: 15px;
    border: 1.4px solid #2E2B58;
    padding: 30px;
    text-align: center;
    line-height: 28px;
    div {
      display: flex;
      flex-direction: row;
      gap: 15px;

  
    }
    i {
        color: var.$primary-color;
        font-size: 40px
      }
  }
}

.div1 {
  grid-area: 1 / 4 / 3 / 7;

}

.div2 {
  grid-area: 3 / 4 / 5 / 7;
}

.div3 {
  grid-area: 5 / 1 / 7 / 7;
}

.div4 {
  grid-area: 1 / 1 / 5 / 4;
}
</style>