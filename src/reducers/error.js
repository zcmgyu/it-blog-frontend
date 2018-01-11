import * as ActionTypes from '../actiontypes/error'

// Updates error message to notify about the failed fetches.
// A reducer that handles any action with an error field.
const initialState = {
    message: null,
    open: false
}

const error = (state = initialState, action) => {
    const { type, error } = action
    if (type === ActionTypes.RESET_ERROR_MESSAGE) {
        console.log("RESET_ERROR_MESSAGE")
        return initialState
    } else if (error) {
        try {
            const { message } = error.response.data.result
            console.log(message)
            return {
                open: true,
                message: message || 'Something went wrong!'
            }
        } catch (error) {
            console.log("COME TO ERROR LIKE EXPECTED")
            return {
                open: true,
                message: 'Something went wrong!'
            }
        }
        

    }

    return { ...state }
}

export default error