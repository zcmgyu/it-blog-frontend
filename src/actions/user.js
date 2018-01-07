import action from './'
import { GET_CURRENT_USER, FORGOT_PASSWORD, RESET_PASSWORD } from '../actiontypes/user'

export const getCurrentUser = {
    request: () => action(GET_CURRENT_USER.REQUEST),
    success: response => action(GET_CURRENT_USER.SUCCESS, { response }),
    failure: error => action(GET_CURRENT_USER.FAILURE, { error }),
}

export const forgotPassword = {
    request: payload => action(FORGOT_PASSWORD.REQUEST, { payload }),
    success: response => action(FORGOT_PASSWORD.SUCCESS, { response }),
    failure: error => action(FORGOT_PASSWORD.FAILURE, { error }),
}

export const resetPassword = {
    request: payload => action(RESET_PASSWORD.REQUEST, { payload }),
    success: response => action(RESET_PASSWORD.SUCCESS, { response }),
    failure: error => action(RESET_PASSWORD.FAILURE, { error }),
}