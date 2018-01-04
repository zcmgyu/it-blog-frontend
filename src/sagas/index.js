import { takeEvery, all } from 'redux-saga/effects'
import { AUTH, REGISTER } from '../actiontypes/authenticate'
import { POST, GET_POST } from '../actiontypes/post'
import { GET_CURRENT_USER } from '../actiontypes/user'
import { authenticateWorker, registerWorker } from './auth'
import { createPostWorker, getPostWorker } from './post'
import { getCurrentUserWorker } from './user'

// Root Sagas Watcher
export default function* rootSaga() {
    yield all([
        // Watching loginUserSaga
        takeEvery(AUTH.REQUEST, authenticateWorker),
        takeEvery(REGISTER.REQUEST, registerWorker),
        takeEvery(GET_CURRENT_USER.REQUEST, getCurrentUserWorker),
        // Watching logoutUserSaga
        // takeEvery(AuthActionsTypes.LOGOUT_USER_REQUEST, logoutUserSaga)
        // Watching createPost
        takeEvery(POST.REQUEST, createPostWorker),
        // Watching getPost
        takeEvery(GET_POST.REQUEST, getPostWorker)
    ])
}