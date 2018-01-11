import { put, call } from 'redux-saga/effects'
import * as API from '../apis/auth'
import { getCurrentUserWorker } from './user'
import { authenticate, register } from '../actions/authenticate'
import { getAuth, setAuth, removeAuth } from '../utils/localStorage'
// import { refreshToken, register } from '../apis/auth'
import { push } from 'react-router-redux'

// Worker
export function* authenticateWorker({ credentials }) {
    try {
        const response = yield call(API.doLogin, credentials)
        yield put(authenticate.success(response))
        const { access_token, refresh_token } = response.data
        yield setAuth({ access_token, refresh_token })
        // Get user info
        yield getCurrentUserWorker();
        // Back to previous page
        yield put(push('/'))
    } catch (error) {
        const { status, data } = error.response

        if (status === 400 && data.error === 'invalid_grant') {
            let newError = {
                ...error,
                response: {
                    ...error.response,
                    data: {
                        ...error.response.data,
                        result: {
                            message: "The username or password is incorrect."
                        }
                    }
                }
            }
            yield put(authenticate.failure(newError))
        } else {
            yield put(authenticate.failure(error))
        }
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