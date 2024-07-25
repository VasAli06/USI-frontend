<template>
    <section class="admin-view">
        <aside>
            <button @click="router.push('/admin/articles')">Články</button>
            <button @click="router.push('/admin/schools')">Školy</button>
            <button @click="logout">Odhlásit se</button>
        </aside>
        <main>
            <router-view />
        </main>
    </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
//router.push('/admin/articles')

const state = {
    articles: "articles",
    schools: "schools",
}
const currentState = ref(state.articles);
</script>

<style lang="scss" scoped>
.admin-view {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 20rem 1fr;

    aside {
        background-color: #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        padding-top: 2rem;
        overflow-y: auto;
    }

    main {
        padding: 1rem;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        overflow-y: scroll;
    }
}
</style>