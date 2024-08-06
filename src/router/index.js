import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import AboutPage from '../pages/AboutPage.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainPage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
