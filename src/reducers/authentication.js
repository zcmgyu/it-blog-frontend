import * as ActionsTypes from '../actiontypes/authentication'

const initialState = {
    accessToken: null,
    refreshToken: null,
    userName: null,
    isAuthenticated: false,
    isAuthenticating: false,
    statusText: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionsTypes.LOGIN_USER_REQUEST: {
            return {
                ...state,
                isAuthenticating: true,
                statusText: 'Loading...'
                        }
        }
        case ActionsTypes.LOGIN_USER_SUCCESS: {
            let {access_token, refresh_token} = action.response.data
            return {
                ...state,
                isAuthenticating: false,
                isAuthenticated: true,
                accessToken: access_token,
                refreshToken: refresh_token,
                statusText: "You've been successfully logged in."
            }
        }
        case ActionsTypes.LOGIN_USER_FAILURE: {
            let {status} = action.error.response
            let {error_description} = action.error.response.data
            return {
                ...state,
                isAuthenticating:false,
                isAuthenticated: false,
                accessToken: null,
                refreshToken: null,
                statusText: `Authentication error: ${status} ${error_description}`
            }
        }
        case ActionsTypes.LOGOUT_USER_REQUEST: {
            return {
                ...state,
                isAuthenticating: false,
                isAuthenticated: false,
                accessToken: null,
                refreshToken: null,
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default authReducer