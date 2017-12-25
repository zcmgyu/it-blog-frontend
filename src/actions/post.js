import * as ActionsTypes from '../actiontypes/post'

export const postRequest = (payload) => {
	return {
		type: ActionsTypes.POST_REQUEST,
		payload: payload
	}
}

export const postSuccess = (response) => ({
	type: ActionsTypes.POST_SUCCESS,
	response: response
})

export const postFail = (error) => ({
	type: ActionsTypes.POST_FAIL,
	error: error
})