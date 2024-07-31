<script setup>
import { marked } from 'marked';

const props = defineProps({
    data: {
        type: Object,
        required: true
    },
    inAdminPanel: {
        type: Boolean,
        default: false
    }
})

function getFirstTextFromMarkdown(markdownContent) {
    const tokens = marked.lexer(markdownContent);
    for (const token of tokens) {
        if (token.type === 'paragraph') {
            if (token.text.length > 350) {
                return token.text.substring(0, 350) + "...";
            }
            return token.text.trimEnd();
        }
    }
    return '';
}
const imgRegex = /<img\s+(?:[^>]*?\s+)?src="[^"]*"(?:\s+[^>]*?)?\s*\/?>/gi;

</script>


<template>

    <article class="article-preview-card">
        <p class="title">{{ props.data.title }}</p>
        <section class="date-container">
            <i class="fa-solid fa-calendar"></i>
            <p>{{ (new Date(props.data.createdAt)).toLocaleDateString('cs-CZ') }}</p>

        </section>
        <p class="preview-text basic-text"
            v-html="marked(getFirstTextFromMarkdown(props.data.content)).replace(imgRegex, '').replace('\<p\>', '').replace('\</p\>', '').trimEnd() + `.....`">
        </p>

        <router-link v-if="!props.inAdminPanel" :to="{ name: 'article', params: { title: props.data.title } }">
            Přečíst
        </router-link>
        <router-link v-else :to="{ name: 'admin-article', params: { title: props.data.title } }">Upravit
            článek</router-link>
    </article>


</template>
<style lang="scss" scoped>
@use "@/assets/variables.scss" as var;

.article-preview-card {
    background-color: #F8F8F8;
    border-radius: 10px;
    padding: 40px;
    border: 2px solid var.$primary-color;
    display: flex;
    flex-direction: column;
    gap: 15px;

    .title {
        font-size: 40px;
        font-weight: 600;
    }

    .date-container {
        display: flex;
        flex-direction: row;
        gap: 10px;
        font-size: 20px;

        i {
            color: var.$primary-color;
        }
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 15%;
        color: white;
        font-size: 20px;
        padding: 10px;
        border-radius: 40px;
        text-decoration: none;
        background-color: var.$accent-color;
        transition: 0.3s ease;

        &:hover {
            transform: scale(105%);
            transition: 0.3s ease;
        }
    }
}
</style>