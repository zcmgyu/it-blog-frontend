import axios from 'axios'

export const getCurrentUser = (payload, headers) => {
    const { user_id } = payload
    return axios.request({
        baseURL: `http://localhost:9292/api/users/${user_id}`,
        headers,
        method: 'GET'
    })
        .then(response => response)
        .catch(error => { throw error })

}


// FORGOT PASSWORD
export const sendMail = (payload) => {
    const { email } = payload
    return axios.request({
        baseURL: `http://localhost:9292/api/forgot_password`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
        params: { email }
    })
        .then(response => response)
        .catch(error => { throw error })
}

export const resetPassword = (payload) => {
    const { password, token } = payload
    return axios.request({
        baseURL: `http://localhost:9292/api/forgot_password/reset`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
        params: { password, token }
    })
        .then(response => response)
        .catch(error => { throw error })
}

// Get post
export const getPostsByAuthorId = (payload) => {
    const { authorId } = payload
    return axios.request({
        baseURL: `http://localhost:9292/api/users/${authorId}/posts`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'GET'
    })
        .then(response => response)
        .catch(error => { throw error })
}

// Get bookmarks
export const getBookmark = (headers) => {
    return axios.request({
        baseURL: `http://localhost:9292/api/users/self/bookmark`,
        headers,
        method: 'GET'
    })
        .then(response => response)
        .catch(error => { throw error })
}

// Get Following & Followers
export const getFollow = (payload) => {
    const { userId, type } = payload
    return axios.request({
        baseURL: `http://localhost:9292/api/users/${userId}/${type}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'GET'
    })
        .then(response => response)
        .catch(error => { throw error })
}