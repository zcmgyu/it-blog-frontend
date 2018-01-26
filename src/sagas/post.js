import { put, call } from 'redux-saga/effects'
import * as API from '../apis/post'
import { push } from 'react-router-redux'
import { createPost, updatePost, getPost, cleanCurrentPost, getTop4ByCategory, bookmarkPost } from '../actions/post'
import { authenticatedRequest } from './auth'
import { favoritePost } from '../actions/post';

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

// Worker
export function* getTop4PostByCategoryWorker({payload}) {
    try {
        const response = yield call(API.getTop4PostByCategory, payload)
        yield put(getTop4ByCategory.success(response))
    } catch (error) {
        yield put(getTop4ByCategory.failure(error))
    }
}

// Bookmark post
export function* bookmarkPostWorker({payload}) {
    try {
        const response = yield authenticatedRequest(API.bookmarkPost, payload)
        yield put(bookmarkPost.success(response))
    } catch (error) {
        yield put(bookmarkPost.failure(error))
    }
}

// Bookmark post
export function* favoritePostWorker({payload}) {
    try {
        const response = yield authenticatedRequest(API.favoritePost, payload)
        yield put(favoritePost.success(response))
    } catch (error) {
        yield put(favoritePost.failure(error))
    }
}