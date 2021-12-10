import { computed, defineComponent, ref } from 'vue'
import { IAccount } from '@/interfaces/IAccount'
import { IonContent, IonList, IonItem, IonLabel, IonInput, IonGrid, IonRow, IonCol } from '@ionic/vue'
import { userStore } from '@/store'

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
        IonCol
    },
    setup () {
        const profile = computed(() => userStore.getters.getProfile())

        return {
            profile
        }
    }
})