<template>
    <div class="logo-container">
        <div class="logo-slider" :class="{ 'animation-reverse': props.reverse === 'true' }">
            <div v-for="(logo, index) in random_logos_order" :key="index" class="logo-item">
                <img :src="logo" alt="School Logo">
            </div>
            <div v-for="(logo, index) in random_logos_order" :key="index + logos.length" class="logo-item">
                <img :src="logo" alt="School Logo">
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['reverse'])

console.log(props.reverse)

let logos = [
    '/loga/1.png',
    '/loga/2.png',
    '/loga/3.png',
    '/loga/4.png',
    '/loga/5.png',
    '/loga/6.png',
    '/loga/7.png',
    '/loga/8.png',
]
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
let random_logos_order = shuffleArray(logos)
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
