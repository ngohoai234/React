import { call, put, takeLatest } from "redux-saga/effects";

import { GET_INFORMATIOIN_USER_REQUEST } from "./constants";
import { getInformationUserResponse } from "./actions";
import { axiosAPIInstance } from "../../lib/axiosRequest";
import { API_URL, LIST_STATUS_ACTION } from "../rootConstant";

function* getInformationUserRequest(action) {
  try {
    const res = yield call(
      async () =>
        await axiosAPIInstance.get(API_URL.SERVER + API_URL.COURSES.SEARCH)
    );
    yield put(
      getInformationUserResponse(res?.data?.data, LIST_STATUS_ACTION.SUCCESS),
      res.data.code,
      res.data.message
    );
  } catch (error) {
    yield put(
      getInformationUserResponse(error, LIST_STATUS_ACTION.FAILED),
      error?.code,
      error.message
    );
  }
}

export default function* rootSaga() {
  yield takeLatest(GET_INFORMATIOIN_USER_REQUEST, getInformationUserRequest);
}
