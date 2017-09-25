import * as ActionsTypes from '../actiontypes/authentication'

export const loginUserRequest = ({username, password}) => {
    return {
        type: ActionsTypes.LOGIN_USER_REQUEST,
        payload: {username, password}
    }
}

export const loginUserSuccess = (response) => {
    return {
        type: ActionsTypes.LOGIN_USER_SUCCESS,
        response: response
    }
}

export const loginUserFailure = (error) => {
    return {
        type: ActionsTypes.LOGIN_USER_FAILURE,
        error: error
    }
}

export const logoutUserRequest = () => {
    return {
        type: ActionsTypes.LOGOUT_USER_REQUEST
    }
}