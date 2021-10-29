import { loadingController } from '@ionic/vue'

interface Loader {
    dismiss: Function;
    present: Function;
}

export default {
    async spinner (): Promise<Loader> {
        const loader = await loadingController.create({
            spinner: 'bubbles',
        })

        async function present () {
            await loader.present()
        }

        async function dismiss () {
            await loader.dismiss()
        }

        return {
            dismiss,
            present
        }
    }

}