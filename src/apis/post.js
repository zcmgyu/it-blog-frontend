import axios from 'axios'

export const createPost = ({payload}) => {
    console.log('inside post api')
    const { title, content, category, tags, accessToken } = payload
    console.log(payload)
    console.log('accessToken: ' + accessToken)
    return axios.request({
        baseURL: 'http://localhost:9292/api/posts',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
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