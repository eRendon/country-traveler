import { createApp } from 'vue'
import App from '@/App.vue'
import { IonicVue } from '@ionic/vue'
import router from '@/router'
import { formatCurrency } from '@/helpers/formatCurrency'

const app = createApp(App)
    .use(IonicVue)
    .use(router);

app.config.globalProperties.$filters = {
    formatCurrency
}

export default app