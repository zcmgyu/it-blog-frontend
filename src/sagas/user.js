import { put, call } from 'redux-saga/effects'
import * as API from '../apis/user'
import { getCurrentUser, forgotPassword } from '../actions/user'
import { authenticatedRequest } from './auth'
import { push } from 'react-router-redux'

// Worker
export function* getCurrentUserWorker() {
    try {
        const payload = { user_id: 'self' }
        const response = yield authenticatedRequest(API.getCurrentUser, payload)
        yield put(getCurrentUser.success(response))
    } catch (error) {
        yield put(getCurrentUser.failure(error))
    }
}


// Worker
export function* sendMailRequestWorker({ payload }) {
    try {
        const response = yield call(API.sendMail, payload)
        yield put(forgotPassword.success(response))
        yield put(push('/forgot-password/done'))
    } catch (error) {
        yield put(forgotPassword.failure(error))
    }
}

export function* resetPasswordWorker({ payload }) {
    try {
        const response = yield call(API.resetPassword, payload)
        yield put(forgotPassword.success(response))
        yield put(push('/forgot-password/done'))
    } catch (error) {
        yield put(forgotPassword.failure(error))
    }
}

// export function* getTargetUserInfo({ payload }) {
//     try {
//         const response = yield authenticatedRequest(API.getUserInfo, payload)
//     } catch (error) {
//     }
// }