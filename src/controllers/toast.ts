import { toastController, ToastOptions } from '@ionic/vue'

export default {
    async present(toastOptions: ToastOptions) {
        const toast = await toastController.create(toastOptions)

        await toast.present()
    }
}
