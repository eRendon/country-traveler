<template>
  <ion-page>
    <Header :name-detail="tourDetail.name" :isDetailComponent="true" :isBackButton="true"/>
    <ion-content class="flex">
      <ion-label>
        {{ tourDetail.description }}
      </ion-label>
      <swiper :slidesPerView="2"
              :centeredSlides="true"
              :spaceBetween="10"
              :pagination='{ "clickable": true}'
              navigation
              :freeMode="false"
              :scrollbar="{ draggable: true }">
        <swiper-slide v-for="(c, index) in 6"
                      :virtualIndex="index"
                      :key="index">
          <ion-img src="assets/shapes.svg"></ion-img>
        </swiper-slide>
      </swiper>
      <div class="absolute bottom-0 right-2 text-white">
        <ion-button>COP {{ $filters.formatCurrency(tourDetail.price) }}</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import Header from '@/components/Header/Header.vue'
import {defineComponent, onMounted, ref} from 'vue'
import { IonPage, IonContent, IonLabel, IonImg, IonButton } from '@ionic/vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {useRoute, useRouter} from "vue-router";
import {ITour} from "@/interfaces/Traveler/ITour";

SwiperCore.use([ Navigation, Pagination, Scrollbar, A11y]);

export default defineComponent({
  name: "DetailCategory",
  components: { Header, IonPage, IonContent, IonLabel, Swiper, SwiperSlide, IonImg },
  setup() {

    const route = useRoute()
    const router = useRouter()

    const tourDetail = ref<ITour>({})

    onMounted(() => {
      const { tour } = route.params
      if (!tour) {
        router.push({
          name: 'Home'
        })
      }
      tourDetail.value = JSON.parse(tour as string)
      console.log(route)
    })

    return {
      tourDetail
    }
  }
})
</script>

<style scoped lang="scss">
ion-content {
  --padding-top: 3rem;
  --padding-start: 2rem;
  --padding-end: 2rem
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


</style>