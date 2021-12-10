<template>
  <ion-card @click="onDetail" class="relative">
    <div v-if="tour.favorite && auth.isLogged"  class="absolute right-1.5 top-1.5">
      <ion-icon color="dark" :icon="heart"></ion-icon>
    </div>
    <div v-else-if="!tour.favorite && auth.isLogged"  class="absolute right-1.5 top-1.5">
      <ion-icon color="dark" :icon="heartOutline"></ion-icon>
    </div>
    <img src="assets/shapes.svg"/>
    <div class="title-category">
      <ion-title>{{ tour.name }}</ion-title>
    </div>
  </ion-card>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import {
  IonCard,
  IonTitle,
  IonIcon
} from '@ionic/vue';

import { heartOutline, heart } from 'ionicons/icons'

import { pin, walk, warning, wifi, wine } from 'ionicons/icons'
import { useRouter } from 'vue-router'
import { ITour } from '@/interfaces/Traveler/ITour'
import { authStore } from '@/store'

export default defineComponent({
  name: 'Category',
  props: {
    tour: {
      type: Object as () => ITour,
      default: () => ({}),
      required: true
    }
  },
  components: { IonCard, IonTitle, IonIcon },
  setup (props) {

    const router = useRouter()

    const auth = computed(() => authStore.getters.getStateAuth())

    const onDetail = async (): Promise<void> => {
      await router.push({
        name: 'Detail',
        params: {
          id: props.tour.id,
          tour: JSON.stringify(props.tour)
        }
      })
    }

    return { warning, wine, wifi, pin, walk, onDetail, heartOutline, auth, heart }
  }
})
</script>

<style scoped>
ion-card {
  position: relative;
  border-radius: 10px;
  width: 90%;
  height: 95%;
}

.title-category {
  position: absolute;
  width: 100%;
  font-size: 1.0em;
  color: black;
  bottom: 0;
  height: 30px;
  background: #00000070;
  border-radius: 0 0 10px 10px;
}

</style>