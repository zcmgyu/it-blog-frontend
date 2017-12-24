import * as ActionsTypes from '../actiontypes/post'

const initialState = {
    isPost: window.location.pathname === '/post'
}

const post = (state = initialState, action) => {
    switch (action.type) {
        case ActionsTypes.REQUEST_DISPLAY: {
            return {
                isPost: true,
                ...state
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default post