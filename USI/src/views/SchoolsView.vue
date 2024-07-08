<script setup>
import ScrollingLogos from '@/components/home/ScrollingLogos.vue';

</script>

<template>
  <main>
    <h1>Školy zapojené v UŠI</h1>
    <h2>Interaktivní mapa škol</h2>
    <article class="schools-in-USI-container">
    
        <ScrollingLogos reverse="false"> </ScrollingLogos>
   
        <ScrollingLogos reverse="true"></ScrollingLogos>
    

    </article>
    <article class="schools-in-USI-container">
    </article>

  </main>
</template>
<style lang="scss" scoped>
.schools-in-USI-container {
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  gap: 40px;
  height: 1px;
  width: 100%;
  margin-bottom: 200px;

  section {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  h2 {
    margin-bottom: 60px;
    text-align: center;
  }

}
</style>