<template>
    <div v-if="article" class="edit-article">
        <form @submit.prevent="editArticle">
            <input class="title" v-model="article.title" type="text" placeholder="Název článku" />
            <VMarkdownEditor v-model="article.content" locale="en" :upload-action="handleUpload" />
            <button type="submit" @click="editArticle">Upravit článek</button>
        </form>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useArticlesStore } from "@/stores/articles";
import { useRoute } from "vue-router";
import { VMarkdownEditor } from '@/components/markdown/vue3-markdown.js' // i have edited the component so it has preview turned on by default, that's why it can't be in node_modules
import '@/components/markdown/style.css'
import axios from 'axios';
import { useGlobalStore } from "@/stores/global";

const globalStore = useGlobalStore();
const articleStore = useArticlesStore();

const route = useRoute();
const title = route.params.title;

const article = ref(null)

async function handleUpload(file) {
    console.log(file);
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
        reader.onload = async function (event) {
            const rawImageData = event.target.result;
            console.log(rawImageData);

            try {
                const response = await axios.post('/image', { image: rawImageData });

                const imageUrl = `${globalStore.apiUrl}/image/${response.data.id}`;
                resolve(imageUrl);
            } catch (error) {
                alert('Při nahrávání obrázku nastala chyba, zkuste obrázek zmenšit, zkontrolujte připojení k internetu nebo použijte jiný formát souboru.');
                reject(error);
            }
        };
        reader.onerror = reject;
        reader.readAsDataURL(file); // or reader.readAsBinaryString(file);
    });
}

async function editArticle() {
    try {
        await axios.put(`/article/${article.value.id}`, { article: article.value });
        articleStore.articles = articleStore.articles.map(article => article.id === article.value.id ? article.value : article);
    } catch (error) {
        console.error(error);
    }
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
    height: fit-content;

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

        button {
            background-color: $accent-color;
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 5px;
            cursor: pointer;
            width: fit-content;
            align-self: flex-end;
        }
    }
}
</style>@/components/markdown/vue3-markdown.js