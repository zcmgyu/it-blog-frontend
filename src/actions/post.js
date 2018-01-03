// import * as ActionsTypes from '../actiontypes/post'

// export const postRequest = (payload) => {
// 	return {
// 		type: ActionsTypes.POST_REQUEST,
// 		payload: payload
// 	}
// }

// export const postSuccess = (response) => ({
// 	type: ActionsTypes.POST_SUCCESS,
// 	response: response
// })

// export const postFail = (error) => ({
// 	type: ActionsTypes.POST_FAIL,
// 	error: error
// })


// export const saveDraft = (payload) => ({
//     type: ActionsTypes.SAVE_DRAFT,
//     payload: payload
// })

// export const getPostRequest = (payload) => {
//     console.log('INSIDE DEBUG 2')
// 	return {
// 		type: ActionsTypes.GET_POST_REQUEST,
// 		payload
// 	}
// }

// export const getPostSuccess = (response) => ({
// 	type: ActionsTypes.POST_SUCCESS,
// 	response: response
// })

// export const getPostFail = (error) => ({
// 	type: ActionsTypes.POST_FAIL,
// 	error: error
// })

import action from './'
import { POST, SAVE_DRAFT, GET_POST } from '../actiontypes/post'

export const post = {
    request: payload => action(POST.REQUEST, { payload }),
    success: response => action(POST.SUCCESS, { response }),
    failure: error => action(POST.FAILURE, { error }),
}

export const getPost = {
    request: payload => action(GET_POST.REQUEST, { payload }),
    success: response => action(GET_POST.SUCCESS, { response }),
    failure: error => action(GET_POST.FAILURE, { error }),
}

export const saveDraft = {
    request: payload => action(SAVE_DRAFT.REQUEST, { payload }),
    success: response => action(SAVE_DRAFT.SUCCESS, { response }),
    failure: error => action(SAVE_DRAFT.FAILURE, { error }),
}