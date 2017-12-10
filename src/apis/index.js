import axios from 'axios'

export const doLogin = (username, password) => {
    // console.log(username)
    // console.log(password)

    return axios.request({
        // baseURL: "http://localhost:8080/oauth/token",
        baseURL: "https://it-blog-backend.herokuapp.com/oauth/token",
        method: "post",
        auth: {
            'username': 'clientapp',
            'password': '123456'
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        params: {
            'grant_type': 'password',
            'username': username,
            'password': password
        }
    })
    .then(response => response)
    .catch(function (error) {
        throw error
    });

}