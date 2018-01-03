import createRequestTypes from './'

// export const LOGIN_USER_SUCCESS = 'login/SUCCESS'
// export const LOGIN_USER_FAILURE = 'login/FAILURE'
// export const LOGIN_USER_REQUEST = 'login/REQUEST'
// export const LOGOUT_USER_REQUEST = 'logout/REQUEST'



export const AUTH = createRequestTypes('AUTH')
export const REMOVE_AUTH = createRequestTypes('REMOVE_AUTH') 
export const REGISTER = createRequestTypes('REGISTER') 
