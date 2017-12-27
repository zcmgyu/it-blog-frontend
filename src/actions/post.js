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


export const saveDraft = (payload) => ({
    type: ActionsTypes.SAVE_DRAFT,
    payload: payload
})

export const getPostRequest = (payload) => {
    console.log('INSIDE DEBUG 2')
	return {
		type: ActionsTypes.GET_POST_REQUEST,
		payload
	}
}

export const getPostSuccess = (response) => ({
	type: ActionsTypes.POST_SUCCESS,
	response: response
})

export const getPostFail = (error) => ({
	type: ActionsTypes.POST_FAIL,
	error: error
})