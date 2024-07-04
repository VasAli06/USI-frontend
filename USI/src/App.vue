<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <article>
      <img src="/logo-cerna.png" alt="logo Unie škol inovativních">
      <nav>
        <a href="">
          <RouterLink to="/">Domů</RouterLink>
        </a>
        <a href="">
          <RouterLink to="/o-nás">O nás</RouterLink>
        </a>
        <a href="">
          <RouterLink to="/školy">Školy v UŠI</RouterLink>
        </a>
        <a href="">
          <RouterLink to="/chci-být-součástí">Chci být součástí</RouterLink>
        </a>
        <a href="">
          <RouterLink to="/članky">Příspěvky</RouterLink>
        </a>
      </nav>

    </article>

  </header>


  <RouterView />
  <footer>

  </footer>
</template>

<style>
body {
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  /* Normal */
}
</style>

<style scoped lang="scss">
header {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  article {
    width: 75%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    img {
      width: 10%;
    }

    nav {
      background-color: blue;
      display: flex;
      flex-direction: row;
      gap: 50px;

      a {
        text-decoration: none;
        color: white;
      }
    }
  }


}
</style>
