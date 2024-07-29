<template>
    <div class="images-view">
        <div v-if="!imagesUrl" class="images-loading">
            <LoadingSpinner />
            <p>Obrázky se načítají</p>
        </div>
        <div class="images" v-if="imagesUrl">
            <div v-for="image in paginatedImages" :key="image.id">
                <img :src="image.url" alt="Obrázek" />
                <button @click="deleteImage(image.id)">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
                <div v-if="image.loading" class="loading">
                    <LoadingSpinner />
                </div>
            </div>
        </div>
        <div class="pagination" v-if="imagesUrl">
            <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
            <span>Page {{ currentPage }} of {{ totalPages }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';
import { useGlobalStore } from '@/stores/global';
import LoadingSpinner from '@/components/loadingSpinner.vue';

const globalStore = useGlobalStore();

const imagesUrl = ref(null);
const currentPage = ref(1);
const imagesPerPage = 40;

const totalPages = computed(() => Math.ceil(imagesUrl.value.length / imagesPerPage));

const paginatedImages = computed(() => {
    const start = (currentPage.value - 1) * imagesPerPage;
    const end = start + imagesPerPage;
    return imagesUrl.value.slice(start, end);
});

async function getImages() {
    const response = await axios.get('/image');
    imagesUrl.value = response.data.images.map(image => ({
        url: `${globalStore.apiUrl}/image/${image.id}`,
        id: image.id,
        loading: false
    }));
}

function nextPage() {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
}

function prevPage() {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}

async function deleteImage(id) {
    imagesUrl.value.find(image => image.id === id).loading = true;
    await axios.delete(`/image/${id}`);
    imagesUrl.value = imagesUrl.value.filter(image => image.id !== id);

    // Adjust currentPage if the last page becomes empty
    if (paginatedImages.value.length === 0 && currentPage.value > 1) {
        currentPage.value--;
    }
}

getImages();
</script>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as *;

.images-loading {
    padding-top: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    :deep() {
        transform: scale(2);
    }

    >p {
        transform: scale(1);
        font-size: 0.7rem;
    }
}

.images-view {
    padding: 1rem;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .images {
        display: flex;
        flex-wrap: wrap;
        gap: 1.4rem;
        margin-bottom: 1rem;

        >div {
            width: 15rem;
            height: 15rem;
            background-color: #f0f0f0;
            border-radius: 1rem;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            .loading {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.122);
                backdrop-filter: blur(6px);
                display: flex;
                justify-content: center;
                align-items: center;

                :deep() {
                    transform: scale(2);
                }
            }

            button {
                display: none;
            }

            &:hover {
                cursor: pointer;
                outline: 3px dashed $accent-color;

                button {
                    display: block;
                    position: absolute;
                    bottom: 1rem;
                    left: 1rem;
                    height: 3rem;
                    width: 3rem;
                    background-color: $accent-color;
                    border: none;
                    border-radius: 0.8rem;
                    padding: 0.5rem;
                    color: black;
                    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
                    transition: transform 0.3s;

                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }
        }
    }

    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        button {
            padding: 0.5rem 1rem;
            background-color: $accent-color;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: background-color 0.3s;

            &:disabled {
                background-color: #ccc;
                cursor: not-allowed;
            }

            &:not(:disabled):hover {
                background-color: darken($accent-color, 10%);
            }
        }
    }
}
</style>