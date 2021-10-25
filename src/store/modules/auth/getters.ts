import { IAuth } from '@/interfaces/IAuth'
import state from '@/store/modules/auth/state'

const getters = {
    getStateAuth: (): IAuth => state.auth
}

export default getters