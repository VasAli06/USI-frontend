<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { computed, ref } from 'vue'

const route = useRoute()

const isVisible = computed(() => {
  // Adjust your logic based on route names
  if (route.name === 'joinus' || route.name === 'home' || (route.name && route.name.startsWith('admin'))) {
    return false
  } else {
    return true
  }
})

const footerIsVisible = computed(() => {
  if (route.name && route.name.startsWith('admin')) {
    return false
  } else {
    return true
  }
})

const isOverlayVisible = ref(false)

const toggleOverlay = () => {
  isOverlayVisible.value = !isOverlayVisible.value
  console.log(isOverlayVisible)
}
</script>

<template>
  <header v-if="isVisible" class="pc-header">
    <img src="/logo-cerna.png" alt="logo Unie škol inovativních">
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
  <header class="mobile" v-if="isVisible">
    <img src="/logo-cerna.png" alt="logo Unie škol inovativních">
    <i class="fa-solid fa-bars" @click="toggleOverlay"></i>

  </header>
  <nav class="overlay-nav" :class="{ 'active': isOverlayVisible }">
    <RouterLink to="/" @click="toggleOverlay">Domů</RouterLink>
    <RouterLink to="/o-nas" @click="toggleOverlay">O nás</RouterLink>
    <RouterLink to="/skoly" @click="toggleOverlay">Školy v UŠI</RouterLink>
    <RouterLink to="/chci-byt-soucasti" @click="toggleOverlay">Chci být součástí</RouterLink>
    <RouterLink to="/clanky" @click="toggleOverlay">Příspěvky</RouterLink>
  </nav>
  <RouterView />


  <footer v-if="footerIsVisible">

    <article class="footer-container">
      <article class="menu-container">
        <p class="heading">Menu</p>
        <RouterLink to="/">Domů</RouterLink>
        <RouterLink to="/o-nas">O nás</RouterLink>
        <RouterLink to="/skoly">Školy v UŠI</RouterLink>
        <RouterLink to="/chci-byt-soucasti">Chci být součástí</RouterLink>
        <RouterLink to="/clanky">Příspěvky</RouterLink>
        <RouterLink to="/login">Administrace</RouterLink>

      </article>
      <article class="contactinfo-container">
        <p class="heading">Kontaktní informace</p>
        <p>Unie Škol Inovativních, z.s.</p>
        <p>Preslova 72/25, Smíchov, 150 00 Praha</p>
        <p>IČO: 19829485</p>
      </article>

      <article class="social-contact-container">
        <p class="heading">Sledujte nás</p>
        <section class="social">
          <a href="https://www.instagram.com/unie_skol_inovativnich/"><i class="fa-brands fa-instagram"></i></a>
          <a href=""> <i class="fa-brands fa-facebook"></i></a>
          <a href="https://www.youtube.com/@unieskolinovativnich"><i class="fa-brands fa-youtube"></i></a>
          <a href="https://www.linkedin.com/company/unie-%C5%A1kol-inovativn%C3%ADch/"><i
              class="fa-brands fa-linkedin"></i></a>
          <a href=""><i class="fa-brands fa-twitter"></i></a>
        </section>
        <hr>
        <section class="contact">
          <span>
            <i class="fa-solid fa-user"></i>
            <p>Předseda: František Bouma</p>
          </span>
          <span>
            <i class="fa-solid fa-envelope"></i>
            <p>Email: info@unieskolinovativnich.cz</p>
          </span>

        </section>



      </article>

    </article>

    <article class="logo-copy-container">
      <img src="/logo-bila-zkracena.png" alt="">
      <section>
        <i class="fa-regular fa-copyright"></i>
        <p>{{ new Date().getFullYear() }}</p>
      </section>

    </article>

  </footer>
</template>

<style lang="scss">
body {
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  overflow-x: hidden;

}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

main {
  width: 70%;
  padding-top: 80px;
  margin-bottom: 80px;

  @media (max-width: 980px) {
    width: 85%;
  }
}
</style>

<style scoped lang="scss">
@use "assets/variables.scss" as var;

header.mobile {
  width: 85%;
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 980px) {
    display: none;
  }

  img {
    width: 20%;
  }

  i {
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
  z-index: 1001;

  a {
    color: white;
    font-size: 30px;
  }

  &.active {
    transform: translateX(0);
    opacity: 1;
  }
}



.pc-header {
  width: 70%;
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 980px) {
    display: none;
  }


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
      height: 80%;
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

footer {
  width: 100%;
  background-color: var.$primary-color ;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  font-size: 18px;

  .footer-container {
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 50px;

    @media (max-width: 980px) {
      grid-template-columns: 1fr 2fr;
      margin-bottom: 60px;
      width: 85%;
    }



    .heading {
      font-size: 35px;
      font-weight: 600;

      @media (max-width: 980px) {
        font-size: 25px;
      }
    }

    .menu-container {
      display: flex;
      flex-direction: column;
      gap: 14px;

      a {
        color: white;
        text-decoration: none;
        transition: 0.3s ease;

        &:hover {
          color: var.$accent-color;
          transition: 0.3s ease;
        }
      }
    }

    .contactinfo-container {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .social-contact-container {
      display: flex;
      flex-direction: column;
      gap: 20px;

      @media (max-width: 980px) {

        grid-area: 2 / 1 / 3 / 3;
      }

      hr {
        width: 100%;
      }

      .social {
        display: flex;
        flex-direction: row;
        gap: 20px;

        a {
          text-decoration: none;
          transition: 0.3s ease;

          &:hover {
            transition: 0.3s ease;
            transform: scale(105%);
          }
        }

        i {
          color: var.$accent-color;
          background-color: white;
          font-size: 25px;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1000px;

          @media (max-width: 980px) {
            font-size: 20px;
            height: 40px;
            width: 40px;
          }
        }


      }

      .contact {
        display: flex;
        flex-direction: column;
        gap: 10px;

        span {
          display: flex;
          flex-direction: row;
          gap: 10px;

          i {
            width: 20px;
            font-size: 20px;
            color: var.$accent-color;

          }
        }
      }
    }

    p,
    a {
      font-size: 15px;
    }
  }

  .logo-copy-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding-bottom: 30px;

    section {
      display: flex;
      flex-direction: row;
      gap: 5px;
      color: white;

      i {
        color: var.$accent-color ;
      }
    }

    img {
      width: 40px;
    }
  }
}
</style>
