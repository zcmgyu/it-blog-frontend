import { put, call } from 'redux-saga/effects'
import * as API from '../apis'
import * as AuthActions from '../actions/authentication'
import * as DialogActions from '../actions/dialog'

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