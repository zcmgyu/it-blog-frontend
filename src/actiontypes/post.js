// export const POST_REQUEST = 'posts/POST_REQUEST'
// export const POST_SUCCESS = 'posts/POST_SUCCESS'
// export const POST_FAIL = 'posts/POST_FAIL'
// export const SAVE_DRAFT = 'posts/SAVE_DRAFT'

// export const GET_POST_REQUEST = 'posts/GET_POST_REQUEST'
// export const GET_POST_SUCCESS = 'posts/GET_POST_SUCCESS'
// export const GET_POST_FAIL = 'posts/GET_POST_FAIL'

import createRequestTypes from './'

export const CREATE_POST = createRequestTypes('CREATE_POST')
export const UPDATE_POST = createRequestTypes('UPDATE_POST')
export const GET_POST = createRequestTypes('GET_POST')
export const SAVE_DRAFT = createRequestTypes('SAVE_DRAFT')

export const CLEAN_CURRENT_POST = 'CLEAN_CURRENT_POST'
export const EDIT_POST_TRIGGER = 'EDIT_POST_TRIGGER'