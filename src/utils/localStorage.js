// Side effects Services
export function getAuth() {
    return JSON.parse(localStorage.getItem('auth'))
}

export function setAuth(token) {
    localStorage.setItem('auth', JSON.stringify(token))
}

export function removeAuth() {
    localStorage.removeItem('auth')
}