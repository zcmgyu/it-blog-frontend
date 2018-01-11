import { put } from 'redux-saga/effects'
import * as API from '../apis/post'
import { push } from 'react-router-redux'
import { post, getPost } from '../actions/post';
import { authenticatedRequest } from './auth';

// Worker
export function* createPostWorker({payload}) {
    try {
        const response = yield authenticatedRequest(API.createPost, payload)
        yield put(post.success(response))
        const { post_id, transliterated } = response.data.result
        yield put(push(`/posts/${transliterated}-${post_id}`))
    } catch (err) {
        yield put(post.failure(err))
    }
}

// Worker
export function* getPostWorker({payload}) {
    try {
        const response = yield authenticatedRequest(API.getPost, payload)
        yield put(getPost.success(response))
    } catch (err) {
        yield put(getPost.failure(err))
    }
}