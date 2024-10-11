import {} from "vue-router"
import { createWebHistory, createRouter } from 'vue-router'

import HomeView from "../views/HomeView.vue"
import LoginView from "../views/LoginView.vue"

const routes = [
  { path: '/', component: LoginView },
  { path: '/login',component: HomeView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;