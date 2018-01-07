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

export const forgetPassword = (payload, headers) => {
    const { email } = payload
    return axios.request({
        baseURL: `http://localhost:9292/api/forgot_password`,
        headers,
        params: { email }
    })
        .then(response => response)
        .catch(error => { throw error })
}

export const resetPassword = (payload, headers) => {
    const { email } = payload
    return axios.request({
        baseURL: `http://localhost:9292/api/forgot_password/reset`,
        headers,
        params: { email }
    })
        .then(response => response)
        .catch(error => { throw error })
}