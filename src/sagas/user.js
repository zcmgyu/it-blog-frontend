import { put, call } from "redux-saga/effects";
import * as API from "../apis/user";
import { getCurrentUser, forgotPassword, getFollow, putFollow } from "../actions/user";
import { authenticatedRequest } from "./auth";
import { push } from "react-router-redux";
import { getPostsByAuthorId, getBookmark } from "../actions/user";
import { follow } from "../apis/user";

// Worker
export function* getCurrentUserWorker() {
  try {
    const payload = { user_id: "self" };
    const response = yield authenticatedRequest(API.getCurrentUser, payload);
    yield put(getCurrentUser.success(response));
  } catch (error) {
    yield put(getCurrentUser.failure(error));
  }
}

// Worker
export function* sendMailRequestWorker({ payload }) {
  try {
    const response = yield call(API.sendMail, payload);
    yield put(forgotPassword.success(response));
    yield put(push("/forgot-password/done"));
  } catch (error) {
    yield put(forgotPassword.failure(error));
  }
}

export function* resetPasswordWorker({ payload }) {
  try {
    const response = yield call(API.resetPassword, payload);
    yield put(forgotPassword.success(response));
    yield put(push("/forgot-password/done"));
  } catch (error) {
    yield put(forgotPassword.failure(error));
  }
}

export function* getPostsByAuthorIdWorker({ payload }) {
  try {
    const response = yield call(API.getPostsByAuthorId, payload);
    yield put(getPostsByAuthorId.success(response));
  } catch (error) {
    yield put(getPostsByAuthorId.failure(error));
  }
}

export function* getBookmarkWorker() {
  try {
    const response = yield authenticatedRequest(API.getBookmark);
    yield put(getBookmark.success(response));
  } catch (error) {
    yield put(getBookmark.failure(error));
  }
}

export function* getFollowingWorker({ payload }) {
  try {
    const response = yield call(API.getFollow, payload);
    yield put(getFollow.following.success(response));
  } catch (error) {
    yield put(getFollow.following.failure(error));
  }
}

export function* getFollowersWorker({ payload }) {
  try {
    const response = yield call(API.getFollow, payload);
    yield put(getFollow.followers.success(response));
  } catch (error) {
    yield put(getFollow.followers.failure(error));
  }
}

export function* followWorker({ payload }) {
  try {
    const response = yield authenticatedRequest(API.follow, payload);
    yield put(putFollow.success(response));
  } catch (error) {
    yield put(putFollow.failure(error));
  }
}
