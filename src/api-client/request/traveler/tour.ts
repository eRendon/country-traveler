import AxiosService from '@/api-client/axios'
import { loading } from '@/controllers'
import { ISurePromise } from '@/interfaces/ISurePromise'
import { ITour } from '@/interfaces/Traveler/ITour'

export default class Tour {
    async getAll(): Promise<ISurePromise<ITour[]>> {
        const axiosService: AxiosService<ITour[], null> = new AxiosService()
        const { present, dismiss } = await loading.spinner()
        present()
        try {
            return await axiosService.getData(null, '/modules/tours')
        } finally {
            dismiss()
        }
    }
}