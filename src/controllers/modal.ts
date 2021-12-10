import { modalController, ModalOptions } from '@ionic/vue'

export default {
    async modal (component: any): Promise<void> {

        const modalOptions: ModalOptions = {
            cssClass: 'singInModal',
            component: component,
            showBackdrop: true,
            swipeToClose: true
        }

        const modal = await modalController.create(modalOptions)

        await modal.present()
    },
    async dismiss (): Promise<void> {
        await modalController.dismiss()
    }
}