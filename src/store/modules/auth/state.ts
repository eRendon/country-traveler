import { reactive } from 'vue'
import { IAuthStore } from '@/interfaces/IAuth'

const state = reactive<IAuthStore>({
    auth: {
        isLogged: false
    }
})

export default state