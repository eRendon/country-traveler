<template>
  <ion-content>
    <form @submit.prevent="handleLogin">

      <ion-list
          no-lines="">
        <div class="login-top">
          <h2 class="ion-text-center"><span>
              <img alt="" src="assets/shapes.svg">
        </span></h2>
          <!--            <h4 style="margin-top: 2%;" class="ion-text-center textw-white">-->
          <!--              Company Name-->
          <!--            </h4>-->
        </div>
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input required  type="email"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Password</ion-label>
          <ion-input required  type="password"></ion-input>
        </ion-item>
        <ion-button type="submit" class="mt-10" expand="block">Sign in</ion-button>

      </ion-list>


    </form>
  </ion-content>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  IonLabel,
  IonButton,
  IonItem,
  IonInput,
  IonList,
  IonContent
} from '@ionic/vue'

import {
  logIn,
  personAdd
} from 'ionicons/icons'
import { authRequest } from '@/api-client'
import { alert } from '@/controllers'

export default defineComponent({
  name: 'Login',
  components: {
    IonButton,
    IonLabel,
    IonItem,
    IonInput,
    IonList,
    IonContent
  },
  setup () {

    const form = ref({
      password: '',
      username: ''
    })

    const handleLogin = async (): Promise<void> => {
      const { data, success } = await authRequest.logIn(form.value.username, form.value.password)
      console.log(data)
      console.log(success)
      if (success) {
        console.log(data)
        return
      }
      await alert.presentAlert({
        message: 'Email o contraseña incorecta'
      })
    }

    return {
      logIn,
      personAdd,
      form,
      handleLogin
    }
  }
})
</script>

<style scoped lang="scss">

</style>