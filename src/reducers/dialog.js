import * as ActionsTypes from '../actiontypes/dialog'

const initialState = {
    loginDialogState: false,
    registerDialogState: false
}

const dialog = (state = initialState, action) => {
    switch(action.type) {
        case ActionsTypes.TOGLE_LOGIN_DIALOG: {
            return {
                ...state,
                loginDialogState: !state.loginDialogState,
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default dialog