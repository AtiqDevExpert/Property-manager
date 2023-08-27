import {ActionTypes} from '../types';

const initialState = {
  isLoading: false,
};

const homeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.APP_LOADING:
      return {...state, isLoading: action.status};
    default:
      return state;
  }
};

export default homeReducer;
