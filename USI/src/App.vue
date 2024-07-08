<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const isVisible = computed(() => {
  // Adjust your logic based on route names
  if (route.name === 'joinus' || route.name === 'home') {
    return false
  } else {
    return true
  }
})
</script>

<template>
  <header v-if="isVisible">
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


  <RouterView />


  <footer>

    <article class="footer-container">
      <article class="menu-container">
        <p class="heading">Menu</p>
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

<style>
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
}
</style>

<style scoped lang="scss">
@use "assets/variables.scss" as var;

header {
  width: 70%;
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
    grid-template-columns: 1fr 1fr 1fr;

    .heading {
      font-size: 35px;
      font-weight: 600;
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
