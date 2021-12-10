import state from '@/store/modules/user/state'
import { IAccount } from '@/interfaces/IAccount'

const getters = {
    getProfile: (): IAccount => state.profile!
}

export default getters