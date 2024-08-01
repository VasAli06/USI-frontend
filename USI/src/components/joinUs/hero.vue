<script setup>
import { computed, ref } from 'vue'

const isOverlayVisible = ref(false)

const toggleOverlay = () => {
  isOverlayVisible.value = !isOverlayVisible.value
  console.log(isOverlayVisible)
}
</script>

<template>
  <article class="Hero-JoinUsView">

    <header class="Pc-header">
      <RouterLink to="/" class="img-logo">
        <img src="/logo-bila.png" alt="logo Unie škol inovativních">
      </RouterLink>
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

    <header class="mobile">
      <RouterLink to="/"> <img src="/logo-bila.png" alt="logo Unie škol inovativních"></RouterLink>
      <i class="fa-solid fa-bars" @click="toggleOverlay"></i>

    </header>
    <nav class="overlay-nav" :class="{ 'active': isOverlayVisible }">
      <RouterLink to="/" @click="toggleOverlay">Domů</RouterLink>
      <RouterLink to="/o-nas" @click="toggleOverlay">O nás</RouterLink>
      <RouterLink to="/skoly" @click="toggleOverlay">Školy v UŠI</RouterLink>
      <RouterLink to="/chci-byt-soucasti" @click="toggleOverlay">Chci být součástí</RouterLink>
      <RouterLink to="/clanky" @click="toggleOverlay">Příspěvky</RouterLink>
    </nav>



    <article class="text-container">
      <h1>Chci být součástí</h1>
      <p>Pro přijetí do Unie Škol Inovativních je třeba splnit následující podmínky:</p>
    </article>

  </article>
</template>

<style lang="scss" scoped>
@use "@/assets/variables.scss" as var;

.img-logo {
  width: 150px;

}

.Hero-JoinUsView {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-image: url("/Pridej-se-k-nam.png");
  height: 70vh;
  width: 100%;

  @media (max-width: 410px) {
    background-position: 16%;



  }

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

    @media (max-width: 980px) {
      width: 85%;

    }
    @media (max-width: 410px) {
      gap: 10px;
    }

    p {
      font-size: 30px;

      @media (max-width: 900px) {
        font-size: 20px;
      }
      @media (max-width: 410px) {
        font-size: 15px;
      }

    }


  }

  .mobile {
    z-index: 999;
    width: 70%;
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    top: 1%;

    @media (max-width: 980px) {
      width: 85%;

    }

    img {
      width: 100px;
    }

    @media (min-width: 980px) {
      display: none;
    }

    i {
      color: white;
      font-size: 25px;

    }
  }

  .overlay-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-height: -webkit-fill-available;
    width: 100%;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform: translateX(-100%);
    position: fixed;
    top: 0;
    left: 0;
    background-color: var.$primary-color;
    opacity: 1;
    visibility: visible;
    z-index: 1000;

    &.active {
      transform: translateX(0);
      opacity: 1;
    }

    a {
      color: white;
      font-size: 30px;
      font-weight: 600;
    }
    .active-route{
    color: #EE7B30;
}
  }

  .Pc-header {
    width: 70%;
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    top: 1%;

    @media (max-width: 980px) {
      display: none;
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