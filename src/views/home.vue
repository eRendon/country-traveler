<template>
  <ion-page>
    <circle-menu></circle-menu>
  </ion-page>
</template>

<script lang="ts">
import { IonPage } from '@ionic/vue';
import CircleMenu from "../components/CircleMenu/CircleMenu.vue";

export default  {
  name: 'home',
  components: { IonPage, CircleMenu }
}
</script>