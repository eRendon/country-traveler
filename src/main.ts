import router from './router';

import '@/assets/tailwind.css'
import '@/assets/index.scss'
import '../public/assets/fonts/index.scss'

import app from "./plugins/app";
/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';
import "swiper/swiper.scss";

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

  
router.isReady().then(() => {
  app.mount('#app');
});