import axios from 'axios'

export const createPost = (payload, headers) => {
    const { content, categoryId, tags, rawContent } = payload
    return axios.request({
        baseURL: '/api/posts',
        method: 'POST',
        headers,
        data: {
            content,
            rawContent,
            categoryId,
            tags
        }
    })
        .then(response => response)
        .catch(function (error) {
            throw error
        })
}

export const updatePost = (payload, headers) => {
    const { id, content, categoryId, tags, author, rawContent } = payload
    return axios.request({
        baseURL: `/api/posts/${id}`,
        method: 'PUT',
        headers,
        data: {
            content,
            rawContent,
            categoryId,
            tags,
            author
        }
    })
        .then(response => response)
        .catch(function (error) {
            throw error
        })

}

export const getPost = (payload) => {
    const { postId } = payload
    return axios.request({
        baseURL: `/api/posts/${postId}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response)
        .catch(function (error) {
            throw error
        })
}

export const getTop4PostByCategory = (payload) => {
    const { type } = payload
    return axios.request({
        baseURL: `/api/posts/top4/${type}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response)
        .catch(function (error) {
            throw error
        })
}

export const bookmarkPost = (payload, headers) => {
    const { postId } = payload
    return axios.request({
        baseURL: `/api/posts/${postId}/bookmark`,
        headers,
        method: 'PUT'
    })
        .then(response => response)
        .catch(function (error) {
            throw error
        })
}

export const favoritePost = (payload, headers) => {
    const { postId } = payload
    return axios.request({
        baseURL: `/api/posts/${postId}/favorite`,
        headers,
        method: 'PUT'
    })
        .then(response => response)
        .catch(function (error) {
            throw error
        })
}