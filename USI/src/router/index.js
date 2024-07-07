import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SchoolView from '../views/SchoolsView.vue'
import JoinUsView from '../views/JoinUsView.vue'
import ArticleView from '../views/ArticleView.vue'
import AllArticlesView from '../views/AllArticlesView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/clanek', // odstraněna diakritika
    name: 'article',
    component: ArticleView
  },
  {
    path: '/clanky', // odstraněna diakritika
    name: 'allArticles',
    component: AllArticlesView
  },
  {
    path: '/chci-byt-soucasti', // odstraněna diakritika
    name: 'joinus',
    component: JoinUsView
  },
  {
    path: '/skoly', // odstraněna diakritika
    name: 'schools',
    component: SchoolView
  },
  {
    path: '/o-nas', // odstraněna diakritika
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
