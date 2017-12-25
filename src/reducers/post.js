import * as ActionsTypes from '../actiontypes/post'

const initialState = {
    post_uri: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionsTypes.POST_SUCCESS: {
            return {
                ...state
            }
        }
        case ActionsTypes.POST_FAIL: {
            let { access_token, refresh_token } = action.response.data
            return {
                ...state,
                isAuthenticating: false,
                isAuthenticated: true,
                accessToken: access_token,
                refreshToken: refresh_token,
                statusText: "You've been successfully logged in."
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