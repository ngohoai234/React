import { call, put, takeLatest } from 'redux-saga/effects';

import { USER_LOGIN_REQUEST } from './constants';
import { loginResponse } from './actions';
import axiosAPIInstance from '../../lib/axiosRequest';
import { API_URL, LIST_STATUS_ACTION } from '../rootConstant';

function* loginRequest(action) {
  try {
    const res = yield call(
      async () =>
        await axiosAPIInstance.post(API_URL.SERVER + API_URL.USER.LOGIN, {
          tendangnhap: action.payload.name,
          matkhau: action.payload.password,
        })
    );
    yield put(
      loginResponse(res?.data?.data, LIST_STATUS_ACTION.SUCCESS, res.data.code, res.data.message)
    );
  } catch (error) {
    console.log(error, ' message');
    yield put(loginResponse(error, LIST_STATUS_ACTION.FAILED, error?.status, error?.data?.message));
  }
}

export default function* rootSaga() {
  yield takeLatest(USER_LOGIN_REQUEST, loginRequest);
}
