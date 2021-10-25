<template>
  <ion-page>
    <Header :isDetailComponent="true" :isBackButton="true"/>
    <ion-content class="flex">
      <ion-label>
        Loren Impsut
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
    </ion-content>
  </ion-page>
</template>

<script>
import Header from '@/components/Modules/Traveler/Header.vue'
import { defineComponent } from 'vue'
import { IonPage, IonContent, IonLabel, IonImg } from '@ionic/vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([ Navigation, Pagination, Scrollbar, A11y]);

export default defineComponent({
  name: "DetailCategory",
  components: { Header, IonPage, IonContent, IonLabel, Swiper, SwiperSlide, IonImg },
  setup() {

    return {

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