import { GET_CURRENT_USER } from '../actiontypes/user'

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
        default: {
            return {
                ...state
            }
        }
    }
}

export default user