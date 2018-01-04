import axios from 'axios'

export const getCurrentUser = (payload, headers) => {
    const { user_id } = payload
    return axios.request({
        baseURL: `http://localhost:9292/api/users/${user_id}`,
        headers,
        method: 'GET'
    })
        .then(response => response)
        .catch(error => { throw error });

}