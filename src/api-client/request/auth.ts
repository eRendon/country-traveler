import { AxiosService } from '@/api-client/axios'

export default class Auth {
    async logIn(email: string, password: string) {
        const axiosService = new AxiosService()

            return await axiosService.postData({ email, password }, '/accounts/authenticate')

    }
}