<script setup>
import ArticlePreviewCard from '@/components/allArticles/ArticlePreviewCard.vue';
import ScrollingLogos from '@/components/home/ScrollingLogos.vue';
import AboutUSI from '@/components/home/AboutUSI.vue';
import Hero from '@/components/home/Hero.vue';
import { ref, watch } from 'vue';
import { useArticlesStore } from '@/stores/articles';
import { useSchoolsStore } from '@/stores/schools';

const articleStore = useArticlesStore();
const schoolsStore = useSchoolsStore();

const twoLatestArticles = ref(null)
const logoLinks = ref([])

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

watch(() => schoolsStore.schools, () => {
  logoLinks.value = schoolsStore.schools.map(school => school.logoLink)
}, {
  immediate: true
})

</script>

<template>

  <Hero></Hero>

  <main>
    <AboutUSI></AboutUSI>

    <article class="articles-container">
      <h2>Nejnovější příspěvky</h2>
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

  h2 {
    margin-bottom: -15px;
    @media (max-width: 600px) {
      margin-bottom: -35px;
    }

  }
}

.schools-in-USI-container {
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;

  h2 {
    margin-bottom: 30px;
    text-align: center;

    @media (max-width: 400px) {
      margin-bottom: 20px;
    }
  }


}
</style>
