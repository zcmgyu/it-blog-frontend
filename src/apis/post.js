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
    const { id, content, categoryId, tags, author, shortContent } = payload
    return axios.request({
        baseURL: `http://localhost:9292/api/posts/${id}`,
        method: 'PUT',
        headers,
        data: {
            // 'title': title,
            content,
            shortContent,
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