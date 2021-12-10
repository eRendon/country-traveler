import AxiosService from '@/api-client/axios'
import { loading } from '@/controllers'
import { IAccount } from '@/interfaces/IAccount'
import { ISurePromise } from '@/interfaces/ISurePromise'
import { IFormLogin } from '@/interfaces/IAuth'

export default class Auth {
    async logIn(email: string, password: string): Promise<ISurePromise<IAccount>> {
        const axiosService: AxiosService<IAccount, IFormLogin> = new AxiosService()
        const { present, dismiss } = await loading.spinner()
        present()
        try {
            return await axiosService.postData({ email, password }, '/accounts/authenticate')
        } finally {
            dismiss()
        }
    }

    async register(account: IAccount) {
        const axiosService: AxiosService<any, any> = new AxiosService()
        const { present, dismiss } = await loading.spinner()
        present()

        try {
            return await axiosService.postData(account, '/accounts/register')
        } finally {
            dismiss()
        }
    }
}