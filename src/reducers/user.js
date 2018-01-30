import { 
    GET_CURRENT_USER, 
    FORGOT_PASSWORD, 
    GET_POSTS_BY_AUTHOR_ID, 
    GET_BOOKMARK,
    GET_FOLLOWERS,
    GET_FOLLOWING
} from '../actiontypes/user'

const initialState = {
    send_mail: {
        loading: false
    },
    current_user_info: null
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENT_USER.SUCCESS: {
            return {
                ...state,
                current_user_info: action.response.data.result.data,
            }
        }
        case GET_CURRENT_USER.FAILURE: {
            return {
                ...state,
                current_user_info: null
            }
        }
        case FORGOT_PASSWORD.REQUEST: {
            return {
                ...state,
                send_mail: {
                    loading: true
                }
            }
        }
        case FORGOT_PASSWORD.SUCCESS: {
            return {
                ...state,
                send_mail: {
                    message: action.response.data.result.message,
                    loading: false
                }
            }
        }
        case FORGOT_PASSWORD.FAILURE: {
            return {
                ...state,
                send_mail: {
                    message: action.error.response.data.result.message,
                    loading: false
                }
            }
        }
        case GET_POSTS_BY_AUTHOR_ID.SUCCESS: {
            return {
                ...state,
                posts_by_author: action.response.data.result.data
            }
        }
        case GET_BOOKMARK.SUCCESS: {
            return {
                ...state,
                bookmark: action.response.data.result.data
            }
        }
        case GET_FOLLOWING.SUCCESS: {
            return {
                ...state,
                following: action.response.data.result.data
            }
        }
        case GET_FOLLOWERS.SUCCESS: {
            return {
                ...state,
                followers: action.response.data.result.data
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