import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/reset.css'
import './assets/fonts.css'
import './assets/main.scss'
import './assets/form.scss'
import App from './App.vue'
import router from './router'
import Vue3Marquee from 'vue3-marquee'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Marquee)

import axios from "axios"
import { useGlobalStore } from './stores/global'
import { useArticlesStore } from './stores/articles'
import { useSchoolsStore } from './stores/schools'

axios.defaults.baseURL = useGlobalStore().apiUrl;
axios.defaults.headers.common['x-user-id'] = `${useGlobalStore().userId}`;
axios.interceptors.response.use(
    response => {
        // Normal response processing
        return response;
    },
    error => {
        // Check for a 401 status and specific message
        if (error.response && error.response.status === 403 && error.response.data.message === "Not authorized") {
            // Redirect to /signin
            window.location.href = '/login';
        }
        // Log the error and reject the promise to propagate the error
        console.error('An error occurred:', error.message);
        return Promise.reject(error);
    }
);

useArticlesStore()
useSchoolsStore()

app.mount('#app')
