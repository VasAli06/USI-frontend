<script setup>
import JoinConditons from '@/components/joinUs/JoinConditions.vue'
import ApplyForm from '@/components/joinUs/ApplyForm.vue'
import HRManagers from '@/components/joinUs/HRManagers.vue'
import Hero from '@/components/joinUs/hero.vue'

</script>

<template>
  <Hero></Hero>
  <main>
    <JoinConditons></JoinConditons>
    <ApplyForm></ApplyForm>
    <HRManagers></HRManagers>


  </main>
</template>
<style lang="scss" scoped>
@use "@/assets/variables.scss" as var;
</style>