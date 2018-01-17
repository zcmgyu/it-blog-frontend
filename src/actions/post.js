import action from './'
import * as ACT_TYPES from '../actiontypes/post'

export const createPost = {
    request: payload => action(ACT_TYPES.CREATE_POST.REQUEST, { payload }),
    success: response => action(ACT_TYPES.CREATE_POST.SUCCESS, { response }),
    failure: error => action(ACT_TYPES.CREATE_POST.FAILURE, { error }),
}

export const updatePost = {
    request: payload => action(ACT_TYPES.UPDATE_POST.REQUEST, { payload }),
    success: response => action(ACT_TYPES.UPDATE_POST.SUCCESS, { response }),
    failure: error => action(ACT_TYPES.UPDATE_POST.FAILURE, { error }),
}

export const getPost = {
    request: payload => action(ACT_TYPES.GET_POST.REQUEST, { payload }),
    success: response => action(ACT_TYPES.GET_POST.SUCCESS, { response }),
    failure: error => action(ACT_TYPES.GET_POST.FAILURE, { error }),
}

export const getTop4ByCategory = {
    request: payload => action(ACT_TYPES.GET_TOP_4_BY_CATE.REQUEST, { payload }),
    success: response => action(ACT_TYPES.GET_TOP_4_BY_CATE.SUCCESS, { response }),
    failure: error => action(ACT_TYPES.GET_TOP_4_BY_CATE.FAILURE, { error }),
}

export const cleanCurrentPost = () => action(ACT_TYPES.CLEAN_CURRENT_POST)

export const editPostTrigger = () => action(ACT_TYPES.EDIT_POST_TRIGGER)

export const saveDraft = {
    request: payload => action(ACT_TYPES.SAVE_DRAFT.REQUEST, { payload }),
    success: response => action(ACT_TYPES.SAVE_DRAFT.SUCCESS, { response }),
    failure: error => action(ACT_TYPES.SAVE_DRAFT.FAILURE, { error }),
}

