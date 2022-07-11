import { LIST_STATUS_ACTION } from '../rootConstant';
import { USER_LOGIN_REQUEST, USER_LOGIN_RESPONSE } from './constants';

export const INIT_STATE = {
  user: {
    data: null,
    status: LIST_STATUS_ACTION.LOADING,
    message: '',
    code: '',
  },
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST: {
      return {
        ...state,
        data: null,
        status: LIST_STATUS_ACTION.LOADING,
        message: '',
        code: '',
      };
    }
    case USER_LOGIN_RESPONSE: {
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        message: action.payload.message,
        code: action.payload.code,
      };
    }
    default:
      return state;
  }
};
export default userReducer;
