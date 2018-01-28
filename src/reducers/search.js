// import * as ActionsTypes from '../actiontypes/post'
// import { CREATE_POST, UPDATE_POST, GET_POST, SAVE_DRAFT, CLEAN_CURRENT_POST, EDIT_POST_TRIGGER, GET_TOP_4_BY_CATE } from '../actiontypes/post'
import * as ACT_TYPES from '../actiontypes/search'

const initialState = {
    result: null
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case ACT_TYPES.SEARCH.SUCCESS: {
            return {
                ...state,
                result: action.response.data.result.data
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