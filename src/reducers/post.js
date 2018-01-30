// import * as ActionsTypes from '../actiontypes/post'
// import { CREATE_POST, UPDATE_POST, GET_POST, SAVE_DRAFT, CLEAN_CURRENT_POST, EDIT_POST_TRIGGER, GET_TOP_4_BY_CATE } from '../actiontypes/post'
import * as ACT_TYPES from '../actiontypes/post'

const initialState = {
    // current_post: {
        // content: null
    // }
    current_post: null
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case ACT_TYPES.GET_TOP_4_BY_CATE.SUCCESS: {
            return {
                ...state,
                list_post: action.response.data.result.data
            }
        }
        case ACT_TYPES.SAVE_DRAFT.REQUEST: {
            const { content, rawContent } = action.payload
            return {
                ...state,
                current_post: {
                    ...state.current_post,
                    content,
                    rawContent
                }
            }
        }
        case ACT_TYPES.GET_POST.SUCCESS: {
            return {
                ...state,
                current_post: action.response.data.result,
                is_loaded: true
            }
        }
        case ACT_TYPES.GET_POST.FAILURE: {
            return {
                ...state,
                loading_post: false
            }
        }
        case ACT_TYPES.CLEAN_CURRENT_POST: {
            return {
                ...state,
                current_post: {},
                is_loaded: false,
                is_edit: false
            }
        }
        case ACT_TYPES.EDIT_POST_TRIGGER: {
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