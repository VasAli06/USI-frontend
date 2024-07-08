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
    path: '/clanek/:title',
    name: 'article',
    component: ArticleView,
    props: true
  },
  {
    path: '/clanky', 
    name: 'allArticles',
    component: AllArticlesView
  },
  {
    path: '/chci-byt-soucasti', 
    name: 'joinus',
    component: JoinUsView
  },
  {
    path: '/skoly',
    name: 'schools',
    component: SchoolView
  },
  {
    path: '/o-nas',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  linkActiveClass: 'active-route',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
