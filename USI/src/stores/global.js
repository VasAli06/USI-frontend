import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGlobalStore = defineStore('global', () => {
    const apiUrl = ref(window.location.hostname === 'localhost' ? 'http://localhost:8080/ranajakub/usiapi' : 'https://usiapi.ranajakub.com');
    const userId = ref(localStorage.getItem('userId') || null);

    return {
        apiUrl,
        userId
    }
})