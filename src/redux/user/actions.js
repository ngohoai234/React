import { USER_LOGIN_REQUEST, USER_LOGIN_RESPONSE } from './constants';

export const loginRequest = (name, password) => ({
  type: USER_LOGIN_REQUEST,
  payload: { name, password },
});

export const loginResponse = (data, status, code, message) => ({
  type: USER_LOGIN_RESPONSE,
  payload: {
    data,
    status,
    code,
    message,
  },
});
