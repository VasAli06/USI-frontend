<script setup>
import ArticlePreviewCard from '@/components/allArticles/ArticlePreviewCard.vue';
import ScrollingLogos from '@/components/home/ScrollingLogos.vue';
import AboutUSI from '@/components/home/AboutUSI.vue';
import Hero from '@/components/home/Hero.vue';
import { ref, watch } from 'vue';

import { useArticlesStore } from '@/stores/articles';
const articleStore = useArticlesStore();

const twoLatestArticles = ref(null)

function getTwoLatestArticles() {
  twoLatestArticles.value = articleStore.articles
    .map(article => ({
      ...article,
      dateObj: new Date(article.createdAt)
    }))
    .sort((a, b) => b.dateObj - a.dateObj)
    .slice(0, 2);
}

watch(() => articleStore.articles, () => {
  getTwoLatestArticles();
}, {
  immediate: true
})

</script>

<template>

  <Hero></Hero>

  <main>
    <AboutUSI></AboutUSI>

    <article class="articles-container">
      <h2>Nejnovější články</h2>
      <ArticlePreviewCard v-for="article in twoLatestArticles" :key="article.id" :data="article" />
    </article>


  </main>
  <article class="schools-in-USI-container">
    <h2>Zapojené školy do UŠI</h2>
    <ScrollingLogos></ScrollingLogos>
  </article>
</template>

<style lang="scss" scoped>
@use "@/assets/variables.scss" as var;

.articles-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 100px;

  h2 {
    margin-bottom: -15px;
  }
}

.schools-in-USI-container {
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  width: 100%;
  margin-bottom: 300px;

  h2 {
    margin-bottom: 60px;
    text-align: center;
  }

}
</style>
