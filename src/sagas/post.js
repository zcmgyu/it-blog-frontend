import { put, call } from 'redux-saga/effects'
import * as API from '../apis/post'
import * as PostActions from '../actions/post'
import { push } from 'react-router-redux'

// Worker
export function* createPost(payload) {
    console.log('inside saga create post')
    console.log(payload)
    try {
        const response = yield call(API.createPost, payload)
        yield put(PostActions.postSuccess(response))
        console.log(response)
        const { post_id, transliterated } = response.data.result
        yield put(push(`/posts/${transliterated}-${post_id}`))
    } catch (err) {
        yield put(PostActions.postFail(err))
    }
}