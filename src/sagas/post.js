import { put } from 'redux-saga/effects'
import * as API from '../apis/post'
import { push } from 'react-router-redux'
import { post, getPost } from '../actions/post';
import { authenticatedRequest } from './auth';

// Worker
export function* createPostWorker({payload}) {
    try {
        console.log(payload)
        console.log('INSIDE createPostWorker')
        const response = yield authenticatedRequest(API.createPost, payload)
        yield put(post.success(response))
        console.log('INSIDE createPostWorker >>> SUCCESS 1')
        console.log(response)
        const { post_id, transliterated } = response.data.result
        console.log('INSIDE createPostWorker >>> SUCCESS 2')
        yield put(push(`/posts/${transliterated}-${post_id}`))
        console.log('INSIDE createPostWorker >>> SUCCESS 3')
    } catch (err) {
        console.log('INSIDE createPostWorker >>> FAILURE')
        yield put(post.failure(err))
    }
}

// Worker
export function* getPostWorker({payload}) {
    try {
        const response = yield authenticatedRequest(API.getPost, payload)
        yield put(getPost.success(response))
        // const { post_id, transliterated } = response.data.result
        // yield put(push(`/posts/${transliterated}-${post_id}`))
    } catch (err) {
        yield put(getPost.failure(err))
    }
}