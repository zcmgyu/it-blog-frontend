import axios from 'axios'

export const createPost = (payload, headers) => {
    const { content, category, tags, rawContent } = payload
    return axios.request({
        baseURL: 'http://localhost:9292/api/posts',
        method: 'POST',
        headers,
        data: {
            content,
            rawContent,
            'categoryId': category,
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
        baseURL: `http://localhost:9292/api/posts/${id}`,
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

export const getPost = (payload, headers) => {
    const { postId } = payload
    return axios.request({
        baseURL: `http://localhost:9292/api/posts/${postId}`,
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
        baseURL: `http://localhost:9292/api/posts/top4/${type}`,
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