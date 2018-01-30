import axios from 'axios'

export const getCategory = (payload, headers) => {
    return axios.request({
        baseURL: '/api/categories',
        method: 'GET',
        headers
    })
        .then(response => response)
        .catch(function (error) {
            throw error
        })
}
