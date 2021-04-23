import axios from 'axios'
import Apis from '~/src/common/apis'
import stores from '~/src/stores'

export const api = axios.create({
    baseURL: Apis.baseURL,
})

// Add a request interceptor
api.interceptors.request.use((config) => {
    // Do something before request is sent
    if (!stores.loading.disable) {
        stores.loading.startLoading()
    }


    return config
}, (error) => {
    // Do something with request error
    return Promise.reject(error)
})

// Add a response interceptor
api.interceptors.response.use((response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    stores.loading.stopLoading()
    return response
}, (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('error response: ', error.response)
    stores.loading.stopLoading()

})

