import { reactive } from 'vue'
import { IUserStore } from '@/interfaces/IAccount'

const state = reactive<IUserStore>({
    profile: {}
})

export default state