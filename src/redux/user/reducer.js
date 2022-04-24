import { LIST_STATUS_ACTION } from "../rootConstant";
import {
  GET_INFORMATIOIN_USER_REQUEST,
  GET_INFORMATIOIN_USER_RESPONSE,
} from "./constants";

export const INIT_STATE = {
  user: {
    data: null,
    status: LIST_STATUS_ACTION.LOADING,
    message: "",
    code: "",
  },
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_INFORMATIOIN_USER_REQUEST:
      return {
        ...state,
        user: {
          data: null,
          status: LIST_STATUS_ACTION.LOADING,
          message: "",
          code: "",
        },
      };
    case GET_INFORMATIOIN_USER_RESPONSE:
      return {
        ...state,
        user: {
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
export default userReducer;
