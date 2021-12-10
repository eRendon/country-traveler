<template>
  <ion-content>
    <form @submit.prevent="handleLogin">
      <ion-list no-lines="">
        <div class="login-top">
          <h2 class="ion-text-center">
            <span>
              <img alt="" src="assets/shapes.svg">
            </span>
          </h2>
        </div>
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input v-model="form.username" required type="email"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Password</ion-label>
          <ion-input v-model="form.password" required type="password"></ion-input>
        </ion-item>
        <ion-button type="submit" class="mt-10" expand="block">Iniciar Sesión</ion-button>
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
import { modal, toast } from '@/controllers'
import { authStore, userStore } from '@/store'
import apiClient from '@/api-client/axios/config'

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
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${data.jwtToken}`
        userStore.mutations.setProfile(data)
        authStore.mutations.setStateAuth(true)
        localStorage.setItem('profile', JSON.stringify(data))
        await modal.dismiss()
        return
      }
      await toast.present({
        message: 'Email o contraseña incorecta', duration: 3000
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