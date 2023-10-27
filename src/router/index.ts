import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import App from '../App.vue'

const routes = [
  {
    path: '/:url',
    name: 'App',
    component: App,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
