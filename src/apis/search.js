import axios from 'axios'

// SEARCH
export const search = (payload) => {
    const { search } = payload
    return axios.request({
        baseURL: `/api/search`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
        params: { search }
    })
        .then(response => response)
        .catch(error => { throw error })
}