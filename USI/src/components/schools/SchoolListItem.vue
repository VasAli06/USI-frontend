<script setup>
const props = defineProps(['data'])
</script>

<template>
    <article>
        <i class="fa-solid fa-caret-down fa-rotate-270"></i>

        <p>{{ props.data.name }} </p>
    </article>
</template>
<style lang="scss" scoped>
@use "@/assets/variables.scss" as var;

article {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    p {
        text-decoration: underline;
        font-size: 18px;
        transition: 0.3s ease;

        &:hover {
            transition: 0.3s ease;

            cursor: pointer;
            color: var.$accent-color
        }

    }

    i {
        font-size: 25px;
        color: var.$accent-color
    }
}
</style>