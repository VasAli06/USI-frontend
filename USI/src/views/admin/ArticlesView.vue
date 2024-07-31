<template>
    <div class="all-articles">
        <button @click="addArticle">+</button>
        <ArticlePreviewCard v-for="article in articlesStore.articles" :key="article.id" :data="article"
            :inAdminPanel="true" />
    </div>
</template>

<script setup>
import ArticlePreviewCard from "@/components/allArticles/ArticlePreviewCard.vue";
import { useArticlesStore } from "@/stores/articles";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const articlesStore = useArticlesStore();

function addArticle() {
    router.push("/admin/article/new");
}
</script>

<style lang="scss" scoped>
@use "@/assets/variables.scss" as *;

.all-articles {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: fit-content;
width: 90%;
    button {
        position: absolute;
        bottom: 3rem;
        right: 3rem;
        background-color: $accent-color;
        color: rgba(255, 255, 255, 0.906);
        border: none;
        height: 4rem;
        width: 4rem;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 1rem 0.2rem rgba(0, 0, 0, 0.2);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        font-weight: 400;
        transition: all 0.3s ease;

        &:hover {
            transform: scale(1.05);
        }
    }
}
</style>