import { put } from 'redux-saga/effects'
import * as API from '../apis/user'
import { getCurrentUser } from '../actions/user'
import { authenticatedRequest } from './auth'
// import { getAuth, setAuth, removeAuth } from '../utils/localStorage'

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

// export function* getTargetUserInfo({ payload }) {
//     try {
//         const response = yield authenticatedRequest(API.getUserInfo, payload)
//     } catch (error) {
//     }
// }