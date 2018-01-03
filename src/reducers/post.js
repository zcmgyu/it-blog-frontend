// import * as ActionsTypes from '../actiontypes/post'
import { POST, GET_POST, SAVE_DRAFT } from '../actiontypes/post'

const initialState = {
    current_post: {
        content: null
    }
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case POST.SUCCESS: {
            return {
                ...state,
                content: action.payload
            }
        }
        case POST.FAILURE: {
            return {
                ...state
            }
        }
        case SAVE_DRAFT.REQUEST: {
            const content = action.payload
            const title = content.blocks[0].text
            return {
                ...state,
                title,
                content
            }
        }
        case GET_POST.SUCCESS: {
            return {
                ...state,
                current_post: action.response.data
            }
        }
        case GET_POST.FAILURE: {
            return {
                ...state,
                loading_post: false
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