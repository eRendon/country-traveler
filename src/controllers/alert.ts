import { alertController, AlertOptions } from '@ionic/vue'

export default {
    async presentAlert (alertOptions: AlertOptions) {
        const alert = await alertController.create(alertOptions)
        await alert.present()
    }
}