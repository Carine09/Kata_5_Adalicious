import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Home from '../pages/Menu.vue'
import Home from '../pages/Cuisine.vue'
import Home from '../pages/Commande.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router