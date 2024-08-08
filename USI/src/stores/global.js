import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import axios from 'axios';

export const useGlobalStore = defineStore('global', () => {
   // const apiUrl = ref(window.location.hostname === 'localhost' ? 'http://localhost:8080/ranajakub/usiapi' : 'https://usiapi.ranajakub.com');
    //const apiUrl = ref('http://localhost:8081');
    const apiUrl = ref('https://usiapi.ranajakub.com');


    const userId = ref(localStorage.getItem('userId') || null);

    watch(userId, (newValue) => {
        axios.defaults.headers.common['x-user-id'] = newValue;
        localStorage.setItem('userId', newValue);
    });

    function logout() {
        userId.value = null;
        localStorage.removeItem('userId');
        window.location.href = '/login';
    }

    return {
        apiUrl,
        userId,
        logout
    }
})