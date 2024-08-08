<template>
    <section class="admin-view">
        <aside ref="aside">
            <button @click="router.push('/admin/articles')"
                :class="{ selected: router.currentRoute.value.path === '/admin/articles' }">Články</button>
            <button @click="router.push('/admin/schools')"
                :class="{ selected: router.currentRoute.value.path === '/admin/schools' }">Školy</button>
            <button @click="router.push('/admin/images')"
                :class="{ selected: router.currentRoute.value.path === '/admin/images' }">Obrázky</button>
            <button @click="globalStore.logout"><i class="fa-solid fa-right-from-bracket"></i>Odhlásit se</button>
        </aside>
        <main>
            <router-view />
        </main>
    </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useGlobalStore } from "@/stores/global";
import { ref, onMounted } from "vue";

const globalStore = useGlobalStore();
const router = useRouter();

if (globalStore.userId === null) {
    router.push('/login');
}
</script>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as *;

.admin-view {
    width: 100%;
    height: 100vh;
    display: flex;

    aside {
        background-color: #f0f0f0;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        padding-top: 2rem;
        overflow-y: auto;
        width: 20rem;

        button {
            color: $accent-color;
            padding: 0.5rem 1rem;
            text-align: left;
            border-radius: 0.5rem;
            transition: background-color 0.2s;
            display: flex;
            align-items: center;
            gap: 0.5rem;

            &:hover {
                background-color: #d7d7d7a2;
            }

            &:last-child {
                margin-top: auto;
                text-align: center;
            }

            &.selected {
                background-color: $accent-color;
                color: #fff;
            }
        }
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