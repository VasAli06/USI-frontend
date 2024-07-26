import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useArticlesStore = defineStore('articles', () => {
  let articles = ref([])

  function parseText(text) {
    return text.split("/r/n");
  }

  async function getArticles() {
    const response = await axios.get("/article");
    articles.value = response.data;
    console.log(articles.value);
  }
  getArticles();

  return { articles, parseText }
})
