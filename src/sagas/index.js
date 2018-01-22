import { takeEvery, all } from "redux-saga/effects";
import { AUTH, REGISTER } from "../actiontypes/authenticate";
import {
  CREATE_POST,
  UPDATE_POST,
  GET_POST,
  GET_TOP_4_BY_CATE
} from "../actiontypes/post";
import { CATEGORY } from "../actiontypes/category";
import {
  GET_CURRENT_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  GET_POSTS_BY_AUTHOR_ID
} from "../actiontypes/user";
import { authenticateWorker, registerWorker } from "./auth";
import {
  createPostWorker,
  getPostWorker,
  updatePostWorker,
  getTop4PostByCategoryWorker
} from "./post";
import {
  getCurrentUserWorker,
  sendMailRequestWorker,
  resetPasswordWorker,
  getPostsByAuthorIdWorker
} from "./user";
import { getCategoryWorker } from "./category";

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
    takeEvery(CATEGORY.REQUEST, getCategoryWorker),
    // POST
    takeEvery(GET_TOP_4_BY_CATE.REQUEST, getTop4PostByCategoryWorker),
    // USERS
    takeEvery(GET_POSTS_BY_AUTHOR_ID.REQUEST, getPostsByAuthorIdWorker)
  ]);
}
