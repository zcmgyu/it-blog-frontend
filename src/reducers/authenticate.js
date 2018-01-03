// import * as ActionsTypes from '../actiontypes/authenticate'
import { AUTH, REMOVE_AUTH, REGISTER } from '../actiontypes/authenticate'

// const initialState = {
//     accessToken: null,
//     refreshToken: null,
//     userName: null,
//     isAuthenticated: false,
//     isAuthenticating: false,
//     statusText: null
// }

const auth = (state = {}, action) => {
    switch (action.type) {
        case AUTH.REQUEST: {
            return {
                ...state,
                isAuthenticating: true,
                // statusText: 'Loading...'
            }
        }
        case AUTH.SUCCESS: {
            // let { access_token, refresh_token } = action.response.data
            return {
                ...state,
                isAuthenticating: false,
                isAuthenticated: true,
                // accessToken: access_token,
                // refreshToken: refresh_token,
                // statusText: "You've been successfully logged in."
            }
        }
        case AUTH.FAILURE: {
            // let {status} = action.error.response
            // let { error_description } = action.error.response.data
            return {
                ...state,
                isAuthenticating:false,
                isAuthenticated: false,
                // accessToken: null,
                // refreshToken: null,
                // statusText: `Authentication error: ${status} ${error_description}`
            }
        }
        case REMOVE_AUTH.REQUEST: {
            return {
                ...state,
                isAuthenticating: false,
                isAuthenticated: false,
                // accessToken: null,
                // refreshToken: null,
            }
        }
        case REGISTER.SUCCESS: {
            return {
                ...state,

            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default auth