import { GET_CURRENT_USER, FORGOT_PASSWORD } from '../actiontypes/user'

const user = (state = {}, action) => {
    switch (action.type) {
        case GET_CURRENT_USER.SUCCESS: {
            console.log("REDUCER >>> GET_CURRENT_USER.SUCCESS")
            return {
                ...state,
                current_user_info: action.response.data.result
            }
        }
        case GET_CURRENT_USER.FAILURE: {
            return {
                ...state,
                current_user_info: null
            }
        }
        case FORGOT_PASSWORD.SUCCESS: {
            console.log('PRINT OUT ACTION')
            console.log(action)
            return {
                ...state,
                send_mail: {
                    message: action.response.data.result.message
                }
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default user