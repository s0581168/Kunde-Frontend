import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListeView from '@/views/ListeView'
import TerminView from '@/views/TerminView'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/liste',
    name: 'liste',
    component: ListeView
  },
  {
    path: '/termin',
    name: 'termin',
    component: TerminView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
