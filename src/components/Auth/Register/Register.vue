<template>
  <ion-content>
    <form @submit.prevent="handleRegister">
      <ion-list
          no-lines="">
        <div class="login-top">
          <h2 class="ion-text-center">
            <span>
              <img alt="" src="assets/shapes.svg">
            </span>
          </h2>
        </div>
        <ion-item lines="full">
          <ion-label position="floating">Titulo</ion-label>
          <ion-input v-model="accountForm.title" required type="text"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Nombres</ion-label>
          <ion-input v-model="accountForm.firstName" required type="text"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Apellidos</ion-label>
          <ion-input v-model="accountForm.lastName" required type="text"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input v-model="accountForm.email" required type="email"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Contraseña</ion-label>
          <ion-input v-model="accountForm.password" required type="password"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Confirmar contraseña</ion-label>
          <ion-input v-model="accountForm.confirmPassword" required type="password"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Términos y condiciones</ion-label>
          <ion-toggle v-model="accountForm.acceptTerms" required></ion-toggle>
        </ion-item>
        <ion-button type="submit" class="mt-10" expand="block">Registrarse</ion-button>
      </ion-list>
    </form>
  </ion-content>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonList, IonToggle } from "@ionic/vue";
import { IAccount } from "@/interfaces/IAccount";
import { modal, toast } from '@/controllers'
import { authRequest } from '@/api-client'

export default defineComponent({
  name: "Register",
  components: {
    IonButton,
    IonLabel,
    IonItem,
    IonInput,
    IonList,
    IonContent,
    IonToggle
  },
  setup () {
    const accountForm = ref<IAccount>({
      email: '',
      firstName: '',
      lastName: '',
      title: ''
    })

    const handleRegister = async (): Promise<void> => {
      if (!accountForm.value.acceptTerms) {
        await toast.present({ message: 'Por favor, acepte los términos y cóndiciones', duration: 3000 })
        return
      }

      const { data, success } = await authRequest.register(accountForm.value)
      console.log('register', data)
      if (success) {
        await toast.present({ message: 'Se ha registrado correctamente', duration: 3000 })
        await modal.dismiss()
      }
    }

    return {
      accountForm,
      handleRegister
    }
  }
})
</script>

<style scoped>

</style>