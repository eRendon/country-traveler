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
    IonRow,
    IonInput
} from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';

SwiperCore.use([ Navigation, Pagination, Scrollbar]);


import ExploreContainer from '@/components/ExploreContainer.vue';
import Header from '@/components/Header/Header.vue'
import Category from '@/components/Modules/Traveler/Cards/Category.vue'
import { filesRequest, tourRequest } from '@/api-client'
import { onMounted, ref } from 'vue'
import { ITour } from '@/interfaces/Traveler/ITour'

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
        Swiper,
        SwiperSlide,
        IonInput,
        Header,
        Category
    },
    setup() {
        // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
        const slideOpts = {
            initialSlide: 1,
            speed: 400
        };

        const tours = ref<ITour[]>([])

        const onSwiper = (swiper: any) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };

        const getAllTours = async () => {
            const { data, success } = await tourRequest.getAll()
            console.log('getAllTours', data)
            if (success) {
                tours.value = data
            }
        }

        onMounted(async () => {
            await getAllTours()
        })

        const uploadPhoto = async (file: FileList) => {
            console.log(file)
            const response = await filesRequest.uploadPhoto(file[0])
            console.log(response)
        }

        return {
            slideOpts,
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar],
            tours,
            uploadPhoto
        }
    }
}