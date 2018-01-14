import { put, call } from 'redux-saga/effects'
import * as API from '../apis/post'
import { push } from 'react-router-redux'
import { createPost, updatePost, getPost, cleanCurrentPost } from '../actions/post'
import { authenticatedRequest } from './auth'

// Worker
export function* createPostWorker({payload}) {
    try {
        const response = yield authenticatedRequest(API.createPost, payload)
        yield put(cleanCurrentPost())
        // yield put(createPost.success(response))
        const { post_id, transliterated } = response.data.result
        yield put(push(`/posts/${post_id}/${transliterated}`))
    } catch (err) {
        yield put(createPost.failure(err))
    }
}

// Worker
export function* updatePostWorker({payload}) {
    try {
        const response = yield authenticatedRequest(API.updatePost, payload)
        console.log("++++++++++++++++++++++++ DEBUG PUT ++++++++++++++++++++++++")
        console.log(response)
        // yield put(updatePost.success(response))
        const { post_id, transliterated } = response.data.result
        yield put(push(`/posts/${post_id}/${transliterated}`))
    } catch (err) {
        yield put(updatePost.failure(err))
    }
}


// Worker
export function* getPostWorker({payload}) {
    try {
        // const response = yield authenticatedRequest(API.getPost, payload)
        const response = yield call(API.getPost, payload)
        yield put(getPost.success(response))
    } catch (error) {
        yield put(getPost.failure(error))
    }
}