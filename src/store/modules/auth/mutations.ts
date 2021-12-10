import state from '@/store/modules/auth/state'

const mutations = {
    setStateAuth (stateAuth: boolean): void {
        state.auth.isLogged = stateAuth
    }
}

export default mutations