import AxiosService from '@/api-client/axios'
import { loading } from '@/controllers'

export default class Auth {
    async logIn(email: string, password: string) {
        const axiosService: AxiosService<any, any> = new AxiosService()
        const { present, dismiss } = await loading.spinner()
        present()
        try {
            return await axiosService.postData({ email, password }, '/accounts/authenticate')
        } finally {
            dismiss()
        }
    }
}