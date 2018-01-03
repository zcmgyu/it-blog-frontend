import axios from 'axios'

export const createPost = (payload, headers) => {
    const { title, content, category, tags } = payload
    console.log('INSIDE apis/createPost')
    console.log(payload)
    return axios.request({
        baseURL: 'http://localhost:9292/api/posts',
        method: 'POST',
        headers,
        data: {
            'title': title,
            'content': content,
            'categoryId': category,
            'tags': tags
        }
    })
        .then(response => response)
        .catch(function (error) {
            throw error
        });

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
        });

}