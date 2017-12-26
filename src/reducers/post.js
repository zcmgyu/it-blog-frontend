import * as ActionsTypes from '../actiontypes/post'

const initialState = {
    post_uri: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionsTypes.POST_SUCCESS: {
            return {
                ...state
            }
        }
        case ActionsTypes.POST_FAIL: {
            return {
                ...state
            }
        }
        case ActionsTypes.SAVE_DRAFT: {
            const content = action.payload
            const title = content.blocks[0].text
            return {
                ...state,
                title,
                content
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default authReducer