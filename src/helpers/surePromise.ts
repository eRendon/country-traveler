import {ISurePromise} from '@/interfaces/ISurePromise'
import {AxiosResponse} from 'axios'
import router from '@/router'

const surePromise = <T>(promise: Promise<AxiosResponse>): Promise<ISurePromise<T>> => (
    promise
        .then((result) => {
            const { data, status, headers } = result
            return {
                success: true,
                data,
                status,
                headers
            }
        })
        .catch(async error => {
            console.log('error.response', error.response)
            if (!!error.isAxiosError && !error.response) {
                throw error
            } else {
                if (error.response.status === 401) {
                    await router.push({name: 'Login'})
                }
                // if (error.response.status === 500) {
                // }
                const { data, status } = error.response
                return Promise.resolve({ success: false, data, status })
            }

        })
)

export default surePromise
