// Worker
import * as API from '../apis/category'
import { getCategory } from '../actions/category'
import { call, put } from 'redux-saga/effects'


export function* getCategoryWorker() {
    try {
        const response = yield call(API.getCategory)
        yield put(getCategory.success(response))
    } catch (err) {
        yield put(getCategory.failure(err))
    }
}
