import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useSchoolsStore = defineStore('schools', () => {
    let schools = ref([])
    let selected_school = ref("asddsdsa")
    async function getSchools() {
        const response = await axios.get("/school");
        schools.value = response.data;
    }
    getSchools();

    return { schools,selected_school }
})