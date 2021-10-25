<template>
  <ion-header class="ion-no-border" slot="fixed" :translucent="true">
    <ion-toolbar>
      <ion-buttons default-href="home" v-if="isBackButton" slot="start">
        <ion-back-button ></ion-back-button>
      </ion-buttons>
      <ion-title>titulo</ion-title>
      <ion-buttons slot="end">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
    </ion-toolbar>
    <div class="header">
      <ion-img src="assets/shapes.svg"></ion-img>
      <ion-title v-if="!isDetailComponent">title</ion-title>
      <ion-label v-if="!isDetailComponent">Loren impus</ion-label>
      <ion-button v-if="isDetailComponent" class="detail-button-component">
        Macao Beach
      </ion-button>
    </div>
  </ion-header>
</template>

<script lang="ts">
import {
  IonLabel,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonImg,
  IonMenuButton,
  IonButtons,
    IonButton,
    IonBackButton,
} from '@ionic/vue';

import { defineComponent } from 'vue'

export default defineComponent({
  name: "Header",
  props: {
    isBackButton: {
      type: Boolean,
      default: false
    },
    isDetailComponent: {
      type: Boolean,
      default: false
    }
  },
  components: {
    IonImg,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonMenuButton,
    IonButtons,
    IonLabel,
    IonBackButton
  },
})
</script>

<style scoped lang="scss">

.header {
  position: relative;

  ion-title {
    position: absolute;
    bottom: calc(5px + 5px);
    @apply mb-3
  }

  ion-label {
    position: absolute;
    bottom: 5px;
    @apply ml-3
  }
}

.detail-button-component {
  position: absolute;
  top: 100px;
  width: calc(100% - 60px);
  display: flex;
  height: 81px;
  justify-content: space-between;
  margin: auto;
  transform: translateX(-50%);
  left: 50%;
}

</style>