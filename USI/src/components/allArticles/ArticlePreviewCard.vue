<script setup>

const props = defineProps(['data'])

</script>


<template>

    <article class="article-preview-card">
        <p class="title">{{ props.data.title }}</p>
        <section class="date-container">
            <i class="fa-solid fa-calendar"></i>
            <p>{{ props.data.date }}</p>

        </section>
        <p class="preview-text basic-text">{{ props.data.text.replaceAll("/r/n", "").substring(0, 350) }}......</p>

        <router-link :to="{ name: 'article', params: { title: props.data.title } }">
            Přečíst
        </router-link>
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