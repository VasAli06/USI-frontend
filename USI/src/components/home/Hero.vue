<template>
      <article class="Hero-container">
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
    <section class="hero-text-container">
      <h1>Propojujeme školy studenty i pedagogy.</h1>
      <RouterLink to="/o-nas">Zjisti více</RouterLink>
    </section>

    <img src="/hero.png" alt="">
  </article>
</template>

<style lang="scss" scoped>
@use "@/assets/variables.scss" as var;

.Hero-container {
  width: 100vw;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;

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

    h1 {
      width: 80%;
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

      &:hover {
        transform: scale(105%);
        transition: 0.3s ease;
      }

    }
  }

  header {
    z-index: 999;
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