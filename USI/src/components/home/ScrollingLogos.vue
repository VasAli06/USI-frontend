<template>
    <div class="logo-container">
        <div class="logo-slider" :class="{ 'animation-reverse': props.reverse }">
            <div v-for="(logo, index) in randomLogosOrder" :key="index" class="logo-item">
                <img :src="logo" alt="School Logo">
            </div>
            <div v-for="(logo, index) in randomLogosOrder" :key="index + props.logoLinks.length" class="logo-item">
                <img :src="logo" alt="School Logo">
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
})

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
const randomLogosOrder = computed(() => {
    return shuffleArray(props.logoLinks)
})
</script>

<style lang="scss" scoped>
.logo-container {
    width: 100%;
    height: 120px;
}

.logo-slider {
    display: flex;
    position: absolute;
    overflow: hidden;
    animation: scroll 28s linear infinite;
}

.logo-item {
    margin-right: 100px;
}

.logo-item img {
    max-height: 100px;
}


.animation-reverse {
    animation: scroll-reverse 28s linear infinite;
}

@keyframes scroll-reverse {
    0% {
        transform: translateX(-50%);
    }

    100% {
        transform: translateX(0%);
    }
}

@keyframes scroll {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-50%);
    }
}
</style>
