<template>
    <div class="logo-container">
        <div class="logo-slider-wrapper">
            <div class="logo-slider" :class="{ 'animation-reverse': reverse }">
                <div v-for="(logo, index) in randomLogosOrder" :key="index" class="logo-item">
                    <img :src="logo" alt="School Logo">
                </div>
                <div v-for="(logo, index) in randomLogosOrder" :key="index + logoLinks.length" class="logo-item">
                    <img :src="logo" alt="School Logo">
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    reverse: {
        type: Boolean,
        default: false
    },
    logoLinks: {
        type: Array,
        default: () => []
    }
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const randomLogosOrder = computed(() => {
    return shuffleArray([...props.logoLinks]); // Spread operator to avoid mutating original array
});
</script>

<style lang="scss" scoped>
.logo-container {
    width: 100%;
    height: 120px;
    overflow: hidden; 
}

.logo-slider-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
}

.logo-slider {
    display: flex;
    animation: scroll 10s linear infinite;
    width: calc(200% + 100px); 
}

.logo-item {
    flex-shrink: 0;
    margin-right: 100px;
    @media (max-width: 500px) {
        margin-right: 50px;
    }
}

.logo-item img {
    max-height: 100px;
    max-width: fit-content;
    @media (max-width: 500px) {
        max-height: 50px;
    }
}

.animation-reverse {
    animation: scroll-reverse 10s linear infinite;
}

@keyframes scroll {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-50%);
    }
}

@keyframes scroll-reverse {
    0% {
        transform: translateX(-50%);
    }

    100% {
        transform: translateX(0%);
    }
}
</style>
