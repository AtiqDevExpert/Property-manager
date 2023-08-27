import {ActionTypes} from '../types';

const initialState = {
  userData: {},
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    // case ActionTypes.AUTH_LOGIN_SUCCESS:
    //   return {...state, userData: action.data};
    default:
      return state;
  }
};

export default authReducer;
