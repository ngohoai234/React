import { LIST_STATUS_ACTION } from "../rootConstant";
import { GET_TODO_REQUEST, GET_TODO_RESPONSE } from "./constants";

export const INIT_STATE = {
  list: {
    data: [],
    status: LIST_STATUS_ACTION.LOADING,
    message: "",
    code: "",
  },
};

const todoReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_TODO_REQUEST:
      return {
        ...state,
        list: {
          data: [],
          status: LIST_STATUS_ACTION.LOADING,
          message: "",
          code: "",
        },
      };
    case GET_TODO_RESPONSE:
      return {
        ...state,
        list: {
          data: action.payload.data,
          status: action.payload.status,
          message: action.payload.message,
          code: action.payload.code,
        },
      };
    default:
      return state;
  }
};
export default todoReducer;
