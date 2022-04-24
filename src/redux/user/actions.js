import {
  GET_INFORMATIOIN_USER_REQUEST,
  GET_INFORMATIOIN_USER_RESPONSE,
} from "./constants";

export const getInformationUserRequest = (data) => ({
  type: GET_INFORMATIOIN_USER_REQUEST,
  payload: data,
});

export const getInformationUserResponse = (data, status, code, message) => ({
  type: GET_INFORMATIOIN_USER_RESPONSE,
  payload: {
    data,
    status,
    code,
    message,
  },
});
