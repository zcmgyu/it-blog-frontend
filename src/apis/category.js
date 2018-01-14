import axios from 'axios'

export const getCategory = (payload, headers) => {
    return axios.request({
        baseURL: 'http://localhost:9292/api/categories',
        method: 'GET',
        headers
    })
        .then(response => response)
        .catch(function (error) {
            throw error
        })
}
