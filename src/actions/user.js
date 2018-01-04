import action from './'
import { GET_CURRENT_USER } from '../actiontypes/user'

export const getCurrentUser = {
    request: () => action(GET_CURRENT_USER.REQUEST),
    success: response => action(GET_CURRENT_USER.SUCCESS, { response }),
    failure: error => action(GET_CURRENT_USER.FAILURE, { error }),
}