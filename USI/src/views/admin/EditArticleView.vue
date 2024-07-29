<template>
    <div v-if="article" class="edit-article">
        <form @submit.prevent>
            <input class="title" v-model="article.title" type="text" placeholder="Název článku"
                @input="() => { errors.emptyTitle = false; errors.titleExists = false }" />
            <div class="uploading" v-if="uploading">
                <LoadingSpinner />
                <p>Nahrávání obrázku...</p>
            </div>
            <VMarkdownEditor v-model="article.content" locale="en" :upload-action="handleUpload" />
            <div class="date">
                <p>Datum publikace:</p>
                <input type="date" v-model="date" />
            </div>
            <button @click="deleteArticle" class="delete">
                Smazat článek
                <i class="fa-solid fa-trash-can"></i>
            </button>
            <button type="submit" @click="editArticle">
                <LoadingSpinner class="" v-if="loading" />
                <span>Upravit článek</span>
            </button>
            <p class="error" v-if="errors.emptyTitle"><i class="fa-solid fa-circle-exclamation"></i> Doplňte prosím
                název článku</p>
            <p class="error" v-if="errors.titleExists"><i class="fa-solid fa-circle-exclamation"></i> Článek s tímto
                názvem již existuje</p>
        </form>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useArticlesStore } from "@/stores/articles";
import { useRoute, onBeforeRouteLeave } from "vue-router";
import { VMarkdownEditor } from '@/components/markdown/vue3-markdown.js' // i have edited the component so it has preview turned on by default, that's why it can't be in node_modules
import '@/components/markdown/style.css'
import axios from 'axios';
import { useGlobalStore } from "@/stores/global";
import { cloneDeep } from 'lodash';
import LoadingSpinner from "@/components/loadingSpinner.vue";
import Joi from 'joi';
import { useRouter } from "vue-router";

const verifyNewArticleSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    createdAt: Joi.date().required()
})

const router = useRouter();
const globalStore = useGlobalStore();
const articleStore = useArticlesStore();

const route = useRoute();
const title = route.params.title;

const article = ref(null);
const date = ref(null);
const loading = ref(false);
const uploading = ref(false);
const errors = ref({
    emptyTitle: false,
    titleExists: false
})

async function handleUpload(file) {
    uploading.value = true;
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
        reader.onload = async function (event) {
            const rawImageData = event.target.result;

            try {
                const response = await axios.post('/image', { image: rawImageData });

                const imageUrl = `${globalStore.apiUrl}/image/${response.data.id}`;
                resolve(imageUrl);
                uploading.value = false;
            } catch (error) {
                alert('Při nahrávání obrázku nastala chyba, zkuste obrázek zmenšit, zkontrolujte připojení k internetu nebo použijte jiný formát souboru.');
                reject(error);
                uploading.value = false;
            }
        };
        reader.onerror = reject;
        reader.readAsDataURL(file); // or reader.readAsBinaryString(file);
    });
}

async function editArticle() {
    if (article.value.title === '') {
        errors.value.emptyTitle = true;
        return;
    }
    try {
        loading.value = true;
        article.value.createdAt = `${date.value}T${article.value.createdAt.split('T')[1]}`;
        if (title === 'new') {
            const response = await axios.post('/article', { article: article.value });
            articleStore.articles.push(response.data.article);
            window.location.href = `/admin/article/${response.data.article.title}`; // using router doesn't really reload this component so the variables still have the old values
        } else {
            await axios.put(`/article/${article.value.id}`, { article: article.value });
            articleStore.articles = articleStore.articles.map(mappedArticle => mappedArticle.id === article.value.id ? article.value : mappedArticle);
        }
    } catch (error) {
        console.error(error);
        if (error.response.data.message === 'Article with this title already exists') errors.value.titleExists = true;
    }
    loading.value = false;
}

watch(() => articleStore.articles, (newVal, oldVal) => {
    if (title === 'new') {
        if (article.value) return;
        article.value = {
            title: '',
            content: '',
            createdAt: new Date().toISOString()
        }
        date.value = new Date().toISOString().split('T')[0];
        return;
    }

    const foundArticle = articleStore.articles.find(article => article.title === title);
    if (articleStore.articles && !foundArticle) {
        router.push({ name: 'admin-articles' });
        return;
    }
    article.value = foundArticle ? cloneDeep(foundArticle) : null;
    if (article.value) date.value = article.value.createdAt.split('T')[0];
}, {
    immediate: true
});

onBeforeRouteLeave((to, from, next) => {
    const unsavedChanges = () => {
        if (articleStore.articles.find(foundArticle => foundArticle.id === article.value.id) == undefined) return false;
        return article.value.title !== articleStore.articles.find(foundArticle => foundArticle.id === article.value.id).title || article.value.content !== articleStore.articles.find(foundArticle => foundArticle.id === article.value.id).content || date.value !== articleStore.articles.find(foundArticle => foundArticle.id === article.value.id).createdAt.split('T')[0];
    }
    if (unsavedChanges()) {
        const answer = window.confirm('Máte neuložené změny, opravdu chcete tuto stránku opustit?');
        if (answer) {
            next();
        } else {
            next(false);
        }
    } else {
        next();
    }
});

async function deleteArticle() {
    const answer = window.confirm('Opravdu chcete smazat článek?');
    if (answer) {
        try {
            await axios.delete(`/article/${article.value.id}`);
            articleStore.articles = articleStore.articles.filter(filteredArticle => filteredArticle.id !== article.value.id);
            router.push({ name: 'admin-articles' });
        } catch (error) {
            console.error(error);
            alert('Při mazání článku nastala chyba, zkuste to znovu.');
        }
    }
}
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

        .error {
            width: 100%;
            text-align: right;
        }

        .uploading {
            display: flex;
            gap: 1rem;
            align-items: center;
        }

        .date {
            display: flex;
            gap: 1rem;
            align-items: center;
            font-size: 1.3rem;

            input {
                font-size: 1.2rem;
                color: $accent-color;
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

            display: flex;
            align-items: center;
            gap: 1rem;

            &.delete {
                background-color: rgba(128, 128, 128, 0.544);
                padding: 1rem 1.3rem;
                align-self: flex-start;
                transition: background-color 0.3s;

                &:hover {
                    background-color: $red;
                }
            }
        }
    }
}
</style>