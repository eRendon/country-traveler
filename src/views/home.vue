<template>
  <ion-page>
    <ion-content class="background-image">
      <!--    <div id="clouds">-->
      <!--      <div class="cloud x1"></div>-->
      <!--      &lt;!&ndash; Time for multiple clouds to dance around &ndash;&gt;-->
      <!--      <div class="cloud x2"></div>-->
      <!--      <div class="cloud x3"></div>-->
      <!--      <div class="cloud x4"></div>-->
      <!--      <div class="cloud x5"></div>-->
      <!--    </div>-->
      <div class="overlay-home">
        <circle-menu></circle-menu>
        <ion-label class="slogan" position="floating">
          Bienvenidos a tu app para conocer el mundo. Atrévete a una nueva aventura!
        </ion-label>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonLabel, IonPage } from '@ionic/vue';
import CircleMenu from "../components/CircleMenu/CircleMenu.vue";

export default  {
  name: 'home',
  components: { CircleMenu, IonContent, IonLabel, IonPage }
}
</script>

<style scoped lang="scss">
.background-image {
  --background: url('../../public/assets/background/cocora.jpg');
}

.overlay-home {
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.3); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer;
}

.slogan {
  @apply absolute text-center text-white text-xl;
  bottom: 15%;
  padding: 15px;
}

#clouds{
  padding: 100px 0;
  background: -webkit-linear-gradient(top, #c9dbe9 0%, #fff 100%);
  background: -linear-gradient(top, #c9dbe9 0%, #fff 100%);
  background: -moz-linear-gradient(top, #c9dbe9 0%, #fff 100%);
  opacity: 0.2;
}

/*Time to finalise the cloud shape*/
.cloud {
  width: 200px; height: 60px;
  background: #fff;

  border-radius: 200px;
  -moz-border-radius: 200px;
  -webkit-border-radius: 200px;
  position: relative;
}

.cloud:before, .cloud:after {
  content: '';
  position: absolute;
  background: #fff;
  width: 100px; height: 80px;
  position: absolute; top: -15px; left: 10px;

  border-radius: 100px;
  -moz-border-radius: 100px;
  -webkit-border-radius: 100px;

  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
  -moz-transform: rotate(30deg);
}

.cloud:after {
  width: 120px; height: 120px;
  top: -55px; left: auto; right: 15px;
}

/*Time to animate*/
.x1 {
  -webkit-animation: moveclouds 15s linear infinite;
  -moz-animation: moveclouds 15s linear infinite;
  -o-animation: moveclouds 15s linear infinite;
}

/*variable speed, opacity, and position of clouds for realistic effect*/
.x2 {
  left: 200px;

  -webkit-transform: scale(0.6);
  -moz-transform: scale(0.6);
  transform: scale(0.6);
  opacity: 0.6; /*opacity proportional to the size*/

  /*Speed will also be proportional to the size and opacity*/
  /*More the speed. Less the time in 's' = seconds*/
  -webkit-animation: moveclouds 25s linear infinite;
  -moz-animation: moveclouds 25s linear infinite;
  -o-animation: moveclouds 25s linear infinite;
}

.x3 {
  left: -250px; top: -200px;

  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  transform: scale(0.8);
  opacity: 0.8; /*opacity proportional to the size*/

  -webkit-animation: moveclouds 20s linear infinite;
  -moz-animation: moveclouds 20s linear infinite;
  -o-animation: moveclouds 20s linear infinite;
}

.x4 {
  left: 470px; top: -250px;

  -webkit-transform: scale(0.75);
  -moz-transform: scale(0.75);
  transform: scale(0.75);
  opacity: 0.75; /*opacity proportional to the size*/

  -webkit-animation: moveclouds 18s linear infinite;
  -moz-animation: moveclouds 18s linear infinite;
  -o-animation: moveclouds 18s linear infinite;
}

.x5 {
  left: -150px; top: -150px;

  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  transform: scale(0.8);
  opacity: 0.8; /*opacity proportional to the size*/

  -webkit-animation: moveclouds 20s linear infinite;
  -moz-animation: moveclouds 20s linear infinite;
  -o-animation: moveclouds 20s linear infinite;
}

@-webkit-keyframes moveclouds {
  0% {margin-left: 1000px;}
  100% {margin-left: -1000px;}
}
@-moz-keyframes moveclouds {
  0% {margin-left: 1000px;}
  100% {margin-left: -1000px;}
}
@-o-keyframes moveclouds {
  0% {margin-left: 1000px;}
  100% {margin-left: -1000px;}
}
</style>