import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useArticlesStore = defineStore('articles', () => {
  let articles = ref([])

  async function getArticles() {
    const response = await axios.get("/article");
    articles.value = response.data;
  }
  getArticles();

  return { articles }
})
