<template>
    <div class="all-schools">
        <h1>Všechny školy:</h1>
        <article class="schools-list">
            <button v-for="school in schoolsStore.schools" :key="school.id"
                @click="router.push(`/admin/school/${school.id}`)">{{
                school.name
            }}</button>
            <button class="add-new-school" @click="router.push(`/admin/school/new`)">Přidat novou školu</button>
        </article>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useSchoolsStore } from '@/stores/schools';
import { useRouter } from 'vue-router';

const schoolsStore = useSchoolsStore();
const router = useRouter();
</script>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as *;

.all-schools {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    gap: 1rem;
    height: fit-content;

    h1 {
        font-size: 1.5rem;
        font-weight: 600;
    }

    .schools-list {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        width: 100%;

        button {
            padding: 0.7rem 1rem;
            border-radius: 17px;
            background: #d7d7d7;
            color: $primary-color;
            transition: 0.3s;

            &:hover {
                background: #c7c7c7;
                transform: scale(1.05);
            }

            &.selected {
                background: $primary-color;
                color: #ffffff;
            }

            &.add-new-school {
                background-color: #d7d7d7a2;
                color: $accent-color;
            }
        }
    }
}
</style>