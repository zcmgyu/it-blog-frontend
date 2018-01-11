import action from './'
import { POST, SAVE_DRAFT, GET_POST, CLEAN_CURRENT_POST, EDIT_POST_TRIGGER } from '../actiontypes/post'

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

export const cleanCurrentPost = () => action(CLEAN_CURRENT_POST)

export const editPostTrigger = () => action(EDIT_POST_TRIGGER)

export const saveDraft = {
    request: payload => action(SAVE_DRAFT.REQUEST, { payload }),
    success: response => action(SAVE_DRAFT.SUCCESS, { response }),
    failure: error => action(SAVE_DRAFT.FAILURE, { error }),
}