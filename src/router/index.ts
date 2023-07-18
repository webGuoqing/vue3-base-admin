// vue-router中提供3种的路由模式
import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/about',
    component: () => import('@/views/about.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router