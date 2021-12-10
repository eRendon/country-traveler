import AxiosService from '@/api-client/axios'

export default class Agency {
    async create () {
        const axiosService = new AxiosService()
        try {
            return await axiosService.postData(null, 'modules/agency')
        } finally {

        }
    }
}