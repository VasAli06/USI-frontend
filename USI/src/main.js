import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/reset.css'
import './assets/fonts.css'
import './assets/texts.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

import axios from "axios"
import { useGlobalStore } from './stores/global'

axios.defaults.baseURL = useGlobalStore().apiUrl;
axios.defaults.headers.common['x-user-id'] = `${useGlobalStore().userId}`;
axios.interceptors.response.use(
    response => {
        // Normal response processing
        return response;
    },
    error => {
        // Check for a 401 status and specific message
        if (error.response && error.response.status === 400 && error.response.data === "User not found") {
            // Redirect to /signin
            window.location.href = '/login';
        }
        // Log the error and reject the promise to propagate the error
        console.error('An error occurred:', error.message);
        return Promise.reject(error);
    }
);

app.mount('#app')
