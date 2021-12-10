import { AxiosResponse } from 'axios'
import { ISurePromise } from '@/interfaces/ISurePromise'
import router from '@/router'
import surePromise from '@/helpers/surePromise'
import apiClient from '@/api-client/axios/config'


const jsonToURLEncoded = (jsonString: any) => {
    return Object.keys(jsonString)
        .map(function (key) {
            return (
                encodeURIComponent(key) + '=' + encodeURIComponent(jsonString[key])
            )
        })
        .join('&')
}

export default class AxiosService<T, P> {
    async postData (postData: P, url: string): Promise<ISurePromise<T>> {
        try {
            return await surePromise(apiClient.post<AxiosResponse>(url, postData))
        } catch (err) {
            console.log(err)
            throw err
        }
    }

    async getData (getData: P, url: string, params?: P): Promise<ISurePromise<T>> {

        try {
            let dataUrl = ''
            if (getData != undefined) {
                dataUrl = `${url}?${jsonToURLEncoded(getData)}`
            } else {
                dataUrl = url
            }
            return await surePromise(apiClient.get<AxiosResponse>(dataUrl, { params: params }))
        } catch (err) {
            console.log('error en servicio get', err)
            apiClient.defaults.headers.common = {}
            await router.push({
                name: 'Login'
            })
            throw err
        }
    }

    async putData(putData: P, url: string): Promise<ISurePromise<T>> {

        try {
            return surePromise(apiClient.put<AxiosResponse>(url, putData))
        } catch (err) {
            console.log(err)
            throw err
        }
    }
}