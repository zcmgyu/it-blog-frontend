import axios from 'axios'

export const createPost = (payload, headers) => {
    const { content, category, tags, shortContent } = payload
    return axios.request({
        baseURL: 'http://localhost:9292/api/posts',
        method: 'POST',
        headers,
        data: {
            // 'title': title,
            'content': content,
            'shortContent': shortContent,
            'categoryId': category,
            'tags': tags
        }
    })
        .then(response => response)
        .catch(function (error) {
            throw error
        })
}

export const updatePost = (payload, headers) => {
    const { id, content, category, tags, authorId, shortContent } = payload
    return axios.request({
        baseURL: `http://localhost:9292/api/posts/${id}`,
        method: 'PUT',
        headers,
        data: {
            // 'title': title,
            'content': content,
            'shortContent': shortContent,
            'categoryId': category,
            'tags': tags,
            'authorId': authorId,
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
        headers,
    })
        .then(response => response)
        .catch(function (error) {
            throw error
        })

}