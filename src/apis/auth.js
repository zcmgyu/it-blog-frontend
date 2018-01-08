import axios from 'axios'

export const doLogin = (credentials) => {
    const { username, password } = credentials
    return axios.request({
        baseURL: "http://localhost:9292/oauth/token",
        method: "post",
        auth: {
            'username': 'client_app',
            'password': 'client_secret'
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

export const refreshToken = (refresh_token) => {
    return axios.request({
        baseURL: "http://localhost:9292/oauth/token",
        method: "post",
        auth: {
            'username': 'client_app',
            'password': 'client_secret'
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        params: {
            'grant_type': 'refresh_token',
            'refresh_token': refresh_token,
        }
    })
        .then(response => response)
        .catch(function (error) {
            throw error
        });

}

export const register = (payload) => {
    const { name, username, email, password } = payload
    return axios.request({
        baseURL: "http://localhost:9292/api/users",
        method: "post",
        data: {
            name,
            username,
            email,
            password
        }

    })
        .then(response => response)
        .catch(function (error) {
            throw error
        });

}