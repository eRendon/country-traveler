import { RouteRecordRaw } from 'vue-router'
import home from '@/views/home.vue'
import Tabs from '@/layouts/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: home
    },
    {
        path: '/travel/',
        component: Tabs,
        name: 'Tabs',
        children: [
            {
                path: '',
                redirect: '/travel/index'
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
                component: () => import('@/views/home.vue')
            },
            {
                path: '/folder/:id',
                component: () => import ('../views/Folder.vue')
            }
        ]
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/profile.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/components/Auth/Login/Login.vue')
    },
]

export default routes