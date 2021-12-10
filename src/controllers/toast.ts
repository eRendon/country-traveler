import { toastController, ToastOptions } from '@ionic/vue'

export default {
    async present(toastOptions: ToastOptions) {
        !toastOptions.duration ? toastOptions.duration = 3000 : ''
        const toast = await toastController.create(toastOptions)

        await toast.present()
    }
}
