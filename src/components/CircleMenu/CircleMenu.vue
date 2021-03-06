<template>
  <div class="circle-menu">
    <button
        class="menu-btn"
        @click="isToggle"
        :class="[isShow ? 'open' : 'close']">
      <i></i> <i></i> <i></i>
      <span class="ripple"></span>
    </button>
    <transition name="fade">
      <ion-label v-if="!isShow" class="init">Iniciar</ion-label>
    </transition>
    <transition name="move" mode="out-in" appear>
      <ul class="menu" v-show="isShow">
        <li
            v-for="(item, index) in menus"
            :key="index"
            class="menuitem-wrapper"
        >
          <div class="icon-holder">
            <a @click="goTo(item.url)" class="menu-item flex flex-col ion-justify-content-center">
              <ion-icon class=" " :icon="item.icon"></ion-icon>
              <!--              <ion-label class="text-xs text-white">{{ item.name }}</ion-label>-->
              <!--              <i class="material-icons">{{ item }}</i>-->
            </a>
          </div>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts">
import { home, storefrontOutline, carSportOutline, calendarOutline, airplaneOutline } from 'ionicons/icons'
import { defineComponent, ref } from 'vue'
import { IonIcon, IonLabel } from '@ionic/vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'CircleMenu',
  components: {
    IonIcon,
    IonLabel
  },
  setup () {
    const isShow = ref(false)

    const router = useRouter()

    const menus = ref([
      {
        icon: home,
        name: 'Inicio',
        url: '/home/index'
      },
      {
        icon: airplaneOutline,
        name: 'Tours',
        url: '/travel/index'
      },
      {
        icon: storefrontOutline,
        name: 'C. Comercial'
      },
      {
        icon: carSportOutline,
        name: 'Parqueadero'
      },
      {
        icon: calendarOutline,
        name: 'Reservas'
      }
    ])

    const isToggle = (): void => {
      isShow.value = !isShow.value
    }

    const goTo = async (path: string): Promise<void> => {
      isShow.value = false
      await router.push(path)
    }

    return {
      isShow,
      menus,
      isToggle,
      goTo
    }
  }
})
</script>

<style scoped lang="scss">

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0
}

.init {
  position: absolute;
  left: 45%;
  top: 58%;
  @apply text-white text-lg;
}

$spin-speed: 0.7s;
$color-collection: ("#141C2C99", "#141C2C99", "#141C2C99", "#141C2C99", "#141C2C99");
$degFactor: 71.5;

.circle-menu {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 30rem;
  height: 30rem;
  margin-top: -15rem;
  margin-left: -15rem;
}

.menu {
  width: 100%;
  height: 100%;
  // transform: scale(0);
  transform-origin: center;
  // transition: all 0.08s ease-in-out;

  &.move-enter-active,
  &.move-leave-active {
    transition: all 0.08s ease-in-out;
  }

  &.move-enter,
  &.move-leave-to {
    transform: scale(0);
  }

  li {
    position: absolute;
    top: 50%;
    left: 50%;
    display: inline-block;
    width: 4rem;
    height: 80%;
    margin-top: -12rem;
    margin-left: -2rem;
    text-align: center;

    &.spin {
      z-index: 5;

      .icon-holder {
        animation: spin $spin-speed linear forwards;
      }

      .circle-holder {
        display: block;

        circle {
          animation: dash $spin-speed linear forwards;
        }
      }
    }
  }

  a {
    position: relative;
    display: inline-block;
    width: 4rem;
    height: 4rem;
    margin-top: 4.5rem;
    padding: 1.1rem;
    border-radius: 100%;
    transform: scale(1, 1);

    ion-icon {
      display: inline-block;
      vertical-align: middle;
      line-height: 1.2;
      color: white;
    }
  }
}

.icon-holder {
  position: relative;
  z-index: 1;
  display: inline-block;
  width: 4rem;
  height: 100%;
}

.menu-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  display: block;
  width: 4rem;
  height: 4rem;
  margin: -2rem;
  padding: 1.3rem;
  background: white;
  border: none;
  box-shadow: none;
  border-radius: 100%;
  text-align: center;
  line-height: 1;
  appearance: none;
  outline: none;
  cursor: pointer;
  font-size: 0;

  i {
    position: relative;
    z-index: 11;
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    height: 0.1rem;
    margin: 0 auto;
    background: #2c3e50;
  }

  i:nth-child(2) {
    margin: 0.34rem auto;
  }
}

.ripple {
  position: absolute;
  top: -1rem;
  left: -1rem;
  z-index: 10;
  display: block;
  width: 6rem;
  height: 6rem;
  transform: scale(0.5);
  opacity: 0;
  border: 2rem solid white;
  border-radius: 100%;
}

@for $i from 0 to length($color-collection) {
  .menu li:nth-child(#{$i + 1}) {
    transform: rotate(#{$i * $degFactor}deg);

    a {
      transform: rotate(-#{$i * $degFactor}deg);
      background: unquote(nth($color-collection, $i + 1));
    }

    circle {
      stroke: unquote(nth($color-collection, $i + 1));
    }
  }

  .bg-#{$i} {
    background: unquote(nth($color-collection, $i + 1));
  }

  .move-enter-active {
    li {
      transition-timing-function: cubic-bezier(0, 0.57, 0.44, 1.97);

      &:nth-child(#{$i + 1}) {
        transition-delay: ($i + 1) * 0.2s;
      }
    }
  }

  .move-enter,
  .move-leave-active {
    li {
      transition-timing-function: ease-in-out;

      &:nth-last-child(#{$i + 1}) {
        transition-delay: ($i + 1) * 0.2s;
      }
    }
  }
}

.open.menu-btn {
  animation: buttonactive ease-in 0.2s forwards 1;

  i:first-child {
    animation: top-down ease-in 0.2s forwards 1;
  }

  i:nth-child(2) {
    animation: middle ease-in 0.01s forwards 1;
  }

  i:nth-child(3) {
    animation: down-top ease-in 0.2s forwards 1;
  }

  .ripple {
    animation: ripples ease-in 0.35s forwards 1;
  }
}

@keyframes buttonactive {
  0% {
    background: white;
    transform: rotate(0deg);
  }
  100% {
    background: lighten(#141C2C99, 70%);
    transform: rotate(-90deg);
  }
}

@keyframes middle {
  0% {
    opacity: 1;
    left: 0;
  }
  100% {
    opacity: 0;
    left: -4rem;
  }
}

@keyframes top-down {
  0% {
    top: 0;
    transform: rotate(0);
  }
  100% {
    top: 0.35rem;
    transform: rotate(-45deg);
  }
}

@keyframes down-top {
  0% {
    top: 0;
    transform: rotate(0);
  }
  100% {
    top: -0.4rem;
    transform: rotate(45deg);
  }
}

@keyframes ripples {
  0% {
    opacity: 1;
    transform: scale(0.5);
    border-width: 3rem;
  }
  100% {
    opacity: 0.5;
    transform: scale(1);
    border-width: 0rem;
  }
}
</style>