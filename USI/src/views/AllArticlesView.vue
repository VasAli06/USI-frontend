<script setup>
import { ref, computed } from 'vue';
import { useArticlesStore } from '@/stores/articles';
const articleData = useArticlesStore();
import ArticlePreviewCard from '@/components/allArticles/ArticlePreviewCard.vue';

const groupAndSortArticlesByMonth = (articles) => {
  const groupedArticles = articles.reduce((acc, article) => {
    const [day, month, year] = article.date.split('.').map(Number);
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

  return groupedArticles;
};

const articlesByMonth = groupAndSortArticlesByMonth(articleData.articles);

const sortedArticlesByMonth = Object.entries(articlesByMonth)
  .sort(([a], [b]) => b.localeCompare(a))
  .map(([key, value]) => ({ ...value, yearMonth: key }));

const itemsPerPage = 3;
const currentPage = ref(1);
const totalPages = computed(() => Math.ceil(sortedArticlesByMonth.length / itemsPerPage));

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return sortedArticlesByMonth.slice(start, end);
});

console.log(paginatedArticles.value);

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
    <h1>Publikované články</h1>
    <article v-for="({ yearMonth, monthName, articles }) in paginatedArticles" :key="yearMonth" class="month-container">
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

//main {
//width: 75%;
//padding-top: 80px;
//margin-bottom: 100px;

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

    &:disabled {

      background-color: #5a5a5a;
      cursor: not-allowed;
    }
  }
}

//}</style>
