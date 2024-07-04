<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  
        <RouterLink to="/">Domů</RouterLink>
        <RouterLink to="/o-nás">O nás</RouterLink>
        <RouterLink to="/školy">Školy v UŠI</RouterLink>
        <RouterLink to="/chci-být-součástí">Chci být součástí</RouterLink>
        <RouterLink to="/članky">Příspěvky</RouterLink>

  <RouterView />
</template>

<style scoped>

</style>
