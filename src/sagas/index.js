import { put, call, takeEvery, all } from 'redux-saga/effects'
import * as AuthActionsTypes from '../actiontypes/authentication'
import * as AuthActions from '../actions/authentication'
import * as DialogActions from '../actions/dialog'
import * as API from '../apis'
import { goBack } from 'react-router-redux'

// Worker
export function* loginUserSaga({ payload }) {
    const { username, password } = payload
    try {
        const response = yield call(API.doLogin, username, password)
        yield put(AuthActions.loginUserSuccess(response))
        yield put(DialogActions.toggleLoginDialog())
        // Back to previous page
        // yield put(goBack())
    } catch (err) {
        yield put(AuthActions.loginUserFailure(err))
    }
}

// Root Sagas Watcher
export default function* rootSaga() {
    yield all([
        // Watching loginUserSaga
        takeEvery(AuthActionsTypes.LOGIN_USER_REQUEST, loginUserSaga)
    ])
}