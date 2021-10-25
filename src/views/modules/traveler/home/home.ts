import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonMenuButton,
    IonButtons,
    IonGrid,
    IonCol,
    IonRow
} from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';

SwiperCore.use([ Navigation, Pagination, Scrollbar]);


import ExploreContainer from '@/components/ExploreContainer.vue';
import Header from '@/components/Modules/Traveler/Header.vue'
import Category from '@/components/Modules/Traveler/Cards/Category.vue'

export default {
    name: 'Home',
    components: {
        ExploreContainer,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonPage,
        IonMenuButton,
        IonButtons,
        IonGrid,
        IonCol,
        IonRow,
        Swiper, SwiperSlide,
        Header,
        Category
    },
    setup() {
        // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
        const slideOpts = {
            initialSlide: 1,
            speed: 400
        };

        const onSwiper = (swiper: any) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };

        return { slideOpts, onSwiper, onSlideChange, modules: [Navigation, Pagination, Scrollbar] }
    }
}