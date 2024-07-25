<template>
    <div class="all-articles">
        <button @click="addArticle">Přidat článek</button>
        <ArticlePreviewCard v-for="article in articles" :key="article.id" :data="article" :inAdminPanel="true" />
    </div>
</template>

<script setup>
import ArticlePreviewCard from "@/components/allArticles/ArticlePreviewCard.vue";
import { useArticlesStore } from "@/stores/articles";
import { ref, watch } from "vue";

const articlesStore = useArticlesStore();
const articles = ref(articlesStore.articles);

watch(() => articlesStore.articles, () => {
    articles.value = articlesStore.articles;
    console.log(articles.value);
},
    { immediate: true }
);
</script>

<style lang="scss" scoped>
.all-articles {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: fit-content;
}
</style>