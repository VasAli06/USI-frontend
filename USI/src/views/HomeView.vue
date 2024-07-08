<script setup>
import ArticlePreviewCard from '@/components/allArticles/ArticlePreviewCard.vue';
import ScrollingLogos from '@/components/home/ScrollingLogos.vue';
import AboutUSI from '@/components/home/AboutUSI.vue';
import Hero from '@/components/home/Hero.vue';

import { useArticlesStore } from '@/stores/articles';
const articleData = useArticlesStore();

const getTwoLatestArticles = (articles) => {
  return articles
    .map(article => ({
      ...article,
      dateObj: new Date(article.date.split('.').reverse().join('-'))
    }))
    .sort((a, b) => b.dateObj - a.dateObj)
    .slice(0, 2);
};

</script>

<template>

  <Hero></Hero>

  <main>
    <AboutUSI></AboutUSI>
 
    <article class="articles-container">
      <h2>Nejnovější články</h2>
      <ArticlePreviewCard v-for="article in getTwoLatestArticles(articleData.articles)" :key="article.id"
        :data="article" />
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
  h2 {
    margin-bottom: -15px;
  }

  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 100px;

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
