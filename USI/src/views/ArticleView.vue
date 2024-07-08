<script setup>
import { useArticlesStore } from '@/stores/articles'
import { computed, watch } from 'vue';

const articleData = useArticlesStore();

const props = defineProps(['title']);

const article = computed(() => {
  return articleData.articles.find(article => article.title === props.title);
});


</script>

<template>
  <main>
    <article v-if="article" class="article-header-container">
      <h1>{{ article.title }}</h1>
      <section class="wrapper">
        <section class="date-container">
          <i class="fa-solid fa-calendar"></i>
          <p>{{ article.date }}</p>
        </section>
        <section class="share-conainer">
          <p>Sdílet:</p>
          <a href=""> <i class="fa-solid fa-link"></i></a>
          <a href=""> <i class="fa-brands fa-facebook"></i></a>
          <a href=""> <i class="fa-brands fa-twitter"></i></a>
        </section>
      </section>
    </article>

    <article v-if="article" class="article-text-container">
      <p v-for="paragraf in articleData.parseText(article.text)" :key="paragraf" class="basic-text"> 
        {{ paragraf }}
      </p>
    </article>

    <article class="gallery-container"></article>
  </main>
</template>

<style lang="scss" scoped>
@use "@/assets/variables.scss" as var;

main {
  width: 75%;
  padding-top: 80px;

  .article-header-container {
    background-color: var.$primary-color;
    color: white;
    padding: 30px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 80px;
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.586));

    .wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .share-conainer {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 15px;

        p {
          font-size: 25px;
        }

        a {
          text-decoration: none;

          i {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            width: 45px;
            height: 45px;
            border-radius: 100px;
            color: var.$primary-color;
            background-color: white;
            transition: 0.3s ease;

            &:hover {
              color: var.$accent-color;
              transition: 0.3s ease;
            }
          }
        }
      }

      .date-container {
        display: flex;
        flex-direction: row;
        gap: 10px;
        padding: 15px;
        border-radius: 400px;
        background-color: var.$accent-color;

        i {
          font-size: 20px;
        }

        p {
          font-size: 20px;
        }
      }
    }
  }
  .article-text-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
</style>
