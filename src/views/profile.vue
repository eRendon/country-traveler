<template>
  <ion-page>
    <ion-header class="ion-no-border" >
      <ion-toolbar >
        <ion-buttons default-href="home" slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
      <div class="header">
        <ion-img src="assets/shapes.svg"></ion-img>
        <ion-avatar >
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
        </ion-avatar>
      </div>
    </ion-header>
    <ion-content>
      <div class="pt-14 px-3 Panel">
        <div class="">
          <div class="Tabs">
            <div @click="onSelectedTab('information')"
                 :class="{active: slidesActive.information}"
                 class="Tabs__tab Tab ">
              <a>Mis datos</a>
            </div>
            <div @click="onSelectedTab('favorites')"
                 :class="{active: slidesActive.favorites}"
                 class="Tabs__tab Tab">
              <a>Mis Favoritos</a>
            </div>
            <div @click="onSelectedTab('bookings')"
                 :class="{active: slidesActive.bookings}"
                 class="Tabs__tab Tab">
              <a>Mis Reservas</a>
            </div>
            <div class="Tabs__presentation-slider" role="presentation">

            </div>
          </div>
        </div>
        <div class="Panel__body">
          <transition mode="out-in" name="slide-fade">
            <Information v-if="slidesActive.information" />
            <Favorites v-else-if="slidesActive.favorites" />
            <Bookings v-else-if="slidesActive.bookings" />
          </transition>
<!--          <transition mode="in-out" name="list">-->
<!--          </transition>-->
<!--          <transition mode="in-out" name="list">-->
<!--          </transition>-->
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import Information from '@/components/Profile/Information/Information.vue'
import Favorites from '@/components/Profile/Favorites/Favorites.vue'
import Bookings from '@/components/Profile/Bookings/Bookings.vue'

import { defineComponent, ref } from 'vue'
import {
  IonPage,
  IonHeader,
  IonContent,
  IonButtons,
  IonBackButton,
  IonMenuButton,
  IonToolbar,
  IonAvatar,
    IonImg
} from '@ionic/vue'

interface Slides {
  [key: string]: boolean;
}

export default defineComponent({
  name: 'Profile',
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonButtons,
    IonBackButton,
    IonMenuButton,
    IonToolbar,
    IonAvatar,
    IonImg,
    Bookings,
    Favorites,
    Information
  },
  setup () {
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };

    const slidesActive = ref<Slides>({
      information: true,
      favorites: false,
      bookings: false
    })

    const onSelectedTab = (activeTab: string): void => {
      slidesActive.value.bookings = false
      slidesActive.value.favorites = false
      slidesActive.value.information = false
      slidesActive.value[activeTab] = true
    }

    return { slidesActive, onSelectedTab, slideOpts }
  }
})
</script>

<style scoped lang="scss">

.Panel {
  width: 100%;
  max-width: 600px;
  margin: 30px auto;
  &__body {
    background-color: #f2f2f2;
  }
}


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
  ion-avatar {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: 70%;
    width: 25%;
  }
}

.Tabs {
  position: relative;
  background-color: #fff;
  &:after {
    content: ' ';
    display: table;
    clear: both;
  }
  margin: 0;
  padding: 0;
  list-style: none;
  /**
   * UPDATE: better to animate "transform" property than "left"
   * property. You can see old code lower down for reference.
   */
  &__tab {
    float: left;
    width: 33.333%;
    text-align: center;
    &:first-child.active ~ .Tabs__presentation-slider {
      transform: translateX(0) scaleX(0.333);
    }
    &:nth-child(2).active ~ .Tabs__presentation-slider {
      transform: translateX(33.333%) scaleX(0.333);
    }
    &:nth-child(3).active ~ .Tabs__presentation-slider {
      transform: translateX(calc(33.333% * 2)) scaleX(0.333);
    }
  }
  &__presentation-slider {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #4A66F4;
    transform-origin: 0 0;
    transition: transform .25s;
  }

  /**
   * OLD CODE (for reference)
   * It's a bit easier to understand with "left",
   * but the animation is not as smooth
   */

  /* &__tab {
    float: left;
    width: 33.333%;
    text-align: center;
    &:first-child.active ~ .Tabs__presentation-slider {
      left: 0;
    }
    &:nth-child(2).active ~ .Tabs__presentation-slider {
      left: 33.333%;
    }
    &:nth-child(3).active ~ .Tabs__presentation-slider {
      left: calc(33.333% * 2);
    }
  }
  &__presentation-slider {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 33.333%;
    height: 2px;
    background-color: #4A66F4;
    transform-origin: 0 0;
    transition: left .25s;
  } */
}

.Tab {
  > a {
    display: block;
    padding: 10px 12px;
    text-decoration: none;
    color: #666;
    transition: color .15s;
  }
  &.active {
    > a {
      color: #222;
    }
  }
  &:hover {
    > a {
      color: #222;
    }
  }
}
/* Las animaciones de entrada y salida pueden usar */
/* funciones de espera y duración diferentes.      */
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .2s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-30px);
}
</style>