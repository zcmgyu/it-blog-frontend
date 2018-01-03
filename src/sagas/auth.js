import { put, call } from 'redux-saga/effects'
import * as API from '../apis/auth'
// import * as AuthActions from '../actions/authenticate'
import { authenticate, register } from '../actions/authenticate'
// import * as DialogActions from '../actions/dialog'
import { getAuth, setAuth, removeAuth } from '../utils/localStorage'
// import { refreshToken, register } from '../apis/auth'
import { push } from 'react-router-redux'

// Worker
export function* authenticateWorker({ credentials }) {
    try {
        console.log('COME TO authenticateWorker')
        console.log(credentials)
        const response = yield call(API.doLogin, credentials)
        console.log('response')
        console.log(response)
        yield put(authenticate.success(response))
        console.log('SUCCESS')
        const { access_token, refresh_token } = response.data
        yield setAuth({ access_token, refresh_token })
        // Back to previous page
        yield put(push('/'))
    } catch (err) {
        console.log('FAILURE')
        yield put(authenticate.failure(err))
    }
}

// Worker
export function* registerWorker({ payload }) {
    try {
        const response = yield call(API.register, payload)
        yield put(register.success(response))
        const data = { credentials: { username: payload.username, password: payload.password } }
        yield authenticateWorker(data)
    } catch (err) {
        yield put(register.failure(err))
    }
}


// finally the function you’ll use inside your sagas to make requests 
export function* authenticatedRequest(...args) {
    // get the current access token, wait for it if it needs refreshing 
    const { access_token, refresh_token } = yield getAuth();
    if (access_token) {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`
        };
        try {
            return yield call(...args, headers);
        } catch (error) {
            if (error.response && error.response.status === 401) {
                try {
                    const response = yield call(API.refreshToken, refresh_token);
                    yield setAuth(response.data)
                    yield authenticatedRequest(...args)
                } catch (error) {
                    yield removeAuth()
                    console.log('Cannot refresh access token')
                }
            } else {
                throw error;
            }
        }
    } else {
        // Required Login
        // throw new AuthenticationSagaError("No access token");
    }
}