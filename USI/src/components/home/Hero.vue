<script setup>
import { computed, ref } from 'vue'

const isOverlayVisible = ref(false)

const toggleOverlay = () => {
  isOverlayVisible.value = !isOverlayVisible.value
  console.log(isOverlayVisible)
}
</script>

<template>
  <article class="Hero-container">
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


    <section class="hero-text-container">
      <h1>Propojujeme školy studenty i pedagogy.</h1>
      <RouterLink to="/o-nas">Zjisti více</RouterLink>
    </section>



    <header class="mobile">
      <RouterLink to="/">

        <img src="/logo-bila.png" alt="logo Unie škol inovativních">
      </RouterLink>
      <i class="fa-solid fa-bars" @click="toggleOverlay"></i>

    </header>
    <nav class="overlay-nav" :class="{ 'active': isOverlayVisible }">
      <RouterLink to="/" @click="toggleOverlay">Domů</RouterLink>
      <RouterLink to="/o-nas" @click="toggleOverlay">O nás</RouterLink>
      <RouterLink to="/skoly" @click="toggleOverlay">Školy v UŠI</RouterLink>
      <RouterLink to="/chci-byt-soucasti" @click="toggleOverlay">Chci být součástí</RouterLink>
      <RouterLink to="/clanky" @click="toggleOverlay">Příspěvky</RouterLink>
    </nav>
  </article>
</template>

<style lang="scss" scoped>
@use "@/assets/variables.scss" as var;

.img-logo {
  width: 150px;

}

.Hero-container {
  width: 100vw;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/hero.webp");

  background-position: center;
  background-size: cover;

  @media (max-width: 500px) {
    background-position: 67%;

  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-text-container {
    position: absolute;
    color: white;
    height: 80%;
    width: 70%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    gap: 30px;

    @media (max-width: 980px) {
      width: 85%;

    }

    h1 {
      width: 80%;
      animation-duration: 0.8s;
      animation-name: FadeIn;
      animation-timing-function: ease;
    }

    @keyframes FadeIn {
      from {
        transform: translateX(-100%);
      }

      to {
        transform: translateX(0%);

      }
    }

    a {
      text-decoration: none;
      background-color: var.$accent-color;

      color: white;
      padding: 15px;
      padding-left: 35px;
      padding-right: 35px;
      border-radius: 40px;
      font-size: 28px;
      font-weight: 600;
      transition: 0.3s ease;

      @media (max-width: 980px) {
        font-size: 20px;
        padding: 10px;
        padding-left: 10px;
        padding-right: 10px;

      }

      @media (max-width: 400px) {
        font-size: 15px;
        padding: 5px;
        padding-left: 8px;
        padding-right: 8px;
      }

      &:hover {
        transform: scale(105%);
        transition: 0.3s ease;
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

    img {
      width: 100px;
    }

    @media (max-width: 980px) {
      width: 85%;

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
    height: 100vh;
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

    .active-route {
      color: #EE7B30;
    }
  }

  .Pc-header {
    z-index: 999;
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