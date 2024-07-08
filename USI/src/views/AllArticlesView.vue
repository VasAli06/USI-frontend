<script setup>

import { useArticlesStore } from '@/stores/articles'
const articleData = useArticlesStore();
import ArticlePreviewCard from '@/components/allArticles/ArticlePreviewCard.vue'

</script>

<template>
  <main>
    <h1>Publikované články</h1>
    <article class="month-container">
      <p class="month-name">Září</p>
      <article class="cards-conainer">
        <ArticlePreviewCard v-for="article in articleData.articles" :data=article></ArticlePreviewCard>

      </article>
    </article>
  </main>
</template>
<style lang="scss" scoped>
@use "@/assets/variables.scss" as var;

main {
  width: 75%;
  padding-top: 80px;

  .month-container {
    display: flex;
    flex-direction: column;
    gap:15px;

    .month-name {
      font-size: 28px;
      border-radius: 40px;
      width: 15%;
      padding: 10px;
      padding-left: 20px;
      background-color: var.$primary-color;
      color: white;
    }
  }

  .cards-conainer {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }


}
</style>