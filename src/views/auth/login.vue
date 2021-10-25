<template>
  <ion-page>
    <form @submit.prevent="handleLogin">
      <ion-card>
        <ion-item>
          <h3>Please Sign In!</h3>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Username</ion-label>
          <ion-input v-model="form.username" id="username" required></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Password</ion-label>
          <ion-input type="password" v-model="form.password" id="password" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-button type="submit" shape="round">
            Sign In
            <ion-icon slot="end" :icon="logIn"></ion-icon>
          </ion-button>
        </ion-item>
        <ion-item>
          <p>Or</p>
        </ion-item>
        <ion-item>
          <ion-button type="button" shape="round" router-link="/signup">
            Sign Up
            <ion-icon slot="end" :icon="personAdd"></ion-icon>
          </ion-button>
        </ion-item>
      </ion-card>
    </form>
  </ion-page>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {
  IonPage,
  IonIcon,
  IonButton,
  IonItem,
  IonCard,
  IonInput,
  IonLabel
} from '@ionic/vue'

import {
    logIn,
    personAdd
} from 'ionicons/icons'
import { authRequest } from '@/api-client'

export default defineComponent({
  name: 'Login',
  components: {
    IonPage,
    IonIcon,
    IonButton,
    IonItem,
    IonCard,
    IonInput,
    IonLabel
  },
  setup () {

    const form = ref({
      password: '',
      username: ''
    })

    const handleLogin = async (): Promise<void> => {
      const { data, success } = await authRequest.logIn(form.value.username, form.value.password)
      console.log(data)
      if (success) {
        console.log(data)
      }
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

<style scoped>

</style>