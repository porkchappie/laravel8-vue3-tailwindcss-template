import { createRouter, createWebHistory } from 'vue-router'
import Main from 'Vue/views/Main.vue'
import NotFound from 'Vue/views/NotFound.vue'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
