import { put, call } from "redux-saga/effects";
import * as API from "../apis/search";
import { search } from "../actions/search";

// Worker
export function* searchWorker({ payload }) {
  try {
    const response = yield call(API.search, payload);
    yield put(search.success(response));
  } catch (error) {
    yield put(search.failure(error));
  }
}
