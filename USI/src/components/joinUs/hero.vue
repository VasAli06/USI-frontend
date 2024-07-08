<template>
      <article class="Hero-JoinUsView">

<header>
  <img src="/logo-bila.png" alt="logo Unie škol inovativních">
  <nav>
    <article>
      <RouterLink to="/">Domů</RouterLink>
      <RouterLink to="/o-nas">O nás</RouterLink>
      <RouterLink to="/skoly">Školy v UŠI</RouterLink>
      <RouterLink to="/chci-byt-soucasti">Chci být součástí</RouterLink>
      <RouterLink to="/clanky">Příspěvky</RouterLink>

    </article>

  </nav>


</header>



<img src="/Pridej-se-k-nam.png" alt="">
<article class="text-container">
  <h1>Chci být součástí</h1>
  <p>Pro přijetí do Unie Škol Inovativních je třeba splnit následující podmínky:</p>
</article>

</article>
</template>

<style lang="scss" scoped>
@use "@/assets/variables.scss" as var;


.Hero-JoinUsView {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    width: 100vw;
  }

  .text-container {
    width: 70%;
    color: white;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 20px;
    bottom: 5%;

    p {
      font-size: 30px;
    }
  }



  header {
    width: 70%;
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    top: 1%;

    img {
      width: 12%;
    }

    nav {
      display: flex;
      flex-direction: row;
      gap: 50px;

      article {
        display: flex;
        flex-direction: row;
        gap: 30px;
        height: 70%;
        align-items: center;
        padding-left: 40px;
        padding-right: 40px;
        border-radius: 50px;

        a {
          text-decoration: none;
          color: white;
          transition: 0.3s ease;

          &:hover {
            transition: 0.3s ease;
            color: var.$accent-color;
          }
        }

        .active-route {
          color: var.$accent-color;
        }
      }
    }
  }

}

</style>