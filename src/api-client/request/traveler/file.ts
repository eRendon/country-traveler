import AxiosService from '@/api-client/axios'

export default class Files {
    async uploadPhoto (file: File) {
        const axiosService = new AxiosService()
        const formDate = new FormData()
        formDate.append('file', file)
        formDate.append('idTour', '5')
        try {
            return await axiosService.postData(formDate, 'modules/file')
        } finally {
            console.log('finally')
        }
    }
}