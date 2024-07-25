import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import axios from 'axios';

export const useGlobalStore = defineStore('global', () => {
    const apiUrl = ref(window.location.hostname === 'localhost' ? 'http://localhost:8080/ranajakub/usiapi' : 'https://usiapi.ranajakub.com');
    const userId = ref(localStorage.getItem('userId') || null);

    watch(userId, (newValue) => {
        axios.defaults.headers.common['x-user-id'] = newValue;
        localStorage.setItem('userId', newValue);
    });

    return {
        apiUrl,
        userId
    }
})