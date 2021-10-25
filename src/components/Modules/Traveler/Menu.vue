<template>
  <ion-menu content-id="main-content" type="overlay">
    <ion-content>
      <div class="bg-avatar flex">
        <ion-avatar v-if="auth.isLogged" class="ion-align-self-center">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
        </ion-avatar>
        <div v-if="auth.isLogged" class="flex flex-col ion-align-self-center ml-5">
          <ion-label >Item Avatar</ion-label>
          <ion-label>Item Avatar</ion-label>
        </div>
      </div>
<!--      <ion-item class="bg-avatar">-->
<!--        <ion-avatar slot="start">-->
<!--          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">-->
<!--        </ion-avatar>-->
<!--        <ion-label>Item Avatar</ion-label>-->
<!--      </ion-item>-->
<!--      <ion-img src="assets/shapes.svg"></ion-img>-->
      <ion-list id="inbox-list">
<!--        <ion-list-header>Inbox</ion-list-header>-->
<!--        <ion-note>hi@ionicframework.com</ion-note>-->

        <ion-menu-toggle auto-hide="false" v-for="(p, i) in appPages" :key="i">
          <ion-item v-if="p.show" @click="selectedIndex = i" router-direction="root" :router-link="p.url" lines="none" detail="false" class="hydrated" :class="{ selected: selectedIndex === i }">
            <ion-icon slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
            <ion-label>{{ p.name }}</ion-label>
          </ion-item>
        </ion-menu-toggle>
      </ion-list>

      <ion-list id="labels-list">
        <ion-list-header>Labels</ion-list-header>

        <ion-item v-for="(label, index) in labels" lines="none" :key="index">
          <ion-icon slot="start" :ios="bookmarkOutline" :md="bookmarkSharp"></ion-icon>
          <ion-label>{{ label }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  bookmarkSharp,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
    homeSharp
} from 'ionicons/icons'
import { useRoute } from 'vue-router'
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
    IonAvatar
} from '@ionic/vue'

import { computed } from 'vue'
import { IAuth } from '@/interfaces/IAuth'
import { authStore } from '@/store'

export default defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonAvatar
  },
  setup () {
    const selectedIndex = ref(0);

    const auth = computed<IAuth>(() => authStore.getters.getStateAuth())

    const appPages = computed(() => {
      return [
        {
          title: 'Index',
          name: 'Inicio',
          url: '/home/index',
          iosIcon: mailOutline,
          mdIcon: homeSharp,
          show: true
        },
        {
          title: 'Register',
          name: 'Registrarse',
          url: '/home/login',
          iosIcon: paperPlaneOutline,
          mdIcon: paperPlaneSharp,
          show: !auth.value.isLogged
        },
        {
          title: 'Login',
          name: 'Iniciar Sesión',
          url: '/login',
          iosIcon: paperPlaneOutline,
          mdIcon: paperPlaneSharp,
          show: !auth.value.isLogged
        },
        {
          title: 'Favorites',
          name: 'Favoritos',
          url: '/folder/Favorites',
          iosIcon: heartOutline,
          mdIcon: heartSharp,
          show: auth.value.isLogged
        },
        {
          title: 'Archived',
          name: 'Archivado',
          url: '/folder/Archived',
          iosIcon: archiveOutline,
          mdIcon: archiveSharp,
          show: !auth.value.isLogged
        },
        {
          title: 'Trash',
          name: 'Trash',
          url: '/folder/Trash',
          iosIcon: trashOutline,
          mdIcon: trashSharp,
          show: !auth.value.isLogged
        },
        {
          title: 'Spam',
          name: 'Stapm',
          url: '/folder/Spam',
          iosIcon: warningOutline,
          mdIcon: warningSharp,
          show: !auth.value.isLogged
        }
      ]
    })
    const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

    const path = window.location.pathname.split('home/')[1];
    console.log(path)
    if (path != undefined) {
      selectedIndex.value = appPages.value.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }

    const route = useRoute();

    return {
      auth,
      selectedIndex,
      appPages,
      labels,
      archiveOutline,
      archiveSharp,
      bookmarkOutline,
      bookmarkSharp,
      heartOutline,
      heartSharp,
      mailOutline,
      mailSharp,
      paperPlaneOutline,
      paperPlaneSharp,
      trashOutline,
      trashSharp,
      warningOutline,
      warningSharp,
      isSelected: (url: string) => url === route.path ? 'selected' : ''
    }
  }
})
</script>

<style scoped lang="scss">
ion-item.selected {
  --color: var(--ion-color-primary);
}

.bg-avatar {
  width: 100%;
  height: 100px;
  background-size: cover;
  @apply pl-2;
  background: url('/assets/shapes.svg') no-repeat center center;
}
</style>