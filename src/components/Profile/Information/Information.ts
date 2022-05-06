import { computed, defineComponent, ref } from 'vue'
import { IAccount } from '@/interfaces/IAccount'
import { IonContent, IonList, IonItem, IonLabel, IonInput, IonGrid, IonRow, IonCol, IonButton } from '@ionic/vue'
import { userStore } from '@/store'
import {agencyRequest} from "@/api-client";

export default defineComponent({
    name: 'Information',
    components: {
        IonContent,
        IonList,
        IonItem,
        IonLabel,
        IonInput,
        IonGrid,
        IonRow,
        IonCol,
        IonButton
    },
    setup () {
        const profile = computed<IAccount>(() => userStore.getters.getProfile())

        const onCreateAgency = async (): Promise<void> => {
            const { success, data } = await agencyRequest.create()
            console.log('onCreateAgency', data)
            // if (success) {}
        }

        return {
            profile,
            onCreateAgency
        }
    }
})