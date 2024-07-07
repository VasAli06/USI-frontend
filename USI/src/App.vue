<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img src="/logo-cerna.png" alt="logo Unie škol inovativních">
    <nav>
      <article>
        <a href="">
          <RouterLink to="/">Domů</RouterLink>
        </a>
        <a href="">
          <RouterLink to="/o-nas">O nás</RouterLink>
        </a>
        <a href="">
          <RouterLink to="/skoly">Školy v UŠI</RouterLink>
        </a>
        <a href="">
          <RouterLink to="/chci-byt-soucasti">Chci být součástí</RouterLink>
        </a>
        <a href="">
          <RouterLink to="/clanky">Příspěvky</RouterLink>
        </a>

      </article>

    </nav>


  </header>


  <RouterView />

  
  <footer>

  </footer>
</template>

<style>
body {
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<style scoped lang="scss">
@use "assets/variables.scss" as var;

header {
  width: 75%;

  padding-top: 30px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

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
      background-color: var.$primary-color;
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
    }



  }


}
</style>
