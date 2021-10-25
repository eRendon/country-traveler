<template>
  <ion-card @click="onDetail">
    <img src="assets/shapes.svg"/>
    <div class="title-category">
      <ion-title>Footer</ion-title>
    </div>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  IonCard,
    IonTitle
} from "@ionic/vue";

import { pin, walk, warning, wifi, wine } from 'ionicons/icons'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Category',
  components: {  IonCard, IonTitle },
  setup() {

    const router = useRouter()

    const onDetail = async (): Promise<void> => {
      await router.push({
        name: 'Detail',
        params: {
          id: '5'
        }
      })
    }

    return { warning, wine, wifi, pin, walk, onDetail }
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