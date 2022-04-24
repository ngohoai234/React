import { call, put, takeLatest } from "redux-saga/effects";

import { GET_TODO_REQUEST } from "./constants";
import { getTodoResponse } from "./actions";
import { axiosAPIInstance } from "../../lib/axiosRequest";
import { API_URL, LIST_STATUS_ACTION } from "../rootConstant";

function* getInformationUserRequest(action) {
  try {
    const res = yield call(
      async () =>
        await axiosAPIInstance.get(API_URL.SERVER + API_URL.TODOS.SEARCH)
    );
    yield put(
      getTodoResponse(
        res?.data,
        LIST_STATUS_ACTION.SUCCESS,
        res.status,
        res.statusText
      )
    );
  } catch (error) {
    yield put(
      getTodoResponse(error, LIST_STATUS_ACTION.FAILED),
      error?.code,
      error.message
    );
  }
}

export default function* rootSaga() {
  yield takeLatest(GET_TODO_REQUEST, getInformationUserRequest);
}
