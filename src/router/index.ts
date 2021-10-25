import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '@/components/Modules/Traveler/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home/index'
  },
  {
    path: '/home/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/home/index'
      },
      {
        path: 'index',
        name: 'Home',
        component: () => import('@/views/modules/traveler/home/home.vue')
      },
      {
        path: 'detail/:id',
        name: 'Detail',
        component: () => import('@/views/modules/traveler/detail/detail.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      },
      {
        path: '/folder/:id',
        component: () => import ('../views/Folder.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/login.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
