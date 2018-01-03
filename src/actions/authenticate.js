import action from './'
import { AUTH, REMOVE_AUTH, REGISTER } from '../actiontypes/authenticate'

export const authenticate = {
    request: credentials => action(AUTH.REQUEST, { credentials }),
    success: response => action(AUTH.SUCCESS, { response }),
    failure: error => action(AUTH.FAILURE, { error }),
}

export const register = {
    request: payload => action(REGISTER.REQUEST, { payload }),
    success: response => action(REGISTER.SUCCESS, { response }),
    failure: error => action(REGISTER.FAILURE, { error }),
}

export const remove_auth = {
    request: () => action(REMOVE_AUTH.REQUEST),
    success: response => action(REMOVE_AUTH.SUCCESS, { response }),
    failure: error => action(REMOVE_AUTH.FAILURE, { error }),
}