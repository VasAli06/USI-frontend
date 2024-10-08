<script setup>
import { ref, computed, watch } from 'vue';
import { useArticlesStore } from '@/stores/articles';
import ArticlePreviewCard from '@/components/allArticles/ArticlePreviewCard.vue';

const articleStore = useArticlesStore();

const itemsPerPage = 3;
const currentPage = ref(1);
const totalPages = computed(() => Math.ceil(articleStore.articles.length / itemsPerPage));

function formatShowArticles() {
  const articles = articleStore.articles;

  const groupedArticles = articles.reduce((acc, article) => {
    const date = new Date(article.createdAt);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const monthName = new Date(year, month - 1).toLocaleString('cs-CZ', { month: 'long' });
    const yearMonth = `${year}-${month.toString().padStart(2, '0')}`;
    if (!acc[yearMonth]) {
      acc[yearMonth] = { monthName, articles: [] };
    }
    acc[yearMonth].articles.push({ ...article, day, month, year });
    return acc;
  }, {});

  Object.values(groupedArticles).forEach(entry => {
    entry.articles.sort((a, b) => new Date(b.year, b.month - 1, b.day) - new Date(a.year, a.month - 1, a.day));
  });

  const sortedArticlesByMonth = Object.entries(groupedArticles)
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([key, value]) => ({ ...value, yearMonth: key }));

  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return sortedArticlesByMonth.slice(start, end);
}

const shownArticles = ref([]);

watch(() => [currentPage.value, articleStore.articles], () => {
  shownArticles.value = formatShowArticles();
}, {
  immediate: true
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

//CHAT-GPT potahalo NGL :-D
</script>

<template>
  <main>
    
    <h1 class="">Publikované články</h1>
    <article v-for="({ yearMonth, monthName, articles }) in shownArticles" :key="yearMonth" class="month-container">
      <p class="month-name">{{ monthName }}</p>
      <article class="cards-container">
        <ArticlePreviewCard v-for="article in articles" :key="article.id" :data="article" />
      </article>
    </article>

    <div class="pagination-controls" v-if="totalPages !== 1">
      <span>Strana {{ currentPage }} z {{ totalPages }}</span>
      <div>
        <button @click="prevPage" :disabled="currentPage === 1">Předchozí</button>
        <button @click="nextPage" :disabled="currentPage === totalPages">Další</button>
      </div>

    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "@/assets/variables.scss" as var;



.month-container {
  display: flex;
  flex-direction: column;
  gap: 15px;

  .month-name {
    font-size: 28px;
    border-radius: 40px;
    width: fit-content;
    padding: 10px 20px;
    background-color: var.$primary-color;
    color: white;
    margin-top: 60px;
    text-transform: uppercase;

    @media (max-width: 600px) {
      font-size: 20px;
      margin-top: 20px;
    }

    @media (max-width: 400px) {
      font-size: 16px;
      padding: 5px 10px;
    }


  }
}

.cards-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.pagination-controls {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
  margin-bottom: 40px;



  div {
    display: flex;
    flex-direction: row;
    gap: 40px;
  }

  button {
    padding: 10px 15px;
    border: none;
    background-color: var.$primary-color;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    width: 200px;

    @media (max-width: 500px) {
 width: 110px;
 font-size: 15px;
 padding: 6px 10px;

    }

    &:disabled {

      background-color: #5a5a5a;
      cursor: not-allowed;
    }
  }
}

//}</style>
