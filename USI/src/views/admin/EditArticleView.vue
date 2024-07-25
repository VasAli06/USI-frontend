<template>
    <div v-if="article" class="edit-article">
        <form @submit.prevent="editArticle">
            <input class="title" v-model="article.title" type="text" placeholder="Název článku" />
            <VMarkdownEditor v-model="article.content" locale="en" :upload-action="handleUpload" />
            <button type="submit">Upravit článek</button>
        </form>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useArticlesStore } from "@/stores/articles";
import { useRoute } from "vue-router";
import { VMarkdownEditor } from 'vue3-markdown'
import 'vue3-markdown/dist/style.css'
import axios from 'axios';
import { useGlobalStore } from "@/stores/global";

const globalStore = useGlobalStore();
const articleStore = useArticlesStore();

const route = useRoute();
const title = route.params.title;
console.log(title);

const article = ref(null)

async function handleUpload(file) {
    console.log(file)
    const response = await axios.post('/image', file)
    const imageUrl = `${globalStore.apiUrl}/image/${response.data.id}`
    return imageUrl
}

watch(() => articleStore.articles, (newVal, oldVal) => {
    article.value = articleStore.articles.find(article => article.title === title);
}, {
    immediate: true
});
</script>

<style lang="scss" scoped>
@use "../../assets/variables.scss" as *;

div.edit-article {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 3rem;

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input.title {
            font-size: 4rem;
            width: 100%;
            border: 3px dashed rgba(128, 128, 128, 0.259);
            border-radius: 5px;
            padding: 0rem 1rem;

            &:focus {
                border-color: $accent-color;
                outline: none;
            }
        }
    }
}
</style>