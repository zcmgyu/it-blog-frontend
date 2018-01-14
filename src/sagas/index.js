import { takeEvery, all } from 'redux-saga/effects'
import { AUTH, REGISTER } from '../actiontypes/authenticate'
import { CREATE_POST, UPDATE_POST, GET_POST } from '../actiontypes/post'
import { CATEGORY } from '../actiontypes/category'
import { GET_CURRENT_USER, FORGOT_PASSWORD, RESET_PASSWORD } from '../actiontypes/user'
import { authenticateWorker, registerWorker } from './auth'
import { createPostWorker, getPostWorker, updatePostWorker } from './post'
import { getCurrentUserWorker, sendMailRequestWorker, resetPasswordWorker } from './user'
import { getCategoryWorker } from './category'

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
        takeEvery(CREATE_POST.REQUEST, createPostWorker),
        // Watching upcatePost
        takeEvery(UPDATE_POST.REQUEST, updatePostWorker),
        // Watching getPost
        takeEvery(GET_POST.REQUEST, getPostWorker),
        // Watching sendMailRequest
        takeEvery(FORGOT_PASSWORD.REQUEST, sendMailRequestWorker),
        // Watching resetPasswordWorker
        takeEvery(RESET_PASSWORD.REQUEST, resetPasswordWorker),
        // Watching getCategoryWorker
        takeEvery(CATEGORY.REQUEST, getCategoryWorker)
    ])
}