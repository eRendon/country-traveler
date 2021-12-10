import { createRouter, createWebHistory } from '@ionic/vue-router';
import routes from '@/router/routes'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
