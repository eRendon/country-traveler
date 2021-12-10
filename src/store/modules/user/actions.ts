import { userRequest } from '@/api-client'

const actions = {
    async getProfile () {
        const { data, success } = await userRequest.getProfile()
        console.log('getProfile', data)
        if (success) {

        }
    }
}

export default actions