import { ISurePromise } from '@/interfaces/ISurePromise'
import { IAccount } from '@/interfaces/IAccount'
import { loading } from '@/controllers'
import {  userStore } from '@/store'
import AxiosService from '@/api-client/axios'

export default class User {
    async getProfile(): Promise<ISurePromise<IAccount>> {
        const axiosService: AxiosService<IAccount, null> = new AxiosService()
        const { present, dismiss } = await loading.spinner()
        present()
        const { id } = userStore.getters.getProfile()
        try {
            return await axiosService.getData(null, `'/accounts/${id}'`)
        } finally {
            dismiss()
        }
    }
}