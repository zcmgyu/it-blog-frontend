import action from './'
import { CREATE_POST, UPDATE_POST, SAVE_DRAFT, GET_POST, CLEAN_CURRENT_POST, EDIT_POST_TRIGGER } from '../actiontypes/post'

export const createPost = {
    request: payload => action(CREATE_POST.REQUEST, { payload }),
    success: response => action(CREATE_POST.SUCCESS, { response }),
    failure: error => action(CREATE_POST.FAILURE, { error }),
}

export const updatePost = {
    request: payload => action(UPDATE_POST.REQUEST, { payload }),
    success: response => action(UPDATE_POST.SUCCESS, { response }),
    failure: error => action(UPDATE_POST.FAILURE, { error }),
}

export const getPost = {
    request: payload => action(GET_POST.REQUEST, { payload }),
    success: response => action(GET_POST.SUCCESS, { response }),
    failure: error => action(GET_POST.FAILURE, { error }),
}

export const cleanCurrentPost = () => action(CLEAN_CURRENT_POST)

export const editPostTrigger = () => action(EDIT_POST_TRIGGER)

export const saveDraft = {
    request: payload => action(SAVE_DRAFT.REQUEST, { payload }),
    success: response => action(SAVE_DRAFT.SUCCESS, { response }),
    failure: error => action(SAVE_DRAFT.FAILURE, { error }),
}