<template>
    <div>
        <textarea ref="markdownEditor"></textarea>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import SimpleMDE from 'simplemde';
import 'simplemde/dist/simplemde.min.css';

const markdownEditor = ref(null);

onMounted(() => {
    new SimpleMDE({ element: markdownEditor.value });
});
</script>

<style scoped>
/* Add any custom styles here */
</style>