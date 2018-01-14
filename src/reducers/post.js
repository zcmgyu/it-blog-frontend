// import * as ActionsTypes from '../actiontypes/post'
import { CREATE_POST, UPDATE_POST, GET_POST, SAVE_DRAFT, CLEAN_CURRENT_POST, EDIT_POST_TRIGGER } from '../actiontypes/post'

const initialState = {
    current_post: {
        content: null
    }
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        // case CREATE_POST.SUCCESS: {
        // console.log('CREATE_POST.SUCCESS')
        // case UPDATE_POST.SUCCESS: {
        // return {
        // ...state,
        // content: action.response.data.result
        // }
        // }
        // case CREATE_POST.FAILURE: {
        // // case UPDATE_POST.FAILURE: {
        //     return {
        //         ...state
        //     }
        // }
        case SAVE_DRAFT.REQUEST: {
            const content = action.payload
            // const title = content.blocks[0] && content.blocks[0].text
            return {
                ...state,
                current_post: {
                    ...state.current_post,
                    content
                }

            }
        }
        case GET_POST.SUCCESS: {
            return {
                ...state,
                current_post: action.response.data.result,
                is_loaded: true
            }
        }
        case GET_POST.FAILURE: {
            return {
                ...state,
                loading_post: false
            }
        }
        case CLEAN_CURRENT_POST: {
            return {
                ...state,
                current_post: {},
                is_loaded: false,
                is_edit: false
            }
        }
        case EDIT_POST_TRIGGER: {
            return {
                ...state,
                is_edit: !state.is_edit
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