import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SchoolView from '../views/SchoolsView.vue'
import JoinUsView from '../views/JoinUsView.vue'
import ArticleView from '../views/ArticleView.vue'
import AllArticlesView from '../views/AllArticlesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/članek',
      name: 'article',
      component: ArticleView
    },
    {
      path: '/članky',
      name: 'allArticles',
      component: AllArticlesView
    },
    {
      path: '/chci-být-součástí',
      name: 'joinus',
      component: JoinUsView
    },
    {
      path: '/školy',
      name: 'schools',
      component: SchoolView
    },
    {
      path: '/o-nás',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
