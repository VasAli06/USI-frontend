<script setup>
</script>

<template>
  <main>
    <article class="text-about-container">

      <section>
        <h1>O nás</h1>
        <p class="basic-text">Unie škol inovativních spojuje pokrokové žáky kantory i vedení, za účelem sdílení dobré
          praxe a pro možnost
          organizace nejrůznějších akcí, které mohou jak studenty tak pedagogy posunout.</p>

      </section>
      <section>
        <h2>Naše Vize</h2>
        <p class="basic-text">Naší vizí je propojit školy v rámci celé České republiky, kde spolupráce dosud není
          samozřejmostí. Usilujeme
          o
          vytvoření pevné sítě vzdělávacích institucí, které budou spolupracovat, sdílet své zkušenosti a navzájem se
          podporovat v procesu vzdělávání.</p>
      </section>
      <section>
        <h2>Sdílení Příkladů Dobré Praxe</h2>
        <p class="basic-text">Chceme mezi sebou sdílet příklady dobré praxe v oblasti využívání rámcových vzdělávacích
          programů. Věříme, že
          vzájemná inspirace a přenos úspěšných metod a strategií může vést k výraznému zlepšení kvality výuky ve všech
          školách. Naše zkušenosti a osvědčené postupy mohou sloužit jako modely pro ostatní školy, které hledají nové
          způsoby, jak zefektivnit svůj vzdělávací proces.</p>



      </section>
      <section>

        <h2>Rozvoj Neformálního Vzdělávání</h2>
        <p class="basic-text">Apelujeme na důležitost rozvíjení neformálního vzdělávání, které je nezbytnou součástí
          celkového rozvoje
          studentů. Neformální vzdělávání přináší nové perspektivy, rozšiřuje obzory a posiluje dovednosti, které jsou
          klíčové pro osobní i profesní život. Chceme podporovat aktivity, které pomáhají studentům rozvíjet jejich
          kreativitu, kritické myšlení a sociální dovednosti.</p>

      </section>


      <section>

        <h2>Vztahy a Spolupráce </h2>
        <p class="basic-text">Vytvoření silných a efektivních vztahů mezi řediteli, pedagogy a studenty je pro nás
          prioritou. Zajištění
          vzájemné spolupráce je klíčové pro dosažení našich cílů. Věříme, že otevřená komunikace a spolupráce mezi
          všemi
          aktéry v procesu vzdělávání vede k vytvoření přátelského a podporujícího prostředí, které je základem
          úspěšného
          vzdělávacího systému.</p>
      </section>

    </article>

    <article class="join-us-banner">
      <img src="/join-us-banner.png" alt="">
      <section>
        <p>Zaujali jsme Vás?</p>

        <RouterLink to="/chci-byt-soucasti">Přidej se k nám!</RouterLink>


      </section>


    </article>
  </main>
</template>


<style lang="scss" scoped>
@use "@/assets/variables.scss" as var;

main {
  width: 75%;
  padding-top: 90px;

  .text-about-container {
    display: flex;
    flex-direction: column;
    gap: 50px;

    section {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }

  .join-us-banner {
    padding-top: 80px;
    padding-bottom: 80px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    filter: drop-shadow(0 4px 4px rgb(0, 0, 0));

    img {
      width: 100%;
      border-radius: 40px;
    }

    section {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      height: 100%;

      p {
        font-size: 70px;
        font-weight: 700;
        color: white;
        -webkit-text-stroke-color: black;
        -webkit-text-stroke-width: 2px;
      }

      a {
        background-color: var.$accent-color;
        color: white;
        text-decoration: none;
        font-size: 30px;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-right: 30px;
        padding-left: 30px;
        border-radius: 30px;
        transition: 0.3s ease;
        font-weight: 500;

        &:hover {
          transform: scale(105%);
          transition: 0.3s ease;
        }
      }
    }
  }
}
</style>