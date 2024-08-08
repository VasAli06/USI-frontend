<template>
  <Vue3Marquee :duration="marqueeDuration" :direction="props.reverse">
    <img v-for="(image, index) in shuffledLogoLinks" :key="index" :src="image" @click="handleLogoClick(image)" />
  </Vue3Marquee>
</template>

<script setup>
import { Vue3Marquee } from 'vue3-marquee'
import { computed, ref, watch } from 'vue'
import { useSchoolsStore } from '@/stores/schools';
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const schoolsStore = useSchoolsStore();
const logoLinks = ref([])


const marqueeDuration = computed(() => 3 * logoLinks.value.length);

watch(() => schoolsStore.schools, () => {
  logoLinks.value = schoolsStore.schools.map(school => school.logoLink)
}, {
  immediate: true
})
function handleLogoClick(data) {
  router.push({ path: '/skoly', hash: '#detail-box-link' });

  schoolsStore.selectedSchool  =schoolsStore.schools.find(school => school.logoLink === data)
}
const props = defineProps({
  reverse: {
    type: String,
  }
});

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const shuffledLogoLinks = computed(() => shuffleArray(logoLinks.value));
</script>

<style lang="scss" scoped>
img {
  max-height: 100px;
  max-width: fit-content;
  margin-right: 100px;
  transition: 0.4s ease;
  padding-top: 5px;

  &:hover {
    cursor: pointer;
    transform: scale(105%);
    transition: 0.4s ease;
  }

  @media (max-width: 500px) {
    max-height: 50px;
    margin-right: 50px;

  }
}
</style>
