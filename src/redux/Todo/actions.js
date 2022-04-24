import { GET_TODO_REQUEST, GET_TODO_RESPONSE } from "./constants";

export const getTodoRequest = () => ({
  type: GET_TODO_REQUEST,
});

export const getTodoResponse = (data, stauts, code, message) => ({
  type: GET_TODO_RESPONSE,
  payload: {
    data,
    stauts,
    code,
    message,
  },
});
