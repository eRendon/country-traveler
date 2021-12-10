import state from '@/store/modules/user/state'
import { IAccount } from '@/interfaces/IAccount'

const mutations = {
    setProfile (profile: IAccount): void {
        state.profile = profile
    }
}

export default mutations