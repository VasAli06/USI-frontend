<script setup>

</script>

<template>

<article class="join-us-banner">
      <img src="/join-us-banner.png" alt="">
      <section>
        <p>Zaujali jsme Vás?</p>

        <RouterLink to="/chci-byt-soucasti">Přidej se k nám!</RouterLink>
        
      </section>
    </article>
</template>
<style lang="scss" scoped>
@use "@/assets/variables.scss" as var;
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

</style>